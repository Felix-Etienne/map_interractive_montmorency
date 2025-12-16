import jsPDF from "jspdf";

// Exporte l'élément SVG (par défaut '#map-svg') en PDF.
// - clone l'SVG et inline les styles calculés pour conserver l'apparence (y compris polyline)
// - rasterize via canvas pour obtenir un PNG puis l'ajouter au PDF
// Retourne une Promise qui résout quand le PDF est enregistré.
export default async function exportSVGToPDF(selector = "#map-svg") {
    // Defensive: if called as an event handler (onClick={exportSVGToPDF}) React will pass
    // the MouseEvent as the first argument. Detect and use default selector in that case.
    if (selector && selector.target && selector.currentTarget) {
        selector = "#map-svg";
    }
    let svgEl = document.querySelector(selector) || document.querySelector("svg");
    if (!svgEl) {
        throw new Error(`SVG not found using selector '${selector}'`);
    }
    // If the selector pointed to a container (e.g. a <div id="map-svg"> that wraps the SVG),
    // find the actual SVG inside it.
    if (svgEl.tagName && svgEl.tagName.toLowerCase() !== "svg") {
        const inner = svgEl.querySelector("svg");
        if (inner) svgEl = inner;
    }

    // Clone l'élément pour ne pas modifier le DOM affiché
    const clone = svgEl.cloneNode(true);

    // Inline computed styles from original to clone so serialization garde l'apparence
    function inlineAllStyles(source, target) {
        const sourceEls = Array.from(source.querySelectorAll("*"));
        const targetEls = Array.from(target.querySelectorAll("*"));
        // include root element as well
        sourceEls.unshift(source);
        targetEls.unshift(target);

        for (let i = 0; i < sourceEls.length; i++) {
            const s = sourceEls[i];
            const t = targetEls[i];
            if (!s || !t) continue;
            const cs = window.getComputedStyle(s);
            // Build style text from computed styles (only necessary properties could be picked,
            // but here we inline most visual properties to be safe)
            const styleProps = [
                "fill", "stroke", "stroke-width", "font-size", "font-family",
                "font-weight", "opacity", "fill-opacity", "stroke-opacity",
                "text-anchor", "visibility", "display"
            ];
            const styleParts = [];
            for (const prop of styleProps) {
                const val = cs.getPropertyValue(prop);
                if (val) styleParts.push(`${prop}: ${val};`);
            }
            // Also copy transform if present (SVG transforms are important)
            const transform = cs.getPropertyValue("transform");
            if (transform && transform !== "none") styleParts.push(`transform: ${transform};`);

            const existing = t.getAttribute("style") || "";
            t.setAttribute("style", existing + " " + styleParts.join(" "));
        }
    }

    inlineAllStyles(svgEl, clone);

    // Determine width/height for the canvas
    const rect = svgEl.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;

    // Try viewBox for intrinsic size if available
    try {
        const vb = svgEl.viewBox && svgEl.viewBox.baseVal;
        if (vb && vb.width && vb.height) {
            width = vb.width;
            height = vb.height;
        } else {
            // fallback to width/height attributes
            const wAttr = parseFloat(svgEl.getAttribute("width"));
            const hAttr = parseFloat(svgEl.getAttribute("height"));
            if (wAttr) width = wAttr;
            if (hAttr) height = hAttr;
        }
    } catch (e) {
        // ignore and use rect sizes
    }

    // Ensure necessary namespaces and attributes on cloned root
    try {
        if (!clone.getAttribute("xmlns")) clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        if (!clone.getAttribute("xmlns:xlink")) clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        // Ensure viewBox exists so rasterization uses correct coordinate system
        if (!clone.getAttribute("viewBox")) {
            clone.setAttribute("viewBox", `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`);
        }
        // Ensure width/height attributes exist
        clone.setAttribute("width", Math.ceil(width));
        clone.setAttribute("height", Math.ceil(height));
    } catch (e) {
        // ignore
    }

    // Serialize clone
    const svgData = new XMLSerializer().serializeToString(clone);

    // Prepare both object URL and base64 fallback
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const svgBase64 = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));

    await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function () {
            try {
                const canvas = document.createElement("canvas");
                // Use requested pixel size: use width/height as numbers
                canvas.width = Math.ceil(width);
                canvas.height = Math.ceil(height);
                const ctx = canvas.getContext("2d");
                // White background (optional)
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const pngData = canvas.toDataURL("image/png");

                // Create PDF and add image
                const pdf = new jsPDF({
                    orientation: width >= height ? "landscape" : "portrait",
                    unit: "px",
                    format: [canvas.width, canvas.height]
                });

                pdf.addImage(pngData, "PNG", 0, 0, canvas.width, canvas.height);
                pdf.save("map.pdf");
                resolve();
            } catch (err) {
                reject(err);
            }
        };
        img.onerror = function (e) {
            try { URL.revokeObjectURL(url); } catch (er) { }
            // Try base64 fallback
            img.onerror = function () {
                // Provide more debug info in console
                console.error("Failed to load SVG as image. SVG snippet:", svgData.slice(0, 500));
                reject(new Error("Failed to load SVG as image"));
            };
            img.src = svgBase64;
            return;
        };
        img.src = url;
    });
    try { URL.revokeObjectURL(url); } catch (e) { }
}