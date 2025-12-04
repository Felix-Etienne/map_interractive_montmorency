import jsPDF from "jspdf";

// Rasterize an SVG (or a container that contains an SVG) and return a PNG data URL and dimensions.
async function rasterizeSVGToPNG(selector = "#map-svg") {
    if (selector && selector.target && selector.currentTarget) selector = "#map-svg";
    let svgEl = document.querySelector(selector) || document.querySelector("svg");
    if (!svgEl) return null;
    if (svgEl.tagName && svgEl.tagName.toLowerCase() !== "svg") {
        const inner = svgEl.querySelector("svg");
        if (inner) svgEl = inner;
    }

    const clone = svgEl.cloneNode(true);

    function inlineAllStyles(source, target) {
        const sourceEls = Array.from(source.querySelectorAll("*"));
        const targetEls = Array.from(target.querySelectorAll("*"));
        sourceEls.unshift(source);
        targetEls.unshift(target);
        for (let i = 0; i < sourceEls.length; i++) {
            const s = sourceEls[i];
            const t = targetEls[i];
            if (!s || !t) continue;
            const cs = window.getComputedStyle(s);
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
            const transform = cs.getPropertyValue("transform");
            if (transform && transform !== "none") styleParts.push(`transform: ${transform};`);
            const existing = t.getAttribute("style") || "";
            t.setAttribute("style", existing + " " + styleParts.join(" "));
        }
    }

    inlineAllStyles(svgEl, clone);

    const rect = svgEl.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    try {
        const vb = svgEl.viewBox && svgEl.viewBox.baseVal;
        if (vb && vb.width && vb.height) {
            width = vb.width;
            height = vb.height;
        } else {
            const wAttr = parseFloat(svgEl.getAttribute("width"));
            const hAttr = parseFloat(svgEl.getAttribute("height"));
            if (wAttr) width = wAttr;
            if (hAttr) height = hAttr;
        }
    } catch (e) { }

    try {
        if (!clone.getAttribute("xmlns")) clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        if (!clone.getAttribute("xmlns:xlink")) clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        if (!clone.getAttribute("viewBox")) clone.setAttribute("viewBox", `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`);
        clone.setAttribute("width", Math.ceil(width));
        clone.setAttribute("height", Math.ceil(height));
    } catch (e) { }

    const svgData = new XMLSerializer().serializeToString(clone);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const svgBase64 = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));

    return await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function () {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = Math.ceil(width);
                canvas.height = Math.ceil(height);
                const ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const pngData = canvas.toDataURL("image/png");
                resolve({ pngData, width: canvas.width, height: canvas.height });
            } catch (err) {
                reject(err);
            } finally {
                try { URL.revokeObjectURL(url); } catch (e) { }
            }
        };
        img.onerror = function () {
            // fallback to base64 data URI
            img.onerror = function () { reject(new Error("Failed to rasterize SVG")); };
            img.src = svgBase64;
        };
        img.src = url;
    });
}

// Default export: generate a single PDF that contains both maps stacked vertically on one page.
export default async function exportBothSVGToPDF(options = {}) {
    // options: { selectors: ['#map-svg', '#map-svg2'], filename }
    const selectors = options.selectors || ["#map-svg", "#map-svg2"];
    const outputs = [];
    for (const sel of selectors) {
        try {
            const out = await rasterizeSVGToPNG(sel);
            if (out) outputs.push(out);
        } catch (e) {
            console.warn(`Failed to rasterize ${sel}:`, e);
        }
    }

    if (outputs.length === 0) throw new Error("No SVGs found to export");

    if (outputs.length === 1) {
        // single image -> save single-page PDF
        const o = outputs[0];
        const pdf = new jsPDF({ orientation: o.width >= o.height ? "landscape" : "portrait", unit: "px", format: [o.width, o.height] });
        pdf.addImage(o.pngData, "PNG", 0, 0, o.width, o.height);
        pdf.save(options.filename || "map.pdf");
        return;
    }

    // Combine images stacked vertically on one page
    const totalWidth = Math.max(...outputs.map(o => o.width));
    const totalHeight = outputs.reduce((s, o) => s + o.height, 0);

    const pdf = new jsPDF({ orientation: totalWidth >= totalHeight ? "landscape" : "portrait", unit: "px", format: [totalWidth, totalHeight] });

    let y = 0;
    for (const o of outputs) {
        // center smaller images horizontally
        const x = Math.round((totalWidth - o.width) / 2);
        pdf.addImage(o.pngData, "PNG", x, y, o.width, o.height);
        y += o.height;
    }

    pdf.save(options.filename || "maps_combined.pdf");
}
