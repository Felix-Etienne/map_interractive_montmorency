import { useEffect } from "react";
import { useRef, useState } from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import SearchBar from "../../../SearchBar/SearchBar";

export default function Premier({ width, height, highlightedPath, nodePositions }) {
    const Viewer = useRef(null);
    const [tool, setTool] = useState("auto");
    const [value, setValue] = useState(null);
    const [size, setSize] = useState({ width, height });
    const [hoveredSalle, setHoveredSalle] = useState(null);
    const [selectedSalle, setSelectedSalle] = useState(null);
    const [infoBox, setInfoBox] = useState({ visible: false, x: 0, y: 0, id: "" });
    const [classIds, setClassIds] = useState([]);

    useEffect(() => {
        setSize({ width, height });
    }, [width, height]);

    // pour recup les id des classes pour la search bar
    useEffect(() => {
        const allIds = Array.from(document.querySelectorAll(".salle"))
        .map((el) => el.id)
        .filter((id) => /^[A-Z]\d{4}$/.test(id)); 
        const uniqueIds = Array.from(new Set(allIds));
        setClassIds(uniqueIds);
    }, []);


    useEffect(() => {
        document.querySelectorAll(".salle").forEach(salle => {
            const id = salle.id;
            const viewer = Viewer.current;
            salle.addEventListener("mouseenter", () => {
                highlightClass(id);
            });
            salle.addEventListener("mouseleave", () => setInfoBox(
                { ...infoBox, visible: false }
            ));
            salle.addEventListener("click", (e) => {
                setSelectedSalle(salle.id);
                console.log("Salle cliquée :", id);
                setInfoBox({
                    visible: true,
                    x: e.clientX,
                    y: e.clientY,
                    id,
                });
            });
        });}, []);

        function highlightClass(id) {
            document.querySelectorAll(".salle").forEach(e => {
                e.setAttribute("fill", "lightblue");
                e.setAttribute("fill-opacity", ".0120967");
            });

            if (!id) return;
            let el = document.getElementById(id);

            if (el) {
                el.setAttribute("fill", "lightblue");
                el.setAttribute("fill-opacity", "0.5");
                const rect = el.getBoundingClientRect();
                setInfoBox({
                  visible: true,
                  x: rect.left + rect.width / 2,
                  y: rect.top - 40,
                  id,
                });
            }
        };


    useEffect(() => {
        if (Viewer.current) {
            const viewer = Viewer.current;
            const id = setTimeout(() => {
                viewer.fitToViewer();
            }, 0);

            return () => clearTimeout(id);
        }
    }, []);

    return (
        <div>
            <SearchBar onSelectClasse={highlightClass} classes={classIds} />
            <UncontrolledReactSVGPanZoom
                ref={Viewer}
                width={size.width}
                height={size.height}
                tool={tool}
                onChangeTool={setTool}
                onChangeValue={setValue}
                detectAutoPan={false}
                background="white"
            >
                <svg viewBox="0 0 2592 1728"
                    className="map"
                    width="100%"
                    height="100%">
                    <svg
                        className="map"
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", display: "block", pointerEvents: "none" }}
                        viewBox="0 0 2592 1728"
                    >
                        {highlightedPath.length > 1 && (
                            <polyline
                                points={highlightedPath
                                    .map(id => {
                                        const pos = nodePositions[id];
                                        return pos ? `${pos.x},${pos.y}` : null;
                                    })
                                    .filter(Boolean)
                                    .join(" ")}
                                fill="none"
                                stroke="red"
                                strokeWidth="4"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                        )}
                    </svg>
                    <svg id="plan" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="100%" height="100%" viewBox="0 0 2592 1728">
                        <defs>
                            <clipPath id="clip_297">
                                <path d="M36.031 36.059H2272.531V1692H36.031Z" />
                            </clipPath>
                            <clipPath id="clip_298">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_299">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_300">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_301">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_302">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_303">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_304">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_305">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_306">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_307">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_308">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_309">
                                <path d="M0 .031H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_310">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_312">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_313">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_314">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_315">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_316">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_317">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_318">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_319">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_320">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_321">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_322">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_323">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_324">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_325">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_326">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_327">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_328">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_329">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_330">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                            <clipPath id="clip_331">
                                <path d="M0 0H2592V1728H0Z" />
                            </clipPath>
                        </defs>
                        <g>
                            <g clip-path="url(#clip_297)">
                                <g clip-path="url(#clip_298)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-117.359-1890.148V-423.121L-189.121-1890.148ZM-117.359-423.121-189.121-1890.148V-423.121ZM-117.359-423.121" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-117.359-1890.148V-423.121L-189.121-1890.148ZM-117.359-423.121-189.121-1890.148V-423.121ZM-117.359-423.121" />
                                </g>
                                <g clip-path="url(#clip_299)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-189.121-1890.148V-1347.629L-189.629-1890.148ZM-189.121-1347.629-189.629-1890.148V-1347.629ZM-189.121-1347.629" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-189.121-1890.148V-1347.629L-189.629-1890.148ZM-189.121-1347.629-189.629-1890.148V-1347.629ZM-189.121-1347.629" />
                                </g>
                                <g clip-path="url(#clip_300)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-189.629-1890.148V-1347.629L-199.531-1890.148ZM-189.629-1347.629-199.531-1890.148V-1355.07ZM-189.629-1347.629" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-189.629-1890.148V-1347.629L-199.531-1890.148ZM-189.629-1347.629-199.531-1890.148V-1355.07ZM-189.629-1347.629" />
                                </g>
                                <g clip-path="url(#clip_301)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-199.531-1890.148V-1510.172L-264.781-1890.148ZM-199.531-1510.172-264.781-1890.148V-1510.172ZM-199.531-1510.172" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-199.531-1890.148V-1510.172L-264.781-1890.148ZM-199.531-1510.172-264.781-1890.148V-1510.172ZM-199.531-1510.172" />
                                </g>
                                <g clip-path="url(#clip_302)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-276.422-1432.469-285.84-1439.551V-1419.961ZM-276.422-1432.469" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-276.422-1432.469-285.84-1439.551V-1419.961ZM-276.422-1432.469" />
                                </g>
                                <g clip-path="url(#clip_303)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-264.781-1890.148V-1510.172L-285.84-1890.148ZM-264.781-1510.172-285.84-1890.148V-1482.09ZM-264.781-1510.172" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-264.781-1890.148V-1510.172L-285.84-1890.148ZM-264.781-1510.172-285.84-1890.148V-1482.09ZM-264.781-1510.172" />
                                </g>
                                <g clip-path="url(#clip_304)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-285.84-1890.148V-1482.09L-306.238-1890.148ZM-285.84-1482.09-306.238-1890.148V-1454.879ZM-285.84-1482.09" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-285.84-1890.148V-1482.09L-306.238-1890.148ZM-285.84-1482.09-306.238-1890.148V-1454.879ZM-285.84-1482.09" />
                                </g>
                                <g clip-path="url(#clip_305)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-285.84-1439.551V-1419.961L-306.238-1454.879ZM-285.84-1419.961-306.238-1454.879V-1435.289ZM-285.84-1419.961" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-285.84-1439.551V-1419.961L-306.238-1454.879ZM-285.84-1419.961-306.238-1454.879V-1435.289ZM-285.84-1419.961" />
                                </g>
                                <g clip-path="url(#clip_306)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-306.238-1890.148V-1435.289L-465.809-1890.148ZM-306.238-1435.289-465.809-1890.148V-1555.262ZM-306.238-1435.289" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-306.238-1890.148V-1435.289L-465.809-1890.148ZM-306.238-1435.289-465.809-1890.148V-1555.262ZM-306.238-1435.289" />
                                </g>
                                <g clip-path="url(#clip_307)">
                                    <path transform="matrix(0,-1,-1,0,0,0)" d="M-465.809-1890.148V-1415.699L-785.129-1890.148ZM-465.809-1415.699-785.129-1890.148V-1415.699ZM-465.809-1415.699" fill="#cccccc" />
                                    <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-465.809-1890.148V-1415.699L-785.129-1890.148ZM-465.809-1415.699-785.129-1890.148V-1415.699ZM-465.809-1415.699" />
                                </g>
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1698.121H-117.359" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1693.078H-117.359" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1529.73H-117.359" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1525.711H-117.359" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1408.559H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1404H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1287.84H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1283.789H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1142.371H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-1138.32H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-995.73H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-117.359-991.68H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.059-1698.602H-522" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.059-1690.531H-531.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-477.539-1763.129H-482.34" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-477.539-1773.238H-487.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-573.57-1838.398H-482.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-577.59-1834.352H-492.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-436.648-1792.141V-1834.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-432.602-1796.191V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-487.648-1773.238V-1779.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.18-1773.238V-1779.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-477.539-1773.238V-1763.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.18-1773.238H-531.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-487.648-1834.352H-482.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-436.648-1838.398V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-573.57-1838.398V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-151.289-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-155.34-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-248.281-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-252.328-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-331.02-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-337.59-1890.148V-1796.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-137.789-559.32H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-137.789-555.27H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-155.34-1796.191H-202.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-252.328-1796.191H-257.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-337.59-1796.191H-337.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-144.961-1796.191H-151.289" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-144.961-1792.141H-202.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-242.34-1796.191H-248.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-242.34-1792.141H-257.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-297.449-1796.191H-331.02" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-297.449-1792.141H-337.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-377.699-1796.191H-432.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-377.699-1792.141H-436.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-442.199-1838.398H-436.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-442.199-1834.352H-436.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.18-1819.23V-1834.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-487.648-1819.23V-1834.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-577.59-1834.352V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-482.34-1698.871V-1698.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-491.461-1698.871V-1698.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-491.461-1763.129H-522" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.121-1698.602H-531.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.121-1763.129H-531.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.66-1690.531V-1698.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-571.68-1773.238H-576.48" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-571.68-1763.129H-576.48" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-689.73-1763.129H-695.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-689.73-1773.238H-695.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-761.91-1763.129H-762.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-761.91-1773.238H-762.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1016.219V-1023.328" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-193.801-1016.219V-1023.328" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1118.969V-1110.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-193.828-1118.969V-1110.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1597.051H-1175.34V-1589.641" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-1302.09H-1630.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1580.73H-1287.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1589.641V-1348.469H-1250.852V-1574.52" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1308.301V-1312.078H-1243.262" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-1302.09V-1308.301H-1250.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1574.52H-1287.18V-1580.73" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1285.801H-1287.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-1007.16H-1630.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1013.371V-1017.121H-1243.262" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1053.539V-1279.59" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1312.078V-1053.539" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1119.059V-1239.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1279.59H-1287.18V-1285.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-1007.16V-1013.371H-1250.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-712.23H-1509.449" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-990.871H-1287.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1017.121V-758.609H-1250.852V-984.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-722.191V-702.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-718.441V-722.191H-1243.262" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-980.91V-1007.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-712.23V-944.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-718.441H-1250.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-984.66H-1287.18V-990.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-990.871H-1082.578" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-984.66V-980.91H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-944.488H-1118.941V-718.441H-1082.578V-712.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1082.578-984.66H-1118.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.148-1285.801H-1082.578" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1007.16H-744.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1239.422H-1118.941V-1125.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-1279.59V-1275.84H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1082.578-1285.801V-1279.59H-1118.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-877.23-1119.059V-1125.93H-744.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-917.16-1125.93H-913.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-924-1125.93V-1285.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-917.16-1285.801V-1125.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1007.371-1125.93V-1285.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.5-1285.801V-1125.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-695.609H-1509.449" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-702.988H-1175.34" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-695.609V-702.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1127.91-1354.078V-1350.75H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1127.91-1307.219V-1299.391" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1275.84V-1307.219H-1127.91" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1127.91-1299.391H-1056.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-913.621-1119.059H-927.539V-1125.93H-924" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.93-1119.059H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-1125.93H-1007.371" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.5-1125.93H-963.93V-1119.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1287.18-718.441V-712.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-1589.641H-1243.262" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1597.051H-1138.949V-1589.641H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-913.621-1125.93V-1119.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1082.578-984.66V-990.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1053.539H-1250.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1119.059H-877.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1354.078V-1350.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1350.602-615.539H-1448.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-615.539V-644.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-644.07H-1336.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1351.32-613.531H-1450.199V-646.078H-1336.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-693.57H-1507.77V-566.039H-1368.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.578-568.051H-1505.762V-691.559H-1336.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-646.078V-644.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-691.559V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1475.578-590.789H-1370.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.27-1677.09H-1448.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1677.09V-1648.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1648.621H-1336.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.551-1679.129H-1450.199V-1646.609H-1336.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-1599.121H-1507.77V-1726.68H-1350.512" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1351.23-1724.641H-1505.762V-1601.129H-1336.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-1646.609V-1648.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-1601.129V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1475.578-1701.871H-1370.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-740.129-1016.219V-1023.328" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1016.219V-1023.328" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-740.16-1118.969V-1110.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1118.969V-1110.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-150.719-1529.73V-1663.77H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-578.488-1763.129H-687.691" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-578.488-1773.238H-687.691" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-578.488-1768.172H-687.691" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-697.199-1763.129H-759.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-697.199-1773.238H-759.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-697.199-1768.172H-759.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-759.898-1763.129H-761.91006V-1773.238H-759.898Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-695.191-1763.129H-697.199V-1773.238H-695.191Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-687.691-1763.129H-689.73V-1773.238H-687.691Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-576.48-1763.129H-578.488V-1773.238H-576.48Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-367.289-1711.469H-354.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-354.988-1700.039H-367.289" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1710.434-368.281C1710.988-368.281 1711.441-367.828 1711.441-367.273" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1700.012-367.273C1700.012-367.828 1700.461-368.281 1701.016-368.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-368.281-1701.031V-1710.449" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1704.121-365.387C1704.121-365.078 1703.871-364.828 1703.566-364.828 1703.258-364.828 1703.012-365.078 1703.012-365.387 1703.012-365.691 1703.258-365.941 1703.566-365.941 1703.871-365.941 1704.121-365.691 1704.121-365.387" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1711.441-354.977C1711.441-354.422 1710.988-353.969 1710.434-353.969" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1701.016-353.969C1700.461-353.969 1700.012-354.422 1700.012-354.977" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1708.695-357.238C1708.18-356.918 1707.59-356.734 1706.98-356.703" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1707.734-356.848C1707.66-356.895 1707.641-356.992 1707.684-357.066 1707.727-357.141 1707.816-357.172 1707.895-357.133 1707.973-357.098 1708.012-357.004 1707.98-356.926" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1707.598-356.812C1707.523-356.914 1707.52-357.051 1707.594-357.152 1707.668-357.254 1707.801-357.297 1707.918-357.254 1708.035-357.215 1708.113-357.098 1708.109-356.973" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-354-1710.449V-1701.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-169.68-1639.648V-1633.77" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-171.961-1646.852V-1633.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-156.809-1633.199V-1646.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-157.559-1633.77V-1646.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-157.559-1647.602H-171.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-158.129-1646.852H-169.109" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1647.602-157.547C1647.602-157.121 1647.258-156.781 1646.836-156.781" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1640.371-167.047C1640.746-166.871 1640.949-166.457 1640.859-166.051 1640.77-165.648 1640.41-165.359 1639.996-165.359 1639.582-165.359 1639.223-165.648 1639.133-166.051 1639.043-166.457 1639.242-166.871 1639.621-167.047" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1646.82-158.113C1646.82-157.809 1646.57-157.559 1646.266-157.559" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1646.836-171.93C1647.258-171.93 1647.602-171.586 1647.602-171.164" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-169.68-1646.281V-1640.398" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1646.266-169.648C1646.57-169.648 1646.82-169.402 1646.82-169.094" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1643.91-170.715C1643.91-170.344 1643.609-170.039 1643.234-170.039 1642.863-170.039 1642.559-170.344 1642.559-170.715 1642.559-171.086 1642.863-171.391 1643.234-171.391 1643.609-171.391 1643.91-171.086 1643.91-170.715" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1637.461-170.715C1637.461-170.344 1637.156-170.039 1636.785-170.039 1636.414-170.039 1636.109-170.344 1636.109-170.715 1636.109-171.086 1636.414-171.391 1636.785-171.391 1637.156-171.391 1637.461-171.086 1637.461-170.715" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-171.18-1632.449H-157.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-169.109-1633.199H-158.129" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1633.184-156.781C1632.762-156.781 1632.422-157.121 1632.422-157.547" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1633.754-157.559C1633.449-157.559 1633.199-157.809 1633.199-158.113" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1632.422-171.164C1632.422-171.586 1632.762-171.93 1633.184-171.93" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1633.199-169.094C1633.199-169.402 1633.449-169.648 1633.754-169.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-166.738-1639.648H-170.87902V-1640.398H-166.738Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-357.691-1708.559-356.129-1709.039" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1709.031-356.109C1709.176-355.641 1708.914-355.145 1708.449-355" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-355.051-1708.469-355.02-1708.441" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1708.418-355C1707.953-354.855 1707.457-355.113 1707.309-355.582" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-355.59-1707.328-357.148-1706.852" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1706.832-357.141C1706.785-357.289 1706.871-357.449 1707.02-357.496" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-357.512-1707.031-357.871-1708.199" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1708.191-357.855C1708.34-357.902 1708.5-357.82 1708.547-357.672" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-369.059-1698.602V-1711.262" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1711.246-369.059C1711.801-369.059 1712.25-368.609 1712.25-368.055" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-368.07-1712.25H-354.18" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1712.25-354.164C1712.25-353.609 1711.801-353.16 1711.246-353.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-353.191-1711.262V-1698.602H-369.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-462.422-1557.781-443.039-1543.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-462.422-1557.781-459.988-1561.02-440.609-1546.441-443.039-1543.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-459.391-1559.281-442.441-1546.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-444.27-1544.129-441.84-1547.34" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-461.219-1556.879-458.789-1560.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-436.98V-461.25" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-436.98H-181.051V-461.25H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-438.512V-459.719" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-459.719H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-438.512H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-509.73V-534" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-509.73H-181.051V-534H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-511.262V-532.469" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-532.469H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-511.262H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-582V-606.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-582H-181.051V-606.238H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-583.5V-604.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-604.711H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-583.5H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-654.75V-678.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-654.75H-181.051V-678.988H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-656.25V-677.461" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-677.461H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-656.25H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-727.5V-751.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-727.5H-181.051V-751.738H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-729V-750.211" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-750.211H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-729H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-800.25V-824.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-800.25H-181.051V-824.488H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-801.75V-822.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-822.988H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-801.75H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-873V-897.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-873H-181.051V-897.238H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-874.5V-895.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-895.738H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-874.5H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1309.5V-1333.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1309.5H-181.051V-1333.738H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-1311V-1332.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1332.238H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1311H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1236.75V-1260.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1236.75H-181.051V-1260.988H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-1238.25V-1259.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1259.488H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1238.25H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1164V-1188.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1164H-181.051V-1188.238H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-1165.5V-1186.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1186.738H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1165.5H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-945.75V-969.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-945.75H-181.051V-969.988H-185.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.07-947.25V-968.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-968.488H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-947.25H-181.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-804.66H-1442.281V-814.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.129-818.488V-833.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425-841.262-1423.98-842.879-1420.922-845.309H-1442.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1442.281-858.328-1420.922-866.461V-855.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-881.102V-872.969L-1430.07-872.129-1429.051-872.969-1428.031-875.398V-877.828L-1429.051-880.289-1431.09-881.91-1434.148-882.719H-1436.16L-1439.219-881.91-1441.262-880.289-1442.281-877.828V-875.398L-1441.262-872.969-1440.238-872.129-1438.199-871.32" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-891.66-1421.941-889.23-1423.98-888.422H-1426.02L-1428.031-889.23-1429.051-890.852-1430.07-894.09-1431.09-896.551-1433.129-898.172-1435.141-898.98H-1438.199L-1440.238-898.172-1441.262-897.359-1442.281-894.898V-891.66L-1441.262-889.23-1440.238-888.422-1438.199-887.578H-1435.141L-1433.129-888.422-1431.09-890.039-1430.07-892.469-1429.051-895.711-1428.031-897.359-1426.02-898.172H-1423.98L-1421.941-897.359-1420.922-894.898V-891.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1460.461-819.301-1458.422-818.488-1456.379-816.871-1455.391-815.219V-811.98L-1456.379-810.359-1458.422-808.738-1460.461-807.898-1463.52-807.09H-1468.59L-1471.648-807.898-1473.66-808.738-1475.699-810.359-1476.719-811.98V-815.219L-1475.699-816.871-1473.66-818.488-1471.648-819.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.391-825H-1476.719V-834.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-836.371-1455.391-842.879-1476.719-849.391" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1469.609-838.801V-846.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-864-1456.379-862.379-1455.391-859.949V-856.711L-1456.379-854.25-1458.422-852.629H-1460.461L-1462.5-853.441-1463.52-854.25-1464.512-855.871-1466.551-860.762-1467.57-862.379-1468.59-863.191-1470.629-864H-1473.66L-1475.699-862.379-1476.719-859.949V-856.711L-1475.699-854.25-1473.66-852.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-880.289-1456.379-878.641-1455.391-876.211V-872.969L-1456.379-870.512-1458.422-868.891H-1460.461L-1462.5-869.699-1463.52-870.512-1464.512-872.129-1466.551-877.02-1467.57-878.641-1468.59-879.449-1470.629-880.289H-1473.66L-1475.699-878.641-1476.719-876.211V-872.969L-1475.699-870.512-1473.66-868.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-885.961H-1455.391V-896.551" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1465.531-885.961V-892.469" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-885.961V-896.551" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-1107.93H-1442.281V-1117.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.129-1121.73V-1136.371" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425-1144.5-1423.98-1146.121-1420.922-1148.578H-1442.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1442.281-1161.57-1420.922-1169.699V-1158.328" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.98-1185.148-1421.941-1184.34-1420.922-1181.91V-1180.289L-1421.941-1177.828-1425-1176.211-1430.07-1175.398H-1435.141L-1439.219-1176.211-1441.262-1177.828-1442.281-1180.289V-1181.102L-1441.262-1183.531-1439.219-1185.148-1436.16-1185.961H-1435.141L-1432.109-1185.148-1430.07-1183.531-1429.051-1181.102V-1180.289L-1430.07-1177.828-1432.109-1176.211-1435.141-1175.398" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-1195.738-1421.941-1193.281-1425-1191.66-1430.07-1190.852H-1433.129L-1438.199-1191.66-1441.262-1193.281-1442.281-1195.738V-1197.359L-1441.262-1199.789-1438.199-1201.41-1433.129-1202.219H-1430.07L-1425-1201.41-1421.941-1199.789-1420.922-1197.359V-1195.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1460.461-1122.539-1458.422-1121.73-1456.379-1120.109-1455.391-1118.488V-1115.219L-1456.379-1113.602-1458.422-1111.98-1460.461-1111.172-1463.52-1110.359H-1468.59L-1471.648-1111.172-1473.66-1111.98-1475.699-1113.602-1476.719-1115.219V-1118.488L-1475.699-1120.109-1473.66-1121.73-1471.648-1122.539" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.391-1128.238H-1476.719V-1137.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1139.609-1455.391-1146.121-1476.719-1152.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1469.609-1142.07V-1150.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-1167.27-1456.379-1165.648-1455.391-1163.191V-1159.949L-1456.379-1157.52-1458.422-1155.898H-1460.461L-1462.5-1156.711-1463.52-1157.52-1464.512-1159.141-1466.551-1164.031-1467.57-1165.648-1468.59-1166.461-1470.629-1167.27H-1473.66L-1475.699-1165.648-1476.719-1163.191V-1159.949L-1475.699-1157.52-1473.66-1155.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-1183.531-1456.379-1181.91-1455.391-1179.48V-1176.211L-1456.379-1173.781-1458.422-1172.16H-1460.461L-1462.5-1172.969-1463.52-1173.781-1464.512-1175.398-1466.551-1180.289-1467.57-1181.91-1468.59-1182.719-1470.629-1183.531H-1473.66L-1475.699-1181.91-1476.719-1179.48V-1176.211L-1475.699-1173.781-1473.66-1172.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1189.23H-1455.391V-1199.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1465.531-1189.23V-1195.738" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1189.23V-1199.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1420.922-1397.43H-1442.281V-1407.18" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.129-1411.23V-1425.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425-1434-1423.98-1435.648-1420.922-1438.078H-1442.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1442.281-1451.07-1420.922-1459.199V-1447.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.98-1474.648-1421.941-1473.84-1420.922-1471.41V-1469.789L-1421.941-1467.328-1425-1465.711-1430.07-1464.898H-1435.141L-1439.219-1465.711-1441.262-1467.328-1442.281-1469.789V-1470.602L-1441.262-1473.031-1439.219-1474.648-1436.16-1475.488H-1435.141L-1432.109-1474.648-1430.07-1473.031-1429.051-1470.602V-1469.789L-1430.07-1467.328-1432.109-1465.711-1435.141-1464.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1426.02-1481.16H-1425L-1422.961-1481.969-1421.941-1482.781-1420.922-1484.43V-1487.672L-1421.941-1489.289-1422.961-1490.102-1425-1490.91H-1427.012L-1429.051-1490.102-1432.109-1488.48-1442.281-1480.352V-1491.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1460.461-1412.07-1458.422-1411.23-1456.379-1409.609-1455.391-1407.988V-1404.75L-1456.379-1403.102-1458.422-1401.48-1460.461-1400.672-1463.52-1399.859H-1468.59L-1471.648-1400.672-1473.66-1401.48-1475.699-1403.102-1476.719-1404.75V-1407.988L-1475.699-1409.609-1473.66-1411.23-1471.648-1412.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.391-1417.738H-1476.719V-1427.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1429.141-1455.391-1435.648-1476.719-1442.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1469.609-1431.57V-1439.699" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-1456.77-1456.379-1455.148-1455.391-1452.719V-1449.449L-1456.379-1447.02-1458.422-1445.398H-1460.461L-1462.5-1446.211-1463.52-1447.02-1464.512-1448.641-1466.551-1453.531-1467.57-1455.148-1468.59-1455.961-1470.629-1456.77H-1473.66L-1475.699-1455.148-1476.719-1452.719V-1449.449L-1475.699-1447.02-1473.66-1445.398" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1458.422-1473.031-1456.379-1471.41-1455.391-1468.98V-1465.711L-1456.379-1463.281-1458.422-1461.66H-1460.461L-1462.5-1462.469-1463.52-1463.281-1464.512-1464.898-1466.551-1469.789-1467.57-1471.41-1468.59-1472.219-1470.629-1473.031H-1473.66L-1475.699-1471.41-1476.719-1468.98V-1465.711L-1475.699-1463.281-1473.66-1461.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1478.73H-1455.391V-1489.289" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1465.531-1478.73V-1485.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1476.719-1478.73V-1489.289" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-902.43-804.66H-923.762V-814.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-914.609-818.488V-833.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-906.48-841.262-905.461-842.879-902.43-845.309H-923.762" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-923.762-858.328-902.43-866.461V-855.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-902.43-881.102V-872.969L-911.551-872.129-910.559-872.969-909.539-875.398V-877.828L-910.559-880.289-912.57-881.91-915.629-882.719H-917.672L-920.699-881.91-922.738-880.289-923.762-877.828V-875.398L-922.738-872.969-921.719-872.129-919.68-871.32" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-905.461-898.172-903.422-897.359-902.43-894.898V-893.281L-903.422-890.852-906.48-889.23-911.551-888.422H-916.648L-920.699-889.23-922.738-890.852-923.762-893.281V-894.09L-922.738-896.551-920.699-898.172-917.672-898.98H-916.648L-913.59-898.172-911.551-896.551-910.559-894.09V-893.281L-911.551-890.852-913.59-889.23-916.648-888.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-941.941-819.301-939.93-818.488-937.891-816.871-936.871-815.219V-811.98L-937.891-810.359-939.93-808.738-941.941-807.898-945-807.09H-950.07L-953.129-807.898-955.172-808.738-957.211-810.359-958.199-811.98V-815.219L-957.211-816.871-955.172-818.488-953.129-819.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-936.871-825H-958.199V-834.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-958.199-836.371-936.871-842.879-958.199-849.391" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-951.09-838.801V-846.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-939.93-864-937.891-862.379-936.871-859.949V-856.711L-937.891-854.25-939.93-852.629H-941.941L-943.98-853.441-945-854.25-946.02-855.871-948.059-860.762-949.078-862.379-950.07-863.191-952.109-864H-955.172L-957.211-862.379-958.199-859.949V-856.711L-957.211-854.25-955.172-852.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-939.93-880.289-937.891-878.641-936.871-876.211V-872.969L-937.891-870.512-939.93-868.891H-941.941L-943.98-869.699-945-870.512-946.02-872.129-948.059-877.02-949.078-878.641-950.07-879.449-952.109-880.289H-955.172L-957.211-878.641-958.199-876.211V-872.969L-957.211-870.512-955.172-868.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-958.199-885.961H-936.871V-896.551" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-947.039-885.961V-892.469" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-958.199-885.961V-896.551" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-928.801H-166.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-913.141H-166.648V-928.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-969.988V-968.488H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-945.75H-185.102V-947.25H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-969.988H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1188.238H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1165.5H-185.102V-1164H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1188.238V-1186.738H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1260.988H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1238.25H-185.102V-1236.75H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1260.988V-1259.488H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1333.738H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1311H-185.102V-1309.5H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-1333.738V-1332.238H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-897.238H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-874.5H-185.102V-873H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-897.238V-895.738H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-824.488H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-801.75H-185.102V-800.25H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-824.488V-822.988H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-751.738H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-729H-185.102V-727.5H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-751.738V-750.211H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-678.988H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-656.25H-185.102V-654.75H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-678.988V-677.461H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-606.238H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-583.5H-185.102V-582H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-606.238V-604.711H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-534H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-511.262H-185.102V-509.73H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-534V-532.469H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-461.25H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-438.512H-185.102V-436.98H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.102-461.25V-459.719H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-423.121V-912.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.059-1698.602V-1438.441H-762.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-762.422-1773.238H-766.621V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-928.289V-1016.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1119.059V-1421.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1698.602H-407.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-471.809-1579.379-276.422-1432.469" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-444.27-1544.129-443.039-1543.199-436.051-1552.5" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-461.219-1556.879-462.422-1557.781-455.43-1567.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-446.672-1540.891-444.27-1544.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-463.648-1553.641-461.219-1556.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-407.219-1698.602V-1678.352H-289.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-471.809-1579.379V-1698.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-315.512-1605.898H-266.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-301.289-1645.621-287.398-1684.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-317.672-1599.84-303.27-1640.07-298.621-1642.141" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-298.621-1642.141H-309.148L-301.289-1645.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-324.961-1559.16-279.148-1524.809H-266.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-277.379-1514.012-329.488-1553.102-324.961-1559.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-273.512-1511.16V-1510.172" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-465.809-1555.262-285.84-1419.961" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.16-1524.809V-1605.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-471.809-1698.602H-492.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-276.422-1432.469-285.84-1419.961" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M-277.379-1514.012V-1514.012" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-277.352-1514.039-273.512-1511.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-785.129-1415.699V-1890.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-762.422-1438.441V-1773.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-199.531-1510.172V-1355.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-423.121V-1005.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1130.25V-1347.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-199.531-1355.07-189.629-1347.629H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-273.512-1510.172H-199.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-465.809-1415.699V-1555.262" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1436.879H-167.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1421.219H-167.16V-1436.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1436.879V-1698.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-465.809-1415.699H-785.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-273.121-1527.602V-1530.629" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1530.613-273.09C1530.887-273.09 1531.109-272.867 1531.109-272.594" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-272.609-1531.109H-269.578" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1531.109-269.566C1531.109-269.293 1530.887-269.07 1530.613-269.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.07-1530.629V-1527.602" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1527.586-269.07C1527.312-269.07 1527.09-269.293 1527.09-269.566" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.578-1527.09H-272.609" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1527.09-272.594C1527.09-272.867 1527.312-273.09 1527.586-273.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-273.121-1598.699V-1601.73" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1601.715-273.09C1601.988-273.09 1602.211-272.867 1602.211-272.594" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-272.609-1602.238H-269.578" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1602.211-269.566C1602.211-269.293 1601.988-269.07 1601.715-269.07" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.07-1601.73V-1598.699" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1598.684-269.07C1598.41-269.07 1598.191-269.293 1598.191-269.566" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.578-1598.191H-272.609" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1598.191-272.594C1598.191-272.867 1598.41-273.09 1598.684-273.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-343.531-1598.699V-1601.73" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1601.715-343.5C1601.988-343.5 1602.211-343.277 1602.211-343.004" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-343.02-1602.238H-339.988" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1602.211-339.977C1602.211-339.703 1601.988-339.48 1601.715-339.48" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-339.48-1601.73V-1598.699" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1598.684-339.48C1598.41-339.48 1598.191-339.703 1598.191-339.977" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-339.988-1598.191H-343.02" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1598.191-343.004C1598.191-343.277 1598.41-343.5 1598.684-343.5" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-1739.82V-1689.719" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-1641.988V-1591.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1580.73V-1641.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1689.719V-1728.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-1728.629H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1728.629H-1407.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-1728.629H-1321.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-1728.629H-1273.98" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-1728.629H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-1739.82H-1124.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-1739.82H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-1739.82H-1273.98" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-1739.82H-1321.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-1739.82H-1520.641" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.059-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-1728.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1124.129-1739.82V-1365.27" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-1354.078V-1728.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-701.039V-723.48H-1630.711V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-832.859H-1641.899V-870.48H-1630.711Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-979.891H-1641.899V-1018.141H-1630.711Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1127.551H-1641.899V-1165.172H-1630.711Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1274.551H-1641.899V-1313.3401H-1630.711Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1422.719H-1641.899V-1460.34H-1630.711Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1569.75H-1641.898V-1591.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-712.23V-1016.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-733.648-1005.031V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-712.23H-1079.16V-701.039H-1124.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1007.551-701.039H-1031.43V-712.23H-1007.551Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-872.461-701.039H-898.141V-712.23H-872.461Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-763.051-712.23H-744.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-733.648-701.039H-763.051V-712.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.148-1285.801V-1354.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1044.988-1365.27V-1296.961" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.148-1354.078H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1124.129-1365.27H-1044.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-733.648-1296.961V-1130.25" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1119.059V-1285.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-174.988-1119.059H-744.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-1591.891H-1521.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-1591.891H-1630.711V-1569.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.301-1580.73V-1591.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-701.039H-1630.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-701.039H-1521.301V-712.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-564V-603.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-650.82V-712.23" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-650.82V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1520.641-552.84V-603.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-695.609H-1138.949" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-702.988H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-552.84H-1520.641" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-552.84H-1359.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-552.84H-1235.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-552.84H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-552.84H-1124.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-564H-1135.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-564H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-564H-1235.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-564H-1359.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-564H-1407.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1175.34-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.059-552.84V-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-564V-695.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1124.129-701.039V-552.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1044.988-1296.961H-733.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1285.801H-1056.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1005.031H-733.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1016.219H-174.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-733.648-1130.25H-189.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-695.609V-702.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1135.41-712.23V-702.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1580.73H-1521.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-650.82H-1520.641" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-712.23H-1521.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1728.691V-1689.629" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1690.004-439.5C1673.277-439.5 1659.719-453.059 1659.719-469.785" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1659.719-409.246C1659.719-425.973 1673.277-439.531 1690.004-439.531" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1530.586-302.871C1517.215-312.895 1514.504-331.855 1524.531-345.227" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1524.551-345.195C1514.527-331.824 1495.562-329.113 1482.195-339.141" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1491.367-250.441C1477.973-260.484 1475.258-279.488 1485.301-292.883" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1485.297-292.867C1475.254-279.473 1456.254-276.758 1442.859-286.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-278.551-1512.422-314.91-1463.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-311.07-1461.059-274.711-1509.57" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M588.898-135.766C588.898-129.074 586.633-122.582 582.469-117.344" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1832.371-142.934C1832.371-133.336 1828.555-124.129 1821.77-117.34" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1832.25-240.316C1832.25-220.391 1816.098-204.238 1796.176-204.238" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1796.176-295.41C1816.215-295.41 1832.461-279.164 1832.461-259.125" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1796.176-375.66C1815.949-375.66 1831.98-359.629 1831.98-339.855" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1838.387-480.09C1858.191-480.09 1874.25-464.031 1874.25-444.227" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1781.023-528.328C1801-528.328 1817.191-512.137 1817.191-492.164" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1730.969-491.445C1730.969-508.09 1744.461-521.578 1761.105-521.578" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1700.863-521.578C1717.508-521.578 1731-508.09 1731-491.445" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1730.762-531.105C1730.762-547.863 1744.348-561.449 1761.105-561.449" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1700.445-561.449C1717.203-561.449 1730.789-547.863 1730.789-531.105" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1773.227-569.609C1793.215-569.609 1809.422-553.406 1809.422-533.414" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-533.43-1773.238H-535.2V-1809.422H-533.43Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-569.641-1763.129H-571.68V-1773.238H-569.641Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.422-1763.129H-533.43V-1773.238H-531.422Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.121-1700.461H-561.449V-1702.1991H-531.121Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-531.121-1759.352H-561.449V-1761.1221H-531.121Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-522-1698.422H-531.121V-1700.4609H-522Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-522-1761.121H-531.121V-1763.129H-522Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-491.461-1700.879H-521.578V-1702.649H-491.461Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-491.461-1759.352H-521.578V-1761.1221H-491.461Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-482.34-1698.871H-491.461V-1700.879H-482.34Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-482.34-1761.121H-491.461V-1763.1599H-482.34Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-492.18-1781.039H-528.36V-1782.809H-492.18Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-487.648-1817.219H-492.17903V-1819.231H-487.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-487.648-1779.031H-492.17903V-1781.0391H-487.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-444.238-1838.398H-446.01103V-1874.25H-444.238Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-480.09-1834.352H-482.102V-1838.399H-480.09Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-442.199-1834.352H-444.238V-1838.399H-442.199Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-339.871-1796.191H-341.641V-1832.011H-339.871Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-375.691-1792.141H-377.699V-1796.192H-375.691Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-337.859-1792.141H-339.871V-1796.192H-337.859Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-259.141-1796.191H-260.91099V-1832.488H-259.141Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-295.41-1792.141H-297.449V-1796.192H-295.41Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-257.102-1792.141H-259.141V-1796.192H-257.102Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-238.559-1796.191H-240.32901V-1832.281H-238.559Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-202.23-1792.141H-204.23799V-1796.192H-202.23Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-240.328-1792.141H-242.34V-1796.192H-240.328Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-142.949-1796.191V-1792.141H-144.961V-1796.191H-142.949V-1832.371H-141.18V-1796.191H-142.949" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-135.781-559.32V-555.27H-137.789V-559.32H-135.781V-588.93H-134.012V-559.32H-135.781" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-274.711-1509.57-275.762-1508.129-251.52-1489.949-250.469-1491.359-274.711-1509.57-273.512-1511.16-277.352-1514.039-278.551-1512.422-274.711-1509.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-311.07-1461.059-310.02-1462.469-285.781-1444.289-286.828-1442.879-311.07-1461.059-312.301-1459.441-316.141-1462.32-314.91-1463.941-311.07-1461.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-363.359-1500.359-362.309-1501.77-338.102-1483.621-339.18-1482.211-363.359-1500.359-364.59-1498.738-368.219-1501.469-366.988-1503.09-363.359-1500.359" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-327.09-1548.75-330.719-1551.48-329.488-1553.102-325.859-1550.371-327.09-1548.75-302.879-1530.602-303.93-1529.191-328.141-1547.34-327.09-1548.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-409.262-1659.75H-411V-1690.02H-409.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-468.031-1659.75H-469.801V-1690.02H-468.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-407.219-1690.02H-409.262V-1698.602H-407.219Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-469.801-1690.02H-471.809V-1698.602H-469.801Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1023.328H-193.801V-1025.308H-189.121Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1108.859H-193.828V-1110.839H-189.121Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-193.801-1025.309H-236.16V-1027.3209H-193.801Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-146.762-1106.879H-189.121V-1108.859H-146.762Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1027.309-236.141C1049.984-235.426 1067.793-216.461 1067.078-193.785" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1106.863-146.75C1084.184-147.465 1066.375-166.426 1067.09-189.105" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1067.102H-193.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1140.93-663.27H-1142.91V-695.61007H-1140.93Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-695.609H-1140.929V-702.98806H-1138.949Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1173.328-695.609H-1175.34V-702.98806H-1173.328Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M663.254-1142.902C663.789-1160.23 678.27-1173.848 695.602-1173.316" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1140.93-520.5H-1142.91V-552.84H-1140.93Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-552.84H-1140.929V-564H-1138.949Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1173.328-552.84H-1175.34V-564H-1173.328Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M520.453-1142.902C520.988-1160.23 535.469-1173.848 552.801-1173.316" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1140.93-1597.051H-1142.91V-1629.36H-1140.93Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-1589.641H-1140.929V-1597.051H-1138.949Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1173.328-1589.641H-1175.34V-1597.051H-1173.328Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1597.027-1173.316C1614.359-1173.848 1628.84-1160.23 1629.375-1142.902" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1140.93-1739.82H-1142.91V-1772.1289H-1140.93Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.949-1728.629H-1140.929V-1739.8201H-1138.949Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1173.328-1728.629H-1175.34V-1739.8201H-1173.328Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1739.801-1173.316C1757.129-1173.848 1771.613-1160.23 1772.145-1142.902" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-724.199H-1283.192V-726.17898H-1250.852Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-722.191H-1250.8519V-724.199H-1243.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-756.57H-1250.8519V-758.609H-1243.262Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M726.172-1283.176C743.5-1282.641 757.117-1268.16 756.586-1250.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1019.129H-1283.192V-1021.109H-1250.852Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1017.121H-1250.8519V-1019.12899H-1243.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1051.5H-1250.8519V-1053.539H-1243.262Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1021.102-1283.176C1038.434-1282.641 1052.047-1268.16 1051.516-1250.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1250.852-1314.059H-1283.192V-1316.039H-1250.852Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1312.078H-1250.8519V-1314.058H-1243.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1243.262-1346.461H-1250.8519V-1348.4691H-1243.262Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1316.031-1283.176C1333.363-1282.641 1346.98-1268.16 1346.445-1250.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1086.602-1271.852H-1118.942V-1273.8291H-1086.602Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-1273.828H-1126.531V-1275.84H-1118.941Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-1239.422H-1126.531V-1241.4609H-1118.941Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1271.828-1086.586C1254.5-1087.117 1240.883-1101.602 1241.414-1118.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1086.602-976.922H-1118.942V-978.899H-1086.602Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-978.898H-1126.531V-980.91006H-1118.941Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1118.941-944.488H-1126.531V-946.531H-1118.941Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M976.898-1086.586C959.566-1087.117 945.953-1101.602 946.484-1118.93" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-929.52-1125.93H-931.53207V-1158.239H-929.52Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-927.539-1119.059H-929.519V-1125.9299H-927.539Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-961.922-1119.059H-963.93V-1125.9299H-961.922Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1125.91-961.934C1143.238-962.469 1157.723-948.852 1158.254-931.52" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-909.66-1125.93H-911.63998V-1158.239H-909.66Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-911.641-1119.059H-913.621V-1125.9299H-911.641Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-877.23-1119.059H-879.238V-1125.9299H-877.23Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1158.254-909.641C1157.723-892.309 1143.238-878.691 1125.91-879.227" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1059.18-1307.219H-1125.4501V-1350.75H-1059.18Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1094.641-1301.039H-1125.45V-1305.898H-1094.641Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1059.18-1307.219-1125.449-1350.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1059.18-1350.75-1125.449-1307.219" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1159.32-1317.301-1135.41-1348.77-1133.82-1347.57-1157.762-1316.102-1159.32-1317.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1127.91-1307.219H-1135.41V-1309.231H-1127.91Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1127.91-1348.738H-1135.41V-1350.75H-1127.91Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1309.246-1135.379C1309.684-1143.27 1312.031-1150.934 1316.082-1157.719" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-740.129-1023.328H-744.84V-1025.308H-740.129Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-740.16-1108.859H-744.83999V-1110.839H-740.16Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-744.84-1025.309H-787.19906V-1027.3209H-744.84Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-697.801-1106.879H-740.16006V-1108.859H-697.801Z" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1027.309-787.18C1049.984-786.465 1067.793-767.504 1067.078-744.824" />
                                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1106.863-697.789C1084.184-698.504 1066.375-717.469 1067.09-740.148" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-740.16-1067.102H-744.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.559-1605.898H-315.512" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-344.309-1676.852V-1607.43" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.559-1605.898V-1607.43H-314.969" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-334.199-1676.852V-1607.43" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-324.09-1676.852V-1607.43" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-313.98-1676.852V-1610.16" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-303.871-1676.852V-1644.48" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-293.789-1676.852V-1666.59" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.32-1678.352V-1676.852H-290.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-303.871-1642.141V-1638.391" />
                                <path transform="matrix(0,-1,-1,0,0,0)" d="M-313.98-1643.488-323.07-1645.02V-1641.988ZM-313.98-1643.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-313.98-1643.488-323.07-1645.02V-1641.988ZM-313.98-1643.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-313.98-1643.488H-350.371" />
                                <g clip-path="url(#clip_308)">
                                    <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29254" font-family="ArialMT"><tspan y="364.5" x="1639.41">H</tspan></text>
                                </g>
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-306.238-1454.879-264.781-1510.172" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1353.148-589.891-1365.059-591.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.141-588.84-1369.02-564" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1350.602-615.539-1358.789-592.59-1365.059-591.66" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1353.148-589.891-1360.141-588.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1353.148-1700.852-1365.059-1702.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.141-1699.801-1368.27-1677.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1349.82-1728.629-1358.789-1703.551-1365.059-1702.621" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1353.148-1700.852-1360.141-1699.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-870.48V-870.988H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-870.988V-870.48H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-979.891H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-979.891V-979.379H-1630.711V-979.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-870.988V-979.379" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-979.379V-870.988" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-870.988H-1640.879V-873H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-977.34H-1632.719V-979.379H-1640.879V-873" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-977.34V-873" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-874.531H-1637.2179V-901.441H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-901.441H-1637.6709V-902.941H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-874.531H-1637.672V-873H-1636.648V-901.441" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-874.531V-901.441" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-948.93H-1637.2179V-975.83999H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-975.84H-1637.6709V-977.34H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-948.93H-1637.672V-947.398H-1636.648V-975.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-948.93V-975.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-901.441H-1638.66V-902.941H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-947.398H-1637.672V-948.93H-1638.66V-902.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-947.398V-902.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-902.941H-1638.148V-947.39797H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-723.48V-723.961H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-723.961V-723.48H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-832.859H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-832.859V-832.352H-1630.711V-832.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-723.961V-832.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-832.352V-723.961" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-723.961H-1640.879V-726H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-830.34H-1632.719V-832.352H-1640.879V-726" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-830.34V-726" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-727.5H-1637.2179V-754.41H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-754.41H-1637.6709V-755.941H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-727.5H-1637.672V-726H-1636.648V-754.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-727.5V-754.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-801.898H-1637.2179V-828.808H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-828.809H-1637.6709V-830.34H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-801.898H-1637.672V-800.398H-1636.648V-828.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-801.898V-828.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-754.41H-1638.66V-755.941H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-800.398H-1637.672V-801.898H-1638.66V-755.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-800.398V-755.941" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-755.941H-1638.148V-800.39797H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1007.039-700.051H-1007.551V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1007.551-712.23H-1007.039V-700.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-898.141-701.039V-700.051H-898.648V-712.23H-898.141" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1007.039-700.051H-898.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-912.422-712.23H-947.43" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-971.699-712.23H-1006.711" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-898.648-702.059H-900.69107V-710.219H-898.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-900.691-702.059H-1007.039V-710.219H-1005.031V-702.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-900.691-710.219H-1005.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-976.59-705.719H-1003.5V-705.871H-976.59Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-975.09-705.301H-976.59V-706.289H-975.09Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1003.5-705.301H-1005.031V-706.289H-1003.5Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-976.59-706.289H-1003.5" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1003.5-705.301H-976.59" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-902.191-705.719H-929.10098V-705.871H-902.191Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-900.691-705.301H-902.191V-706.289H-900.691Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-929.102-705.301H-930.62899V-706.289H-929.102Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-902.191-706.289H-929.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-929.102-705.301H-902.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-929.102-704.281H-930.62899V-705.301H-929.102Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-930.629-704.281H-976.59V-705.301H-975.09V-704.281" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-930.629-705.301H-975.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-930.629-704.789H-975.09V-704.91H-930.629Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-763.051-712.23H-763.559V-700.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-763.559-700.051H-763.051V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-872.461-701.039V-700.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-872.461-700.051H-871.949V-712.23H-872.461" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-763.559-700.051H-871.949" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-871.949-712.23H-853.172" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-828.898-712.23H-793.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-769.621-712.23H-763.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-763.559-702.059H-765.57107V-710.219H-763.559Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.91-702.059V-710.219H-871.949V-702.059H-765.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.91-710.219H-765.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-767.102-705.719H-794.01199V-705.871H-767.102Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-794.012-705.301H-795.512V-706.289H-794.012Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-767.102-706.289V-705.301H-765.57V-706.289H-794.012" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-767.102-705.301H-794.012" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-841.5-705.719H-868.41V-705.871H-841.5Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-868.41-705.301H-869.91V-706.289H-868.41Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-841.5-706.289V-705.301H-839.969V-706.289H-868.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-841.5-705.301H-868.41" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-794.012-704.281H-795.512V-705.301H-794.012Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-839.969-704.281V-705.301H-841.5V-704.281H-795.512" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-839.969-705.301H-795.512" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-795.512-704.789H-839.969V-704.91H-795.512Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1460.34V-1460.852H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1460.852V-1460.34H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-1569.75H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1569.75V-1569.238H-1630.711V-1569.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1460.852V-1569.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1569.238V-1460.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1460.852H-1640.879V-1462.891H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-1567.23H-1632.719V-1569.238H-1640.879V-1462.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1567.23V-1462.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1464.391H-1637.2179V-1491.301H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1491.301H-1637.6709V-1492.828H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1464.391H-1637.672V-1462.891H-1636.648V-1491.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1464.391V-1491.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1538.789H-1637.2179V-1565.699H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1565.699H-1637.6709V-1567.23H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1538.789H-1637.672V-1537.289H-1636.648V-1565.699" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1538.789V-1565.699" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1491.301H-1638.66V-1492.828H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-1537.289H-1637.672V-1538.789H-1638.66V-1492.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1537.289V-1492.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-1492.828H-1638.148V-1537.2891H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1313.34V-1313.852H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1313.852V-1313.34H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-1422.719H-1642.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1422.719V-1422.238H-1630.711V-1422.719" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1313.852V-1422.238" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1422.238V-1313.852" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1313.852H-1640.879V-1315.8601H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-1420.199H-1632.719V-1422.238H-1640.879V-1315.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1420.199V-1315.859" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1317.391H-1637.2179V-1344.301H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1344.301H-1637.6709V-1345.801H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1317.391H-1637.672V-1315.859H-1636.648V-1344.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1317.391V-1344.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1391.789H-1637.2179V-1418.699H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1418.699H-1637.6709V-1420.199H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1391.789H-1637.672V-1390.262H-1636.648V-1418.699" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1391.789V-1418.699" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1344.301H-1638.66V-1345.801H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-1390.262H-1637.672V-1391.789H-1638.66V-1345.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1390.262V-1345.801" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-1345.801H-1638.148V-1390.262H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-1018.141H-1642.891V-1018.648H-1630.711V-1018.141" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1127.039V-1127.551H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1127.551V-1127.039H-1642.891V-1018.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1018.648V-1127.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1018.648H-1640.879V-1020.66006H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-1020.66V-1127.039H-1632.719V-1125H-1640.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1020.66V-1125" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1096.59H-1637.2179V-1123.5H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1123.5H-1637.6709V-1125H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1123.5V-1095.059H-1637.672V-1096.59H-1636.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1123.5V-1096.59" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1022.191H-1637.2179V-1049.101H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1049.102H-1637.6709V-1050.602H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1049.102V-1020.66H-1637.672V-1022.191H-1636.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1049.102V-1022.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1095.059H-1638.66V-1096.59H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1049.102H-1638.66V-1050.602H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-1095.059V-1050.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1050.602V-1095.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-1050.602H-1638.148V-1095.0591H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1641.898-1165.172H-1642.891V-1165.648H-1630.711V-1165.172" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1642.891-1274.039V-1274.551H-1641.898" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1274.551V-1274.039H-1642.891V-1165.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1165.648V-1274.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1165.648H-1640.879V-1167.6909H-1632.719Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.879-1167.691V-1274.039H-1632.719V-1272.031H-1640.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1632.719-1167.691V-1272.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1243.59H-1637.2179V-1270.5H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1270.5H-1637.6709V-1272.031H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1270.5V-1242.09H-1637.672V-1243.59H-1636.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1270.5V-1243.59" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.07-1169.191H-1637.2179V-1196.1011H-1637.07Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1196.102H-1637.6709V-1197.629H-1636.648Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.648-1196.102V-1167.691H-1637.672V-1169.191H-1636.648" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1196.102V-1169.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1242.09H-1638.66V-1243.59H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1196.102H-1638.66V-1197.629H-1637.672Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.66-1242.09V-1197.629" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1637.672-1197.629V-1242.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.031-1197.629H-1638.148V-1242.0901H-1638.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-603.059H-1521.66V-603.57107H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.66-650.309H-1509.449V-650.82H-1521.66V-603.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-648.27H-1519.621V-650.309H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-603.57H-1519.621V-605.609H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.621-605.609V-648.27" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-648.27V-605.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.801-607.109H-1513.949V-646.769H-1513.801Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.379-605.609H-1514.371V-607.109H-1513.379Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.379-646.77H-1514.371V-648.27H-1513.379Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.379-646.77V-607.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1514.371-607.109V-646.77" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1689.211H-1521.66V-1689.7191H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1641.988H-1521.66V-1642.5H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.66-1689.211V-1642.5" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1687.199H-1519.621V-1689.2109H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1642.5H-1519.621V-1644.512H-1509.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.621-1687.199V-1644.512" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1509.449-1644.512V-1687.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.801-1646.039H-1513.949V-1685.672H-1513.801Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.379-1685.672H-1514.371V-1687.199H-1513.379Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1513.379-1685.672V-1644.512H-1514.371V-1646.039H-1513.379" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1514.371-1685.672V-1646.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-552.84V-551.82H-1274.488V-564H-1273.98" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.199-551.82H-1321.711V-552.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-564H-1321.199V-551.82H-1274.488" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1274.488-553.828H-1276.5V-564H-1274.488Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1276.5-553.828H-1321.199V-564H-1319.191V-553.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1276.5-564H-1319.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1278.031-559.531H-1317.66V-559.648H-1278.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1317.66-559.078H-1319.191V-560.101H-1317.66Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1317.66-560.102H-1276.5V-559.078H-1278.031V-560.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1317.66-559.078H-1278.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-552.84V-551.82H-1360.379V-564H-1359.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.121-551.82H-1407.629V-552.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-564H-1407.121V-551.82H-1360.379" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.379-553.828H-1362.422V-564H-1360.379Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1362.422-553.828H-1407.121V-564H-1405.078V-553.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1362.422-564H-1405.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1363.922-559.531H-1403.578V-559.648H-1363.922Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-559.078H-1405.078V-560.101H-1403.578Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-560.102H-1362.422V-559.078H-1363.922V-560.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-559.078H-1363.922" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.199-700.051H-1630.711V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-712.23H-1630.199V-700.051" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.301-701.039V-700.051H-1521.809V-712.23H-1521.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.199-700.051H-1521.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.809-712.23H-1630.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.809-702.059H-1523.8519V-710.219H-1521.809Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1523.852-702.059H-1630.199V-710.219H-1628.191V-702.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1523.852-710.219H-1628.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1599.75-705.719H-1626.66V-705.871H-1599.75Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1626.66-705.301H-1628.191V-706.289H-1626.66Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1626.66-706.289H-1598.25V-705.301H-1599.75V-706.289" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1626.66-705.301H-1599.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1525.352-705.719H-1552.2621V-705.871H-1525.352Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-705.301H-1553.789V-706.289H-1552.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-706.289H-1523.852V-705.301H-1525.352V-706.289" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-705.301H-1525.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1598.25-704.281H-1599.75V-705.301H-1598.25Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-704.281H-1553.789V-705.301H-1552.262Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1598.25-704.281H-1553.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1553.789-705.301H-1598.25" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1553.789-704.789H-1598.25V-704.91H-1553.789Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.059-552.84V-551.82H-1188.57V-564H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.309-551.82H-1235.789V-552.84" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-564H-1235.309V-551.82H-1188.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.57-553.828H-1190.578V-564H-1188.57Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1190.578-553.828H-1235.309V-564H-1233.27V-553.828" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1190.578-564H-1233.27" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1192.109-559.531H-1231.769V-559.648H-1192.109Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1231.77-559.078H-1233.27V-560.101H-1231.77Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1231.77-560.102H-1190.578V-559.078H-1192.109V-560.102" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1231.77-559.078H-1192.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-1739.82V-1740.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.98-1740.809H-1274.488V-1728.629H-1273.98" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1321.711-1728.629H-1321.199V-1740.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1274.488-1740.809H-1321.711V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1274.488-1728.629H-1276.5V-1738.801H-1274.488Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.191-1728.629H-1321.1991V-1738.801H-1319.191Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.191-1738.801H-1276.5" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1276.5-1728.629H-1319.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1278.031-1732.98H-1317.66V-1733.101H-1278.031Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1276.5-1732.531H-1278.031V-1733.551H-1276.5Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1317.66-1732.531V-1733.551H-1319.191V-1732.531H-1278.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1317.66-1733.551H-1278.031" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-1739.82V-1740.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.871-1740.809H-1360.379V-1728.629H-1359.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1407.629-1728.629H-1407.121V-1740.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.379-1740.809H-1407.629V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.379-1728.629H-1362.422V-1738.801H-1360.379Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1405.078-1728.629H-1407.121V-1738.801H-1405.078Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1405.078-1738.801H-1362.422" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1362.422-1728.629H-1405.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1363.922-1732.98H-1403.578V-1733.101H-1363.922Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1362.422-1732.531H-1363.922V-1733.551H-1362.422Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-1732.531V-1733.551H-1405.078V-1732.531H-1363.922" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-1733.551H-1363.922" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.711-1580.73H-1630.199V-1592.91" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.199-1592.91H-1630.711V-1591.891" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.301-1591.891V-1592.91" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.301-1592.91H-1521.809V-1580.73H-1521.301" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.199-1592.91H-1521.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.809-1580.73H-1630.199" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.191-1582.738H-1630.1991V-1590.8981H-1628.191Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1523.852-1590.898V-1582.738H-1521.809V-1590.898H-1628.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1523.852-1582.738H-1628.191" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1599.75-1587.09H-1626.66V-1587.2109H-1599.75Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1598.25-1586.672H-1599.75V-1587.66H-1598.25Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1626.66-1586.672V-1587.66H-1628.191V-1586.672H-1599.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1626.66-1587.66H-1599.75" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1525.352-1587.09H-1552.2621V-1587.2109H-1525.352Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1523.852-1586.672H-1525.352V-1587.66H-1523.852Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-1586.672V-1587.66H-1553.789V-1586.672H-1525.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1552.262-1587.66H-1525.352" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1598.25-1587.66H-1599.75V-1588.68H-1598.25Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1553.789-1588.68V-1587.66H-1552.262V-1588.68H-1598.25" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1553.789-1587.66H-1598.25" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1553.789-1588.051H-1598.25V-1588.172H-1553.789Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.059-1739.82V-1740.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.57-1740.059V-1728.629H-1188.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.789-1728.629H-1235.309V-1740.809" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1235.309-1740.809H-1235.789V-1739.82" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.57-1728.629H-1190.578V-1738.801H-1188.57Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.27-1728.629H-1235.309V-1738.801H-1233.27Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.27-1738.801H-1190.578" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1190.578-1728.629H-1233.27" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1192.109-1732.98H-1231.769V-1733.101H-1192.109Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1190.578-1732.531H-1192.109V-1733.551H-1190.578Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1231.77-1732.531V-1733.551H-1233.27V-1732.531H-1192.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1231.77-1733.551H-1192.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1031.43-701.039V-700.051H-1031.91V-712.23H-1031.43" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1078.648-700.051H-1079.16V-701.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.16-712.23H-1078.648V-700.051H-1031.91" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1031.91-702.059H-1033.949V-712.231H-1031.91Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1033.949-702.059H-1078.648V-712.23H-1076.641V-702.059" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1033.949-712.23H-1076.641" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1035.449-707.762H-1075.109V-707.879H-1035.449Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1033.949-707.309H-1035.449V-708.32907H-1033.949Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.109-707.309H-1076.64V-708.32907H-1075.109Z" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1035.449-708.328H-1075.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.109-707.309H-1035.449" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1188.059-1740.059H-1188.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-564V-615.539" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1349.012-564V-615.539" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-646.078V-691.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-693.57V-695.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.109-564V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1371.238-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1371.238-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1382.34-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1382.34-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1393.469-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1393.469-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.57-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.57-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1415.699-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1415.699-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1426.801-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1426.801-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1437.93-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1437.93-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.891-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.891-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.641-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.641-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.359-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.359-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.109-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.109-691.559V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.578-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.578-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.301-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.301-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.051-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.051-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.77-695.641V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.77-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-693.57V-695.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-1728.629V-1677.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1349.012-1728.629V-1677.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-1646.609V-1601.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1336.859-1599.121V-1597.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.109-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1360.109-1724.641V-1677.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1371.238-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1371.238-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1382.34-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1382.34-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1393.469-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1393.469-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.57-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.57-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1415.699-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1415.699-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1426.801-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1426.801-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1437.93-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1437.93-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.891-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.891-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.641-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.641-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.359-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.359-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.109-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.109-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.578-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.578-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.301-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.301-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.051-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.051-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.77-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.77-1601.102V-1646.578" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-1599.121V-1597.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-1646.609V-1601.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-646.078V-691.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1350.602-615.539H-1337.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.27-1677.09H-1337.879" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-646.078V-691.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-693.57V-695.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-646.078V-691.559" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1370.219-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1370.219-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1381.352-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1381.352-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1392.449-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1392.449-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.68-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.68-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.809-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.809-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-568.051V-613.531" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.66-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.66-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.379-695.609V-693.57" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.379-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.102-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.102-691.559V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1391.852-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1391.852-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1380.57-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1380.57-691.559V-646.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1369.32-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1369.32-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1358.039-695.609V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1358.039-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.789-695.641V-693.602" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.789-691.59V-646.109" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1646.609V-1601.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1448.191-1599.121V-1597.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1337.879-1646.609V-1601.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.121-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1370.219-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1370.219-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1381.352-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1381.352-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1392.449-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1392.449-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.578-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.68-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.68-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.809-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.809-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-1724.641V-1679.129" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1436.91-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.66-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1425.66-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.379-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1414.379-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.102-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1403.102-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1391.852-1597.078V-1599.121" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1391.852-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1380.57-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1380.57-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1369.32-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1369.32-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1358.039-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1358.039-1601.129V-1646.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.789-1597.078V-1599.09" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.789-1601.102V-1646.578" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-1728.629V-1726.68" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-1599.121V-1597.078" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-564V-566.039" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1449.18-693.57V-695.609" />
                                <path transform="matrix(0,-1,-1,0,0,0)" d="M-1370.219-590.789-1379.309-592.289V-589.262ZM-1370.219-590.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-1370.219-590.789-1379.309-592.289V-589.262ZM-1370.219-590.789" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1475.578-590.789V-668.852H-1330.801" />
                                <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29254" font-family="ArialMT"><tspan y="1328.43" x="664.77">H</tspan></text>
                                <path transform="matrix(0,-1,-1,0,0,0)" d="M-1370.219-1701.871-1379.309-1700.371V-1703.398ZM-1370.219-1701.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-1370.219-1701.871-1379.309-1700.371V-1703.398ZM-1370.219-1701.871" />
                                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1475.578-1701.871V-1623.84H-1330.801" />
                                <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29254" font-family="ArialMT"><tspan y="1328.43" x="1619.79">H</tspan></text>
                            </g>

                            <g clip-path="url(#clip_309)">
                                <path d="M700.559 733.16H1006.516V1135.355H700.559Z" fill-opacity=".0120967" id="L1756" class="salle" fill="lightblue" />
                                <path d="M705.012 1241.25H999.203V1643.4451H705.012Z" fill-opacity=".0120967" id="L1758" class="salle" fill="lightblue" />
                                <path d="M998.805 1242.867H1292.996V1645.062H998.805Z" fill-opacity=".0120967" id="L1760" class="salle" fill="lightblue" />
                                <path d="M1294.199 1244.426H1588.39V1646.6211H1294.199Z" fill-opacity=".0120967" id="L1762" class="salle" fill="lightblue" />
                                <path d="M1120.953 1003.551H1294.551V1138.0901H1120.953Z" fill-opacity=".0120967" />
                                <path d="M1120.703 918.383H1294.301V1005.86H1120.703Z" fill-opacity=".0120967" />
                                <path d="M695.379 1135.73H1591.063V1245.269H695.379Z" fill-opacity=".0120967" id="C-L-1-2" class="corridor" fill="lightblue" />
                                <path d="M999.93 177.277 1133.457 310.625 1131.941 1138.312 998.418 1004.965ZM999.93 177.277" fill-opacity=".0120967" id="C-L-1-1" class="corridor" fill="lightblue" />
                                <path d="M1602.02 1134.285 1735.543 1187.645 1734.031 1518.832 1600.504 1465.473ZM1602.02 1134.285" fill-opacity=".0120967" id="E-L-1-1" class="escalier" fill="lightblue" />
                                <path d="M1295.586 1047.703 1363.672 1060.453 1362.902 1139.594 1294.812 1126.844ZM1295.586 1047.703" fill-opacity=".0120967" />
                                <path d="M563.949 1131.375 697.473 1184.73 695.961 1515.922 562.434 1462.562ZM563.949 1131.375" fill-opacity=".0120967" id="E-L-1-2" class="escalier" fill="lightblue" />
                            </g>
                        </g>
                    </svg>
                </svg>
            </UncontrolledReactSVGPanZoom>
            {infoBox.visible && (
                <div
                    style={{
                        position: "fixed",
                        left: infoBox.x,
                        top: infoBox.y,
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "8px",
                        zIndex: 10
                    }}
                >
                    <strong>Classe : </strong> {infoBox.id}
                    <br />
                    <button onClick={() => setInfoBox({ ...infoBox, visible: false })}>Fermer</button>
                </div>
            )}
        </div>


    );
}