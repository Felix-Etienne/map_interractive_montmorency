import { useEffect } from "react";
import { useRef, useState } from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import SearchBar from "../../../SearchBar/SearchBar";
import Path from "../../path";

export default function Premier({
  width,
  height,
  highlightedPath,
  nodePositions,
}) {
  const Viewer = useRef(null);
  const [tool, setTool] = useState("auto");
  const [value, setValue] = useState(null);
  const [size, setSize] = useState({ width, height });
  const [hoveredSalle, setHoveredSalle] = useState(null);
  const [selectedSalle, setSelectedSalle] = useState(null);
  const [infoBox, setInfoBox] = useState({
    visible: false,
    x: 0,
    y: 0,
    id: "",
  });
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
    const salles = document.querySelectorAll(".salle");

    const handleMouseEnter = (e) => {
      const id = e.target.id;
      highlightClass(id);
    };

    const handleClick = (e) => {
      const id = e.target.id;
      setSelectedSalle(id);
      highlightClass(id, true);
      console.log("Salle cliquée :", id);
      setInfoBox({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        id,
      });
    };

    salles.forEach((salle) => {
      salle.addEventListener("mouseenter", handleMouseEnter);
      salle.addEventListener("click", handleClick);
    });

    // Cleanup
    return () => {
      salles.forEach((salle) => {
        salle.removeEventListener("mouseenter", handleMouseEnter);
        salle.removeEventListener("click", handleClick);
      });
    };
  }, []);

  function highlightClass(id, showPopup = false) {
    document.querySelectorAll(".salle").forEach((e) => {
      e.setAttribute("fill", "lightblue");
      e.setAttribute("fill-opacity", ".0120967");
    });

    if (!id) return;
    let el = document.getElementById(id);

    if (el) {
      el.setAttribute("fill", "lightblue");
      el.setAttribute("fill-opacity", "0.5");

      if (showPopup) {
        const rect = el.getBoundingClientRect();
        setInfoBox({
          visible: true,
          x: rect.left + rect.width / 2,
          y: rect.top - 40,
          id,
        });
      }
    }
  }

  useEffect(() => {
    if (Viewer.current) {
      const viewer = Viewer.current.class;
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
        <svg viewBox="0 0 2592 1728" className="map" width="100%" height="100%">
          <svg
            className="map"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              display: "block",
              pointerEvents: "none",
            }}
            viewBox="0 0 2592 1728"
          >
            {highlightedPath.length > 1 && (
              Path({ highlightedPath, nodePositions })
            )}
          </svg>
          <svg id="plan" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="100%" height="100%" viewBox="0 0 2592 1728">
            <defs>
              <clipPath id="clip_332">
                <path d="M36.031 36.059H2272.531V1692H36.031Z" />
              </clipPath>
              <clipPath id="clip_333">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_334">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_335">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_336">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_337">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_338">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_339">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_340">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_341">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_342">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_343">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_344">
                <path d="M0 .031H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_345">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_347">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_348">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_349">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_350">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_351">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_352">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_353">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_354">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_355">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_356">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_357">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_358">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_359">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_360">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_361">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_362">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_363">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_364">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_365">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
              <clipPath id="clip_366">
                <path d="M0 0H2592V1728H0Z" />
              </clipPath>
            </defs>
            <g>
              <g clip-path="url(#clip_332)">
                <g clip-path="url(#clip_333)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-114.719-1921.379V-454.352L-186.48-1921.379ZM-114.719-454.352-186.48-1921.379V-454.352ZM-114.719-454.352" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-114.719-1921.379V-454.352L-186.48-1921.379ZM-114.719-454.352-186.48-1921.379V-454.352ZM-114.719-454.352" />
                </g>
                <g clip-path="url(#clip_334)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-186.48-1921.379V-1378.828L-186.988-1921.379ZM-186.48-1378.828-186.988-1921.379V-1378.828ZM-186.48-1378.828" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-186.48-1921.379V-1378.828L-186.988-1921.379ZM-186.48-1378.828-186.988-1921.379V-1378.828ZM-186.48-1378.828" />
                </g>
                <g clip-path="url(#clip_335)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-186.988-1921.379V-1378.828L-196.891-1921.379ZM-186.988-1378.828-196.891-1921.379V-1386.301ZM-186.988-1378.828" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-186.988-1921.379V-1378.828L-196.891-1921.379ZM-186.988-1378.828-196.891-1921.379V-1386.301ZM-186.988-1378.828" />
                </g>
                <g clip-path="url(#clip_336)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-196.891-1921.379V-1386.301L-251.82-1921.379ZM-196.891-1386.301-251.82-1921.379V-1427.578ZM-196.891-1386.301" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-196.891-1921.379V-1386.301L-251.82-1921.379ZM-196.891-1386.301-251.82-1921.379V-1427.578ZM-196.891-1386.301" />
                </g>
                <g clip-path="url(#clip_337)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-251.82-1921.379V-1427.578L-283.199-1921.379ZM-251.82-1427.578-283.199-1921.379V-1451.191ZM-251.82-1427.578" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-251.82-1921.379V-1427.578L-283.199-1921.379ZM-251.82-1427.578-283.199-1921.379V-1451.191ZM-251.82-1427.578" />
                </g>
                <g clip-path="url(#clip_338)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-283.199-1921.379V-1451.191L-463.172-1921.379ZM-283.199-1451.191-463.172-1921.379V-1586.488ZM-283.199-1451.191" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-283.199-1921.379V-1451.191L-463.172-1921.379ZM-283.199-1451.191-463.172-1921.379V-1586.488ZM-283.199-1451.191" />
                </g>
                <g clip-path="url(#clip_339)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-463.172-1921.379V-1446.93L-782.488-1921.379ZM-463.172-1446.93-782.488-1921.379V-1446.93ZM-463.172-1446.93" fill="#cccccc" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#cccccc" d="M-463.172-1921.379V-1446.93L-782.488-1921.379ZM-463.172-1446.93-782.488-1921.379V-1446.93ZM-463.172-1446.93" />
                </g>
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.262-1708.078H-192.359V-1592.609" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-388.172-1551.602-192.359-1404.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.262-1607.309-275.789-1554.328" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.262-1638.359H-262.078V-1617.57" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-344.762-1636.828H-263.578V-1618.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-344.762-1608.059-275.281-1555.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-342.211-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.262-1638.359V-1607.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-344.762-1636.828V-1608.059" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-388.172-1551.602-389.07-1550.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-346.262-1708.078V-1709.578" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-332.129-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-322.02-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-311.91-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-301.801-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-291.691-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-281.609-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-271.5-1708.078V-1638.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-336.27-1599.781-378.359-1544.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-328.199-1593.719-370.289-1538.16" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-320.102-1587.66-362.219-1532.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-312.031-1581.57-354.121-1526.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-303.961-1575.512-346.051-1519.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-295.891-1569.422-337.98-1513.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-287.82-1563.359-329.91-1507.801" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-279.719-1557.301-321.84-1501.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1634.672H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1624.559H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1614.449H-253.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1604.34H-224.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1594.23H-196.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1584.148H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1574.039H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1563.93H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-262.078-1554.328H-275.789" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-263.578-1555.859H-275.281" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-224.16-1603.98-187.801-1590.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.609-1619.191-229.711-1605.988-227.641-1601.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-227.641-1601.309V-1611.871L-224.16-1603.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-187.801-1589.52-224.699-1602.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.609-1617.719-230.281-1604.699-226.77-1596.84V-1607.371L-224.699-1602.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-192.359-1591.141V-1404.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-201.031-1594.23H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-225.422-1604.34H-226.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-227.641-1604.34H-228.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-230.102-1604.34H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-257.488-1614.449H-262.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-262.078-1616.102V-1554.328" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-263.578-1616.641V-1555.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" d="M-227.219-1613.371-225.691-1622.461H-228.719ZM-227.219-1613.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-227.219-1613.371-225.691-1622.461H-228.719ZM-227.219-1613.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-227.219-1613.371V-1673.219H-348.27" />
                <g clip-path="url(#clip_340)">
                  <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29257" font-family="ArialMT"><tspan y="358.44" x="1669.14">H</tspan></text>
                </g>
                <g clip-path="url(#clip_341)">
                  <path transform="matrix(0,-1,-1,0,0,0)" d="M-227.219-1595.039-228.719-1585.949H-225.691ZM-227.219-1595.039" />
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="butt" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-227.219-1595.039-228.719-1585.949H-225.691ZM-227.219-1595.039" />
                </g>
                <g clip-path="url(#clip_342)">
                  <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-227.219-1595.039V-1473.449L-362.129-1575.66" />
                </g>
                <g clip-path="url(#clip_343)">
                  <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29257" font-family="ArialMT"><tspan y="371.25" x="1576.89">B</tspan></text>
                </g>
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1350.512-592.738-1362.422-594.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.5-591.719-1366.379-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1347.961-618.391-1356.148-595.441-1362.422-594.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1350.512-592.738-1357.5-591.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1889.762V-1920.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1889.762V-1920.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-187.078-1889.762V-1920.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1836.359V-1880.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-672.629-1880.82V-1836.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-670.59-1836.359V-1880.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1880.82H-672.629V-1882.828H-668.578Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1834.352H-672.629V-1836.3601H-668.578Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1920.121H-189.121V-1922.1599H-185.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1887.75H-189.121V-1889.762H-185.07Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1725.766-126.328C1705.676-126.328 1689.391-142.617 1689.391-162.703" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-160.949-1689.422H-162.71901V-1725.781H-160.949Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-124.352-1725.781H-126.36V-1729.828H-124.352Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-162.719-1725.781H-164.762V-1729.828H-162.719Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-459.781-1589.012-440.398-1574.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-459.781-1589.012-457.352-1592.25-437.969-1577.672-440.398-1574.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-456.75-1590.512-439.801-1577.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-441.629-1575.359-439.199-1578.57" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-458.578-1588.109-456.148-1591.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-961.531H-164.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-945.871H-164.012V-961.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1001.219V-999.691H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-976.98H-182.461V-978.48H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1001.219H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1073.969V-1072.469H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1049.73H-182.461V-1051.23H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1073.969H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1146.719V-1145.219H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1122.48H-182.461V-1123.98H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1146.719H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1219.469H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-1196.73H-182.461V-1195.23H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1219.469V-1217.969H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1292.219H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-1269.48H-182.461V-1267.98H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1292.219V-1290.719H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1364.969H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-1342.23H-182.461V-1340.73H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1364.969V-1363.469H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-929.488H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-906.75H-182.461V-905.219H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-929.488V-927.961H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-856.738H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-834H-182.461V-832.469H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-856.738V-855.211H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-783.988H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-761.25H-182.461V-759.719H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-783.988V-782.461H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-711.238H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-688.5H-182.461V-686.969H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-711.238V-709.711H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-638.488H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-615.75H-182.461V-614.219H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-638.488V-636.961H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-566.219H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-543.48H-182.461V-541.98H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-566.219V-564.719H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-493.469H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-470.73H-182.461V-469.23H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-493.469V-491.969H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-454.352V-945.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-961.531V-1452.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-454.352V-1378.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1468.109H-164.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1452.449H-164.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1468.109V-1729.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-469.23V-493.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-469.23H-178.41V-493.469H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-470.73V-491.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-491.969H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-470.73H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-541.98V-566.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-541.98H-178.41V-566.219H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-543.48V-564.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-564.719H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-543.48H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-614.219V-638.488" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-614.219H-178.41V-638.488H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-615.75V-636.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-636.961H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-615.75H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-686.969V-711.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-686.969H-178.41V-711.238H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-688.5V-709.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-709.711H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-688.5H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-759.719V-783.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-759.719H-178.41V-783.988H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-761.25V-782.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-782.461H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-761.25H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-832.469V-856.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-832.469H-178.41V-856.738H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-834V-855.211" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-855.211H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-834H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-905.219V-929.488" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-905.219H-178.41V-929.488H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-906.75V-927.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-927.961H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-906.75H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1340.73V-1364.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1340.73H-178.41V-1364.969H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-1342.23V-1363.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1363.469H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1342.23H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1267.98V-1292.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1267.98H-178.41V-1292.219H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-1269.48V-1290.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1290.719H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1269.48H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1195.23V-1219.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1195.23H-178.41V-1219.469H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-1196.73V-1217.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1217.969H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1196.73H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1122.48V-1146.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1122.48H-178.41V-1146.719H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-1123.98V-1145.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1145.219H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1123.98H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1049.73V-1073.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1049.73H-178.41V-1073.969H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-1051.23V-1072.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1072.469H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-1051.23H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-976.98V-1001.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-976.98H-178.41V-1001.219H-182.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-179.43-978.48V-999.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-999.691H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-182.461-978.48H-178.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-807.512H-1439.641V-817.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1430.488-821.34V-835.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.379-842.488H-1422.359L-1420.32-843.301-1419.301-844.109-1418.281-845.73V-848.969L-1419.301-850.621-1420.32-851.43-1422.359-852.238H-1424.371L-1426.41-851.43-1429.469-849.781-1439.641-841.648V-853.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1439.641-861.18-1418.281-869.309V-857.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-883.949V-875.82L-1427.43-875.012-1426.41-875.82-1425.391-878.25V-880.68L-1426.41-883.141-1428.449-884.762-1431.512-885.57H-1433.52L-1436.578-884.762-1438.621-883.141-1439.641-880.68V-878.25L-1438.621-875.82-1437.602-875.012-1435.559-874.172" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.379-891.27H-1422.359L-1420.32-892.078-1419.301-892.891-1418.281-894.512V-897.75L-1419.301-899.398-1420.32-900.211-1422.359-901.02H-1424.371L-1426.41-900.211-1429.469-898.59-1439.641-890.461V-901.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1457.82-822.148-1455.781-821.34-1453.738-819.719-1452.75-818.07V-814.828L-1453.738-813.211-1455.781-811.59-1457.82-810.781-1460.879-809.941H-1465.949L-1469.012-810.781-1471.02-811.59-1473.059-813.211-1474.078-814.828V-818.07L-1473.059-819.719-1471.02-821.34-1469.012-822.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1452.75-827.852H-1474.078V-837.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-839.219-1452.75-845.73-1474.078-852.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1466.969-841.648V-849.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-866.879-1453.738-865.23-1452.75-862.801V-859.559L-1453.738-857.102-1455.781-855.48H-1457.82L-1459.859-856.289-1460.879-857.102-1461.871-858.75-1463.91-863.609-1464.93-865.23-1465.949-866.039-1467.988-866.879H-1471.02L-1473.059-865.23-1474.078-862.801V-859.559L-1473.059-857.102-1471.02-855.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-883.141-1453.738-881.488-1452.75-879.059V-875.82L-1453.738-873.359-1455.781-871.738H-1457.82L-1459.859-872.551-1460.879-873.359-1461.871-875.012-1463.91-879.871-1464.93-881.488-1465.949-882.328-1467.988-883.141H-1471.02L-1473.059-881.488-1474.078-879.059V-875.82L-1473.059-873.359-1471.02-871.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-888.809H-1452.75V-899.398" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1462.891-888.809V-895.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-888.809V-899.398" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-1110.781H-1439.641V-1120.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1430.488-1124.578V-1139.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.379-1145.73H-1422.359L-1420.32-1146.539-1419.301-1147.352-1418.281-1148.969V-1152.238L-1419.301-1153.859-1420.32-1154.672-1422.359-1155.48H-1424.371L-1426.41-1154.672-1429.469-1153.051-1439.641-1144.922V-1156.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1439.641-1164.422-1418.281-1172.551V-1161.18" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-1187.191V-1179.059L-1427.43-1178.25-1426.41-1179.059-1425.391-1181.52V-1183.949L-1426.41-1186.379-1428.449-1188-1431.512-1188.809H-1433.52L-1436.578-1188-1438.621-1186.379-1439.641-1183.949V-1181.52L-1438.621-1179.059-1437.602-1178.25-1435.559-1177.441" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1421.34-1204.262-1419.301-1203.449-1418.281-1201.02V-1199.398L-1419.301-1196.941-1422.359-1195.32-1427.43-1194.512H-1432.5L-1436.578-1195.32-1438.621-1196.941-1439.641-1199.398V-1200.211L-1438.621-1202.641-1436.578-1204.262-1433.52-1205.07H-1432.5L-1429.469-1204.262-1427.43-1202.641-1426.41-1200.211V-1199.398L-1427.43-1196.941-1429.469-1195.32-1432.5-1194.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1457.82-1125.391-1455.781-1124.578-1453.738-1122.961-1452.75-1121.34V-1118.102L-1453.738-1116.449-1455.781-1114.828-1457.82-1114.02-1460.879-1113.211H-1465.949L-1469.012-1114.02-1471.02-1114.828-1473.059-1116.449-1474.078-1118.102V-1121.34L-1473.059-1122.961-1471.02-1124.578-1469.012-1125.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1452.75-1131.09H-1474.078V-1140.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1142.488-1452.75-1148.969-1474.078-1155.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1466.969-1144.922V-1153.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-1170.121-1453.738-1168.5-1452.75-1166.07V-1162.801L-1453.738-1160.371-1455.781-1158.75H-1457.82L-1459.859-1159.559-1460.879-1160.371-1461.871-1161.988-1463.91-1166.879-1464.93-1168.5-1465.949-1169.309-1467.988-1170.121H-1471.02L-1473.059-1168.5-1474.078-1166.07V-1162.801L-1473.059-1160.371-1471.02-1158.75" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-1186.379-1453.738-1184.762-1452.75-1182.328V-1179.059L-1453.738-1176.629-1455.781-1175.012H-1457.82L-1459.859-1175.82-1460.879-1176.629-1461.871-1178.25-1463.91-1183.141-1464.93-1184.762-1465.949-1185.57-1467.988-1186.379H-1471.02L-1473.059-1184.762-1474.078-1182.328V-1179.059L-1473.059-1176.629-1471.02-1175.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1192.078H-1452.75V-1202.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1462.891-1192.078V-1198.59" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1192.078V-1202.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-1400.281H-1439.641V-1410.031" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1430.488-1414.109V-1428.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.379-1435.23H-1422.359L-1420.32-1436.039-1419.301-1436.852-1418.281-1438.5V-1441.738L-1419.301-1443.359-1420.32-1444.172-1422.359-1444.98H-1424.371L-1426.41-1444.172-1429.469-1442.551-1439.641-1434.422V-1445.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1439.641-1453.949-1418.281-1462.078V-1450.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1421.34-1477.531-1419.301-1476.691-1418.281-1474.262V-1472.641L-1419.301-1470.211-1422.359-1468.559-1427.43-1467.75H-1432.5L-1436.578-1468.559-1438.621-1470.211-1439.641-1472.641V-1473.449L-1438.621-1475.879-1436.578-1477.531-1433.52-1478.34H-1432.5L-1429.469-1477.531-1427.43-1475.879-1426.41-1473.449V-1472.641L-1427.43-1470.211-1429.469-1468.559-1432.5-1467.75" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1418.281-1488.09-1419.301-1485.66-1422.359-1484.012-1427.43-1483.199H-1430.488L-1435.559-1484.012-1438.621-1485.66-1439.641-1488.09V-1489.711L-1438.621-1492.141-1435.559-1493.789-1430.488-1494.602H-1427.43L-1422.359-1493.789-1419.301-1492.141-1418.281-1489.711V-1488.09" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1457.82-1414.922-1455.781-1414.109-1453.738-1412.461-1452.75-1410.84V-1407.602L-1453.738-1405.98-1455.781-1404.328-1457.82-1403.52-1460.879-1402.711H-1465.949L-1469.012-1403.52-1471.02-1404.328-1473.059-1405.98-1474.078-1407.602V-1410.84L-1473.059-1412.461-1471.02-1414.109-1469.012-1414.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1452.75-1420.59H-1474.078V-1430.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1431.988-1452.75-1438.5-1474.078-1444.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1466.969-1434.422V-1442.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-1459.621-1453.738-1458-1452.75-1455.57V-1452.301L-1453.738-1449.871-1455.781-1448.25H-1457.82L-1459.859-1449.059-1460.879-1449.871-1461.871-1451.488-1463.91-1456.379-1464.93-1458-1465.949-1458.809-1467.988-1459.621H-1471.02L-1473.059-1458-1474.078-1455.57V-1452.301L-1473.059-1449.871-1471.02-1448.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1455.781-1475.879-1453.738-1474.262-1452.75-1471.828V-1468.559L-1453.738-1466.129-1455.781-1464.512H-1457.82L-1459.859-1465.32-1460.879-1466.129-1461.871-1467.75-1463.91-1472.641-1464.93-1474.262-1465.949-1475.07-1467.988-1475.879H-1471.02L-1473.059-1474.262-1474.078-1471.828V-1468.559L-1473.059-1466.129-1471.02-1464.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1481.578H-1452.75V-1492.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1462.891-1481.578V-1488.09" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1474.078-1481.578V-1492.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-899.789-807.512H-921.121V-817.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-911.969-821.34V-835.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-904.859-842.488H-903.84L-901.801-843.301-900.781-844.109-899.789-845.73V-848.969L-900.781-850.621-901.801-851.43-903.84-852.238H-905.879L-907.922-851.43-910.949-849.781-921.121-841.648V-853.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-921.121-861.18-899.789-869.309V-857.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-899.789-883.949V-875.82L-908.91-875.012-907.922-875.82-906.898-878.25V-880.68L-907.922-883.141-909.93-884.762-912.988-885.57H-915.031L-918.059-884.762-920.102-883.141-921.121-880.68V-878.25L-920.102-875.82-919.078-875.012-917.039-874.172" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-899.789-895.32-900.781-892.891-903.84-891.27-908.91-890.461H-911.969L-917.039-891.27-920.102-892.891-921.121-895.32V-896.941L-920.102-899.398-917.039-901.02-911.969-901.828H-908.91L-903.84-901.02-900.781-899.398-899.789-896.941V-895.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-939.301-822.148-937.289-821.34-935.25-819.719-934.23-818.07V-814.828L-935.25-813.211-937.289-811.59-939.301-810.781-942.359-809.941H-947.43L-950.488-810.781-952.531-811.59-954.57-813.211-955.559-814.828V-818.07L-954.57-819.719-952.531-821.34-950.488-822.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-934.23-827.852H-955.559V-837.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-955.559-839.219-934.23-845.73-955.559-852.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-948.449-841.648V-849.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-937.289-866.879-935.25-865.23-934.23-862.801V-859.559L-935.25-857.102-937.289-855.48H-939.301L-941.34-856.289-942.359-857.102-943.379-858.75-945.422-863.609-946.441-865.23-947.43-866.039-949.469-866.879H-952.531L-954.57-865.23-955.559-862.801V-859.559L-954.57-857.102-952.531-855.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-937.289-883.141-935.25-881.488-934.23-879.059V-875.82L-935.25-873.359-937.289-871.738H-939.301L-941.34-872.551-942.359-873.359-943.379-875.012-945.422-879.871-946.441-881.488-947.43-882.328-949.469-883.141H-952.531L-954.57-881.488-955.559-879.059V-875.82L-954.57-873.359-952.531-871.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-955.559-888.809H-934.23V-899.398" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-944.398-888.809V-895.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-955.559-888.809V-899.398" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-133.23-1831.59H-181.73799V-1833.6019H-133.23Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1855.828H-122.34V-1831.59H-114.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-648.93V-694.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-696.422V-698.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-648.93V-694.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.578-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.578-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1378.711-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1378.711-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.809-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.809-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1412.039-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1412.039-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.172-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.172-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.02-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.02-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1411.738-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1411.738-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.461-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.461-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.211-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.211-694.41V-648.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1377.93-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1377.93-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1366.68-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1366.68-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1355.398-698.488V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1355.398-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1344.148-698.488V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1344.148-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.352-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1345.352-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1649.461V-1603.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1601.969V-1599.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-1649.461V-1603.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1356.48-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1356.48-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.578-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1367.578-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1378.711-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1378.711-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.809-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.809-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1412.039-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1412.039-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.172-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.172-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1434.27-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.02-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1423.02-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1411.738-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1411.738-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.461-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.461-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.211-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1389.211-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1377.93-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1377.93-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1366.68-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1366.68-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1355.398-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1355.398-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1344.148-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1344.148-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-1601.969V-1599.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-696.422V-698.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-489.422-1729.828V-1469.672H-759.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-759.781-1794.93H-767.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-469.172-1610.609-190.828-1401.328" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-441.629-1575.359-440.398-1574.43-433.41-1583.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-458.578-1588.109-459.781-1589.012-452.789-1598.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-444.031-1572.121-441.629-1575.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-461.012-1584.871-458.578-1588.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-405.059-1709.578H-190.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-469.172-1610.609V-1721.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-463.172-1586.488-186.48-1378.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-782.488-1446.93V-1921.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-759.781-1469.672V-1794.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-190.828-1709.578V-1401.328" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-463.172-1446.93V-1586.488" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1468.109V-1729.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-463.172-1446.93H-782.488" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-782.488-1464.84H-778.469V-1450.98H-764.609V-1446.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-463.172-1464.84H-467.191V-1450.98H-481.078V-1446.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-767.852-1794.93V-1921.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-405.059-1721.762V-1709.578" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-489.422-1729.828H-469.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-404.82-1729.828H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-270.48-1558.801V-1561.828" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1561.816-270.449C1562.09-270.449 1562.309-270.227 1562.309-269.953" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.969-1562.34H-266.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1562.309-266.926C1562.309-266.652 1562.09-266.43 1561.816-266.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.43-1561.828V-1558.801" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1558.785-266.43C1558.512-266.43 1558.289-266.652 1558.289-266.926" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.941-1558.32H-269.969" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1558.289-269.953C1558.289-270.227 1558.512-270.449 1558.785-270.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-270.48-1629.93V-1632.961" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1632.945-270.449C1633.219-270.449 1633.441-270.227 1633.441-269.953" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-269.969-1633.469H-266.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1633.441-266.926C1633.441-266.652 1633.219-266.43 1632.945-266.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.43-1632.961V-1629.93" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1629.914-266.43C1629.641-266.43 1629.422-266.652 1629.422-266.926" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-266.941-1629.422H-269.969" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1629.422-269.953C1629.422-270.227 1629.641-270.449 1629.914-270.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-340.891-1629.93V-1632.961" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1632.945-340.859C1633.219-340.859 1633.441-340.637 1633.441-340.363" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-340.379-1633.469H-337.352" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1633.441-337.336C1633.441-337.062 1633.219-336.84 1632.945-336.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-336.84-1632.961V-1629.93" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1629.914-336.84C1629.641-336.84 1629.422-337.062 1629.422-337.336" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-337.352-1629.422H-340.379" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1629.422-340.363C1629.422-340.637 1629.641-340.859 1629.914-340.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-1742.672V-1692.57" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-1644.84V-1594.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1583.578V-1644.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1692.57V-1731.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-1731.48H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1731.48H-1404.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-1731.48H-1319.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-1731.48H-1271.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-1731.48H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-1742.672H-1121.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-1742.672H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-1742.672H-1271.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-1742.672H-1319.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-1742.672H-1518" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.422-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-1731.48V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1121.52-1742.672V-1368.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1356.961V-1731.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-703.922V-726.328H-1628.07V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-835.711H-1639.261V-873.328H-1628.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-982.738H-1639.261V-1020.988H-1628.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1130.398H-1639.261V-1168.0189H-1628.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1277.398H-1639.261V-1316.1909H-1628.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1425.602H-1639.261V-1463.219H-1628.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1572.602H-1639.262V-1594.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-715.078V-1288.648" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-731.012-1299.809V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-715.078H-1076.52V-703.922H-1121.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1004.91-703.922H-1028.789V-715.078H-1004.91Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.82-703.922H-895.5V-715.078H-869.82Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-760.41-715.078H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-731.012-703.922H-760.41V-715.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1053.512-1288.648V-1356.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1042.352-1368.121V-1299.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1053.512-1356.961H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1121.52-1368.121H-1042.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-1594.77H-1518.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-1594.77H-1628.07V-1572.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518.66-1583.578V-1594.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-703.922H-1628.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-703.922H-1518.66V-715.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-566.852V-605.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-653.672V-715.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-653.672V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518-555.691V-605.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-698.461H-1136.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-705.871H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-555.691H-1518" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-555.691H-1357.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-555.691H-1233.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-555.691H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-555.691H-1121.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-566.852H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-566.852H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-566.852H-1233.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-566.852H-1357.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-566.852H-1404.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.422-555.691V-566.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-566.852V-698.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1121.52-703.922V-555.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1042.352-1299.809H-731.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-1288.648H-1053.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-1007.879H-731.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-731.012-1133.102H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-698.461V-705.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-715.078V-705.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1583.578H-1518.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-653.672H-1518" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-715.078H-1518.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".99" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1731.539V-1692.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-672.629-1794.93V-1836.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-672.629-1880.82V-1921.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1794.93V-1836.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1880.82V-1921.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1831.59V-1838.129" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1827.539H-156.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1831.59H-185.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-759.781-1794.93H-575.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-400.828-1806.691H-407.102" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-180.93-1802.641H-407.102" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-575.07-1806.691V-1794.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-475.262-1802.641V-1729.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-156.359-1827.539-180.93-1802.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-447.539-1806.691H-575.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-447.539-1802.641H-475.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1806.691V-1838.129" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1878.539V-1887.75" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1878.539V-1887.75" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-400.828-1806.691H-189.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-489.422-1729.828V-1790.91H-759.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-489.422-1790.91-759.781-1469.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-489.422-1469.672-759.781-1790.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-164.52-1452.449V-1468.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.531-1165.828V-1170.75" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-164.52-1466.34H-114.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1461.391H-164.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-164.699-1461.391V-1466.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-714.301H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-709.32H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-966.48H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-961.5H-164.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1042.559H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1037.578H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1116.148H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1111.172H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1189.738H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1184.762H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1263.328H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1258.352H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1339.41H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-114.719-1334.43H-172.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1729.828H-164.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-172.352-1725.781H-164.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-124.352-1725.781H-114.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-124.352-1729.828H-114.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1599.898H-1172.699V-1592.488" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-1304.941H-1628.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1583.578H-1284.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1592.488V-1351.32H-1248.211V-1577.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1311.148V-1314.93H-1240.621" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-1304.941V-1311.148H-1248.211" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1577.371H-1284.539V-1583.578" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1288.648H-1284.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-1010.012H-1628.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1016.219V-1019.969H-1240.621" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1056.391V-1282.441" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1314.93V-1056.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-983.762V-1019.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1056.391V-1242.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1282.441H-1284.539V-1288.648" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-1010.012V-1016.219H-1248.211" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-715.078H-1506.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-993.719H-1284.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1019.969V-761.461H-1248.211V-987.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-725.039V-705.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-721.289V-725.039H-1240.621" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-715.078V-947.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-721.289H-1248.211" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-987.512H-1284.539V-993.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-993.719H-1079.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-987.512V-983.762H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-947.34H-1116.301V-721.289H-1079.941V-715.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.941-987.512H-1116.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1053.512-1288.648H-1079.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.941-1010.012H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1242.301H-1116.301V-1229.52" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1216.32V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1142.73V-1056.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1019.969V-1016.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1282.441V-1278.691H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.941-1288.648V-1282.441H-1116.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-698.461H-1506.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-705.871H-1172.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-698.461V-705.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1125.27-1356.961V-1353.602H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1125.27-1310.102V-1302.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1278.691V-1310.102H-1125.27" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1125.27-1302.238H-1053.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1284.539-721.289V-715.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1172.699-1592.488H-1240.621" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1599.898H-1136.309V-1592.488H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.941-987.512V-993.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1056.391H-1248.211" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1356.961V-1353.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1347.961-618.391H-1445.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-618.391V-646.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-646.922H-1334.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1348.68-616.379H-1447.559V-648.93H-1334.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-696.422-1505.129-696.449V-568.891H-1365.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1364.941-570.898H-1503.121V-694.41H-1334.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-648.93V-646.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-694.41V-696.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1472.941-593.641H-1367.578" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1679.941H-1445.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1679.941V-1651.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1445.551-1651.469H-1334.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1681.98H-1447.559V-1649.461H-1334.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-1601.969H-1505.129V-1729.531H-1334.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1727.488H-1503.121V-1603.98H-1334.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-1649.461V-1651.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-1603.98V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1472.941-1626.719H-1334.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1079.941-1010.012V-1016.219H-1116.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1019.969H-1132.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1132.77-1056.391H-1116.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1155.93H-967.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-954.629-1155.93H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1142.73H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1229.52H-1114.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1077.871-1229.52H-954.629" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1216.32H-1114.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1077.871-1216.32H-967.828" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-954.629-1229.52V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-967.828-1216.32V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1114.262-1229.52V-1216.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1077.871-1229.52V-1216.32" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-886.738-1171.77V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-885.48-1155.93V-1171.77H-886.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-920.102-1171.77V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-921.359-1155.93V-1171.77H-920.102" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1681.98V-1679.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.25-1727.488V-1729.531" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1691.43-406.816C1691.43-423.559 1705.004-437.129 1721.746-437.129" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1721.746-437.129C1705.004-437.129 1691.43-450.703 1691.43-467.445" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1806.676-445.469C1826.766-445.469 1843.051-429.184 1843.051-409.094" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1840.125-225.48C1860.215-225.48 1876.5-209.195 1876.5-189.105" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1921.32-672.613C1921.32-673.258 1921.336-673.898 1921.371-674.539" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-668.578-1919.309H-672.629V-1921.3209H-668.578Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-189.121-1840.141H-225.48001V-1841.911H-189.121Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1876.531H-189.121V-1878.5391H-185.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-185.07-1838.129H-189.121V-1840.141H-185.07Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-409.109-1806.691H-410.879V-1843.078H-409.109Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-445.5-1802.641H-447.539V-1806.692H-445.5Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-407.102-1802.641H-409.11V-1806.692H-407.102Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-465.691-1691.43H-467.461V-1721.7621H-465.691Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-406.828-1691.43H-408.601V-1721.7621H-406.828Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-467.461-1721.762H-469.469V-1729.828H-467.461Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-404.82-1721.762H-406.828V-1729.828H-404.82Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-186.48-1020.031H-731.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-731.012-1120.98H-186.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.289-666.121H-1140.2689V-698.461H-1138.289Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-698.461H-1138.289V-705.871H-1136.309Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1170.691-698.461H-1172.6991V-705.871H-1170.691Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M666.105-1140.262C666.637-1157.594 681.121-1171.207 698.449-1170.676" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.289-523.352H-1140.2689V-555.692H-1138.289Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-555.691H-1138.289V-566.85098H-1136.309Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1170.691-555.691H-1172.6991V-566.85098H-1170.691Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M523.336-1140.262C523.867-1157.594 538.352-1171.207 555.68-1170.676" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.289-1599.898H-1140.2689V-1632.21H-1138.289Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-1592.488H-1138.289V-1599.8981H-1136.309Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1170.691-1592.488H-1172.6991V-1599.8981H-1170.691Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1599.879-1170.676C1617.211-1171.207 1631.691-1157.594 1632.227-1140.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1138.289-1742.672H-1140.2689V-1775.012H-1138.289Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1136.309-1731.48H-1138.289V-1742.671H-1136.309Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1170.691-1731.48H-1172.6991V-1742.671H-1170.691Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1742.648-1170.676C1759.98-1171.207 1774.461-1157.594 1774.996-1140.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-727.051H-1280.551V-729.031H-1248.211Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-725.039H-1248.2109V-727.051H-1240.621Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-759.422H-1248.2109V-761.461H-1240.621Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M729.02-1280.535C746.352-1280 759.969-1265.52 759.434-1248.188" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1021.98H-1280.551V-1023.95999H-1248.211Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1019.969H-1248.2109V-1021.981H-1240.621Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1054.379H-1248.2109V-1056.391H-1240.621Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1023.949-1280.535C1041.281-1280 1054.898-1265.52 1054.363-1248.188" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1248.211-1316.91H-1280.551V-1318.89H-1248.211Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1314.93H-1248.2109V-1316.91H-1240.621Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1240.621-1349.309H-1248.2109V-1351.3209H-1240.621Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1318.883-1280.535C1336.211-1280 1349.828-1265.52 1349.297-1248.188" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1083.961-1274.699H-1116.301V-1276.7109H-1083.961Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1276.711H-1123.891V-1278.691H-1116.301Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1242.301H-1123.891V-1244.3091H-1116.301Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1274.68-1083.945C1257.348-1084.477 1243.73-1098.961 1244.266-1116.293" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1083.961-979.77H-1116.301V-981.75H-1083.961Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-981.75H-1123.891V-983.762H-1116.301Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-947.34H-1123.891V-949.379H-1116.301Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M979.75-1083.945C962.418-1084.477 948.801-1098.961 949.336-1116.293" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.539-1310.102H-1122.809V-1353.602H-1056.539Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1092-1303.891H-1122.809V-1308.75H-1092Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.539-1310.102-1122.809-1353.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1056.539-1353.602-1122.809-1310.102" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1156.68-1320.148-1132.77-1351.621-1131.18-1350.422-1155.121-1318.949-1156.68-1320.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1125.27-1310.102H-1132.77V-1312.0791H-1125.27Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1125.27-1351.59H-1132.77V-1353.6019H-1125.27Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1312.094-1132.742C1312.535-1140.629 1314.879-1148.293 1318.934-1155.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1083.961-1021.98H-1116.301V-1023.95999H-1083.961Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1019.969H-1123.891V-1021.981H-1116.301Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1116.301-1054.352H-1123.891V-1056.391H-1116.301Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1054.363-1116.293C1054.898-1098.961 1041.281-1084.477 1023.949-1083.945" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1110.27-1183.98H-1112.25V-1216.32H-1110.27Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1077.871-1216.32H-1079.851V-1229.5189H-1077.871Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1112.25-1216.32H-1114.262V-1229.5189H-1112.25Z" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1216.312-1079.836C1198.98-1079.301 1184.5-1092.918 1183.965-1110.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-731.012-1120.98-458.762-1020.031-186.48-1120.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-873.328V-873.84H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-873.84V-873.328H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-982.738H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-982.738V-982.23H-1628.07V-982.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-873.84V-982.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-982.23V-873.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-873.84H-1638.238V-875.85208H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-980.219H-1630.078V-982.23H-1638.238V-875.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-980.219V-875.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-877.379H-1634.578V-904.289H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-904.289H-1635.032V-905.82H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-877.379H-1635.031V-875.852H-1634.012V-904.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-877.379V-904.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-951.781H-1634.578V-978.691H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-978.691H-1635.032V-980.21798H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-951.781H-1635.031V-950.25H-1634.012V-978.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-951.781V-978.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-904.289H-1636.019V-905.82H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-950.25H-1635.031V-951.781H-1636.02V-905.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-950.25V-905.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-905.82H-1635.512V-950.25H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-726.328V-726.809H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-726.809V-726.328H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-835.711H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-835.711V-835.199H-1628.07V-835.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-726.809V-835.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-835.199V-726.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-726.809H-1638.238V-728.85208H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-833.191H-1630.078V-835.199H-1638.238V-728.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-833.191V-728.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-730.352H-1634.578V-757.26199H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-757.262H-1635.032V-758.789H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-730.352H-1635.031V-728.852H-1634.012V-757.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-730.352V-757.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-804.75H-1634.578V-831.66H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-831.66H-1635.032V-833.191H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-804.75H-1635.031V-803.25H-1634.012V-831.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-804.75V-831.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-757.262H-1636.019V-758.789H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-803.25H-1635.031V-804.75H-1636.02V-758.789" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-803.25V-758.789" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-758.789H-1635.512V-803.25H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1004.398-702.898H-1004.91V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1004.91-715.078H-1004.398V-702.898" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-895.5-703.922V-702.898H-896.012V-715.078H-895.5" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1004.398-702.898H-896.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-909.781-715.078H-944.789" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-969.059-715.078H-1004.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-896.012-704.91H-898.051V-713.06997H-896.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-898.051-704.91H-1004.398V-713.07H-1002.391V-704.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-898.051-713.07H-1002.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-973.949-708.602H-1000.85897V-708.719H-973.949Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-972.449-708.148H-973.949V-709.14H-972.449Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.859-708.148H-1002.39V-709.14H-1000.859Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-973.949-709.141H-1000.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.859-708.148H-973.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-899.551-708.602H-926.461V-708.719H-899.551Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-898.051-708.148H-899.551V-709.14H-898.051Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.461-708.148H-927.988V-709.14H-926.461Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-899.551-709.141H-926.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.461-708.148H-899.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.461-707.129H-927.988V-708.14907H-926.461Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-927.988-707.129H-973.949V-708.148H-972.449V-707.129" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-927.988-708.148H-972.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-927.988-707.641H-972.449V-707.76199H-927.988Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-760.41-715.078H-760.922V-702.898" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-760.922-702.898H-760.41V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.82-703.922V-702.898" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.82-702.898H-869.309V-715.078H-869.82" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-760.922-702.898H-869.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-869.309-715.078H-850.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-826.262-715.078H-791.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-766.98-715.078H-760.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-760.922-704.91H-762.93V-713.06997H-760.922Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-867.27-704.91V-713.07H-869.309V-704.91H-762.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-867.27-713.07H-762.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-764.461-708.602H-791.371V-708.719H-764.461Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-791.371-708.148H-792.871V-709.14H-791.371Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-764.461-709.141V-708.148H-762.93V-709.141H-791.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-764.461-708.148H-791.371" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-838.859-708.602H-865.769V-708.719H-838.859Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-865.77-708.148H-867.27V-709.14H-865.77Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-838.859-709.141V-708.148H-837.328V-709.141H-865.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-838.859-708.148H-865.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-791.371-707.129H-792.871V-708.14907H-791.371Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-837.328-707.129V-708.148H-838.859V-707.129H-792.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-837.328-708.148H-792.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-792.871-707.641H-837.328V-707.76199H-792.871Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1463.219V-1463.699H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1463.699V-1463.219H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-1572.602H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1572.602V-1572.09H-1628.07V-1572.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1463.699V-1572.09" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1572.09V-1463.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1463.699H-1638.238V-1465.7379H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-1570.078H-1630.078V-1572.09H-1638.238V-1465.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1570.078V-1465.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1467.238H-1634.578V-1494.1481H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1494.148H-1635.032V-1495.679H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1467.238H-1635.031V-1465.738H-1634.012V-1494.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1467.238V-1494.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1541.641H-1634.578V-1568.551H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1568.551H-1635.032V-1570.078H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1541.641H-1635.031V-1540.141H-1634.012V-1568.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1541.641V-1568.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1494.148H-1636.019V-1495.679H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-1540.141H-1635.031V-1541.641H-1636.02V-1495.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1540.141V-1495.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-1495.68H-1635.512V-1540.1411H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1316.191V-1316.699H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1316.699V-1316.191H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-1425.602H-1640.25" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1425.602V-1425.09H-1628.07V-1425.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1316.699V-1425.09" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1425.09V-1316.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1316.699H-1638.238V-1318.7109H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-1423.051H-1630.078V-1425.09H-1638.238V-1318.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1423.051V-1318.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1320.238H-1634.578V-1347.1481H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1347.148H-1635.032V-1348.648H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1320.238H-1635.031V-1318.711H-1634.012V-1347.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1320.238V-1347.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1394.641H-1634.578V-1421.551H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1421.551H-1635.032V-1423.051H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1394.641H-1635.031V-1393.109H-1634.012V-1421.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1394.641V-1421.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1347.148H-1636.019V-1348.648H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-1393.109H-1635.031V-1394.641H-1636.02V-1348.648" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1393.109V-1348.648" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-1348.648H-1635.512V-1393.1089H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-1020.988H-1640.25V-1021.5H-1628.07V-1020.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1129.891V-1130.398H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1130.398V-1129.891H-1640.25V-1021.5" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1021.5V-1129.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1021.5H-1638.238V-1023.512H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-1023.512V-1129.891H-1630.078V-1127.879H-1638.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1023.512V-1127.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1099.441H-1634.578V-1126.3511H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1126.352H-1635.032V-1127.879H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1126.352V-1097.91H-1635.031V-1099.441H-1634.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1126.352V-1099.441" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1025.039H-1634.578V-1051.949H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1051.949H-1635.032V-1053.449H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1051.949V-1023.512H-1635.031V-1025.039H-1634.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1051.949V-1025.039" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1097.91H-1636.019V-1099.441H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1051.949H-1636.019V-1053.449H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-1097.91V-1053.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1053.449V-1097.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-1053.449H-1635.512V-1097.9099H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1639.262-1168.02H-1640.25V-1168.531H-1628.07V-1168.02" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1640.25-1276.891V-1277.398H-1639.262" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1277.398V-1276.891H-1640.25V-1168.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1168.531V-1276.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1168.531H-1638.238V-1170.5391H-1630.078Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1638.238-1170.539V-1276.891H-1630.078V-1274.879H-1638.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1630.078-1170.539V-1274.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1246.469H-1634.578V-1273.379H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1273.379H-1635.032V-1274.879H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1273.379V-1244.941H-1635.031V-1246.469H-1634.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1273.379V-1246.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.43-1172.039H-1634.578V-1198.98H-1634.43Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1198.98H-1635.032V-1200.48H-1634.012Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1634.012-1198.98V-1170.539H-1635.031V-1172.039H-1634.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1198.98V-1172.039" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1244.941H-1636.019V-1246.468H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1198.98H-1636.019V-1200.48H-1635.031Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1636.02-1244.941V-1200.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.031-1200.48V-1244.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1635.391-1200.48H-1635.512V-1244.9409H-1635.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-605.941H-1519.02V-606.42098H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.02-653.16H-1506.809V-653.672H-1519.02V-606.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-651.148H-1516.981V-653.16006H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-606.422H-1516.981V-608.461H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1516.98-608.461V-651.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-651.148V-608.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1511.16-609.961H-1511.308V-649.621H-1511.16Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1510.738-608.461H-1511.73V-609.961H-1510.738Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1510.738-649.621H-1511.73V-651.14797H-1510.738Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1510.738-649.621V-609.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1511.73-609.961V-649.621" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1692.059H-1519.02V-1692.5709H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1644.84H-1519.02V-1645.3519H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.02-1692.059V-1645.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1690.051H-1516.981V-1692.0591H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1645.352H-1516.981V-1647.3601H-1506.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1516.98-1690.051V-1647.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1506.809-1647.359V-1690.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1511.16-1648.891H-1511.308V-1688.551H-1511.16Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1510.738-1688.551H-1511.73V-1690.051H-1510.738Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1510.738-1688.551V-1647.359H-1511.73V-1648.891H-1510.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1511.73-1688.551V-1648.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-555.691V-554.672H-1271.852V-566.852H-1271.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1318.559-554.672H-1319.07V-555.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-566.852H-1318.559V-554.672H-1271.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.852-556.68H-1273.8601V-566.852H-1271.852Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.859-556.68H-1318.559V-566.852H-1316.551V-556.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.859-566.852H-1316.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1275.391-562.379H-1315.02V-562.5H-1275.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1315.02-561.93H-1316.551V-562.95H-1315.02Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1315.02-562.949H-1273.859V-561.93H-1275.391V-562.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1315.02-561.93H-1275.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-555.691V-554.672H-1357.738V-566.852H-1357.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.48-554.672H-1404.988V-555.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-566.852H-1404.48V-554.672H-1357.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.738-556.68H-1359.781V-566.852H-1357.738Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.781-556.68H-1404.48V-566.852H-1402.441V-556.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.781-566.852H-1402.441" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1361.281-562.379H-1400.941V-562.5H-1361.281Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-561.93H-1402.441V-562.95H-1400.941Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-562.949H-1359.781V-561.93H-1361.281V-562.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-561.93H-1361.281" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1627.559-702.898H-1628.07V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-715.078H-1627.559V-702.898" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518.66-703.922V-702.898H-1519.172V-715.078H-1518.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1627.559-702.898H-1519.172" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.172-715.078H-1627.559" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.172-704.91H-1521.2109V-713.06997H-1519.172Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.211-704.91H-1627.559V-713.07H-1625.551V-704.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.211-713.07H-1625.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1597.109-708.602H-1624.019V-708.719H-1597.109Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1624.02-708.148H-1625.551V-709.14H-1624.02Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1624.02-709.141H-1595.609V-708.148H-1597.109V-709.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1624.02-708.148H-1597.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1522.711-708.602H-1549.6211V-708.719H-1522.711Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-708.148H-1551.148V-709.14H-1549.621Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-709.141H-1521.211V-708.148H-1522.711V-709.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-708.148H-1522.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1595.609-707.129H-1597.109V-708.14907H-1595.609Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-707.129H-1551.148V-708.14907H-1549.621Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1595.609-707.129H-1551.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1551.148-708.148H-1595.609" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1551.148-707.641H-1595.6089V-707.76199H-1551.148Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.422-555.691V-554.672H-1185.93V-566.852H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1232.672-554.672H-1233.148V-555.691" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-566.852H-1232.672V-554.672H-1185.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.93-556.68H-1187.942V-566.852H-1185.93Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1187.941-556.68H-1232.672V-566.852H-1230.629V-556.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1187.941-566.852H-1230.629" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1189.469-562.379H-1229.129V-562.5H-1189.469Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1229.129-561.93H-1230.629V-562.95H-1229.129Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1229.129-562.949H-1187.941V-561.93H-1189.469V-562.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1229.129-561.93H-1189.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-1742.672V-1743.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.34-1743.66H-1271.852V-1731.48H-1271.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1319.07-1731.48H-1318.559V-1743.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.852-1743.66H-1319.07V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1271.852-1731.48H-1273.8601V-1741.648H-1271.852Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1316.551-1731.48H-1318.5591V-1741.648H-1316.551Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1316.551-1741.648H-1273.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.859-1731.48H-1316.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1275.391-1735.828H-1315.02V-1735.949H-1275.391Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1273.859-1735.41H-1275.39V-1736.3981H-1273.859Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1315.02-1735.41V-1736.398H-1316.551V-1735.41H-1275.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1315.02-1736.398H-1275.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-1742.672V-1743.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.23-1743.66H-1357.738V-1731.48H-1357.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1404.988-1731.48H-1404.48V-1743.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.738-1743.66H-1404.988V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.738-1731.48H-1359.781V-1741.648H-1357.738Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.441-1731.48H-1404.48V-1741.648H-1402.441Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1402.441-1741.648H-1359.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.781-1731.48H-1402.441" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1361.281-1735.828H-1400.941V-1735.949H-1361.281Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1359.781-1735.41H-1361.281V-1736.3981H-1359.781Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-1735.41V-1736.398H-1402.441V-1735.41H-1361.281" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1400.941-1736.398H-1361.281" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1628.07-1583.578H-1627.559V-1595.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1627.559-1595.762H-1628.07V-1594.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518.66-1594.77V-1595.762" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1518.66-1595.762H-1519.172V-1583.578H-1518.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1627.559-1595.762H-1519.172" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1519.172-1583.578H-1627.559" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1625.551-1585.59H-1627.5591V-1593.75H-1625.551Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.211-1593.75V-1585.59H-1519.172V-1593.75H-1625.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.211-1585.59H-1625.551" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1597.109-1589.941H-1624.019V-1590.089H-1597.109Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1595.609-1589.52H-1597.109V-1590.512H-1595.609Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1624.02-1589.52V-1590.512H-1625.551V-1589.52H-1597.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1624.02-1590.512H-1597.109" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1522.711-1589.941H-1549.6211V-1590.089H-1522.711Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1521.211-1589.52H-1522.711V-1590.512H-1521.211Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-1589.52V-1590.512H-1551.148V-1589.52H-1522.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1549.621-1590.512H-1522.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1595.609-1590.512H-1597.109V-1591.532H-1595.609Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1551.148-1591.531V-1590.512H-1549.621V-1591.531H-1595.609" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1551.148-1590.512H-1595.609" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1551.148-1590.898H-1595.6089V-1591.0189H-1551.148Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.422-1742.672V-1742.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.93-1742.91V-1731.48H-1185.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1233.148-1731.48H-1232.672V-1743.66" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1232.672-1743.66H-1233.148V-1742.672" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.93-1731.48H-1187.942V-1741.648H-1185.93Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1230.629-1731.48H-1232.672V-1741.648H-1230.629Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1230.629-1741.648H-1187.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1187.941-1731.48H-1230.629" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1189.469-1735.828H-1229.129V-1735.949H-1189.469Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1187.941-1735.41H-1189.468V-1736.3981H-1187.941Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1229.129-1735.41V-1736.398H-1230.629V-1735.41H-1189.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1229.129-1736.398H-1189.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1028.789-703.922V-702.898H-1029.27V-715.078H-1028.789" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.012-702.898H-1076.52V-703.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.52-715.078H-1076.012V-702.898H-1029.27" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1029.27-704.91H-1031.309V-715.078H-1029.27Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1031.309-704.91H-1076.012V-715.078H-1074V-704.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1031.309-715.078H-1074" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1032.809-710.609H-1072.469V-710.73H-1032.809Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1031.309-710.16H-1032.809V-711.18H-1031.309Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1072.469-710.16H-1074V-711.18H-1072.469Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1032.809-711.18H-1072.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1072.469-710.16H-1032.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1185.422-1742.91H-1185.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-121.77-1834.801-123.629-1831.59-125.398-1834.801H-121.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-566.852V-618.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.371-566.852V-618.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-648.93V-694.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-696.422V-698.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.469-566.852V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.602-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.602-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.699-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.699-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1401.93-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1401.93-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.059-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.059-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.16-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.16-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.289-566.852V-568.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.289-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.25-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.25-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1422-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1422-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1410.719-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1410.719-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1399.469-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1399.469-694.41V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1388.191-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1388.191-694.41V-648.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1376.941-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1376.941-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1365.66-698.461V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1365.66-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1354.41-698.488V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1354.41-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1343.129-698.488V-696.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1343.129-694.441V-648.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-696.422V-698.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.371-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1346.371-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-1649.461V-1603.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1334.219-1601.969V-1599.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.469-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1357.469-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.602-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1368.602-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.699-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1379.699-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1390.828-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1401.93-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1401.93-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.059-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1413.059-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.16-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1424.16-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.289-1731.48V-1729.531" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1435.289-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.25-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1433.25-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1422-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1422-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1410.719-1599.961V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1410.719-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1399.469-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1399.469-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1388.191-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1388.191-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1376.941-1599.93V-1601.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1376.941-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1365.66-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1365.66-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1354.41-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1354.41-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1343.129-1599.93V-1601.941" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1343.129-1603.98V-1649.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1335.238-1601.969V-1599.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-1727.488V-1681.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-1649.461V-1603.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-570.898V-616.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1446.539-648.93V-694.41" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1347.961-618.391H-1335.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-754.949-1156.949H-768.871V-1164.9609H-754.949Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-754.949-1176.031V-1156.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-768.871-1176.031V-1156.949" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1176.016-768.84C1179.852-768.84 1182.961-765.73 1182.961-761.895 1182.961-758.059 1179.852-754.949 1176.016-754.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.898-1158.961H-772.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.148-1161.238H-773.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-772.77-1157.461H-775.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-771.75-1155.93H-776.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-775.172-1157.461V-1159.738" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M775.141 1159.727C775.141 1160.562 774.461 1161.238 773.625 1161.238" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-776.309-1156.441V-1155.93" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M776.281 1156.426C776.281 1156.98 775.828 1157.43 775.273 1157.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-772.891-1158.961V-1157.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-771.75-1156.441V-1155.93" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M772.754 1157.43C772.199 1157.43 771.75 1156.98 771.75 1156.426" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.898-1157.461V-1158.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-748.648-1157.461V-1159.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1156.441V-1155.93" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M748.484 1157.43C747.93 1157.43 747.48 1156.98 747.48 1156.426" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-752.039-1156.441V-1155.93" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M752.039 1156.426C752.039 1156.98 751.59 1157.43 751.035 1157.43" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M750.137 1161.238C749.297 1161.238 748.621 1160.562 748.621 1159.727" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-748.5-1157.461H-751.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1155.93H-752.039" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1166.309V-1199.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-745.23-1167.059V-1198.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1197.75H-742.199V-1202.309" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M742.695 1197.75C743.25 1197.75 743.699 1198.199 743.699 1198.754" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1201.289V-1198.77" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M743.699 1201.273C743.699 1201.828 743.25 1202.281 742.695 1202.281" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1201.172H-745.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1202.309H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1198.891H-745.23" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M747.48 1199.625C747.48 1200.461 746.801 1201.141 745.965 1201.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1164.781H-745.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1167.059H-745.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1163.641H-742.199" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M742.695 1163.641C743.25 1163.641 743.699 1164.09 743.699 1164.645" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1168.199H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1164.66V-1167.18" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M743.699 1167.164C743.699 1167.719 743.25 1168.172 742.695 1168.172" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-1163.641V-1168.199" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M745.965 1164.781C746.801 1164.781 747.48 1165.457 747.48 1166.297" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1192.738-811.738-1194.422-811.59-1196.102-811.289-1197.75-810.871-1199.371-810.328-1200.988-809.699-1202.551-808.949-1204.051-808.109-1205.52-807.148-1206.898-806.102-1208.219-804.961-1209.449-803.762-1210.621-802.441-1211.699-801.059-1212.66-799.648-1213.531-798.148-1214.309-796.59-1214.969-795-1215.539-793.379-1215.988-791.73-1216.289-790.051-1216.5-788.371-1216.59-786.691-1216.559-785.012-1216.41-783.328-1216.141-781.711-1215.781-780.09-1215.27-778.531-1214.672-777-1213.949-775.531-1213.109-774.121-1212.18-772.77-1211.16-771.512-1210.051-770.34-1208.852-769.262-1207.559-768.238-1206.211-767.34-1204.801-766.559-1203.301-765.84-1201.77-765.27-1200.18-764.789-1198.559-764.461-1196.91-764.219-1195.262-764.102-1193.578V-1191.898L-764.219-1190.219-764.461-1188.539-764.789-1186.891-765.27-1185.27-765.84-1183.711-766.559-1182.148-767.34-1180.68-768.238-1179.238-769.262-1177.891-770.34-1176.629-771.512-1175.43-772.77-1174.289-774.121-1173.27-775.531-1172.34-777-1171.531-778.531-1170.809-780.09-1170.18-781.711-1169.699-783.328-1169.309-785.012-1169.039-786.691-1168.891-788.371-1168.859-790.051-1168.949-791.73-1169.16-793.379-1169.488-795-1169.941-796.59-1170.48-798.148-1171.141-799.648-1171.922-801.059-1172.789-802.441-1173.781-803.762-1174.859-804.961-1176-806.102-1177.262-807.148-1178.578-808.109-1179.961-808.949-1181.398-809.699-1182.93-810.328-1184.488-810.871-1186.078-811.289-1187.73-811.59-1189.379-811.738-1191.059-811.801-1192.738" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-825.961-1156.949H-839.879V-1164.9609H-825.961Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-825.961-1176.031V-1156.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-839.879-1176.031V-1156.949" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1176.016-839.852C1179.852-839.852 1182.961-836.742 1182.961-832.906 1182.961-829.07 1179.852-825.961 1176.016-825.961" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-754.949-1133.699H-768.871V-1141.7109H-754.949Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-754.949-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-768.871-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-754.949C1118.809-754.949 1115.699-758.059 1115.699-761.895 1115.699-765.73 1118.809-768.84 1122.645-768.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.898-1139.699H-772.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.148-1137.422H-773.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-772.77-1141.199H-775.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-771.75-1142.73H-776.309" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-775.172-1141.199V-1138.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-773.625-1137.422C-774.461-1137.422-775.141-1138.098-775.141-1138.934" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-776.309-1142.219V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-775.273-1141.199C-775.828-1141.199-776.281-1141.648-776.281-1142.203" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-772.891-1139.699V-1141.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-771.75-1142.219V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-771.75-1142.203C-771.75-1141.648-772.199-1141.199-772.754-1141.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-750.898-1141.199V-1139.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-748.648-1141.199V-1138.949" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1142.219V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.48-1142.203C-747.48-1141.648-747.93-1141.199-748.484-1141.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-752.039-1142.219V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-751.035-1141.199C-751.59-1141.199-752.039-1141.648-752.039-1142.203" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-748.621-1138.934C-748.621-1138.098-749.297-1137.422-750.137-1137.422" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-748.5-1141.199H-751.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1142.73H-752.039" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.512-1132.352V-1099.02" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-745.23-1131.602V-1099.77" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1100.91H-742.199V-1096.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1099.875C-743.699-1100.43-743.25-1100.879-742.695-1100.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1097.371V-1099.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.695-1096.352C-743.25-1096.352-743.699-1096.801-743.699-1097.355" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1097.488H-745.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1096.352H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1099.77H-745.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-745.965-1097.488C-746.801-1097.488-747.48-1098.168-747.48-1099.004" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1133.879H-745.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1131.602H-745.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1135.02H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1133.984C-743.699-1134.539-743.25-1134.988-742.695-1134.988" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.711-1130.461H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-743.699-1134V-1131.48" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.695-1130.461C-743.25-1130.461-743.699-1130.91-743.699-1131.465" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-1135.02V-1130.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-747.48-1132.336C-747.48-1133.172-746.801-1133.852-745.965-1133.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1105.922-811.738-1104.238-811.59-1102.559-811.289-1100.91-810.871-1099.289-810.328-1097.672-809.699-1096.109-808.949-1094.609-808.109-1093.172-807.148-1091.762-806.102-1090.441-804.961-1089.211-803.762-1088.039-802.441-1086.988-801.059-1086-799.648-1085.129-798.148-1084.352-796.59-1083.691-795-1083.121-793.379-1082.699-791.73-1082.371-790.051-1082.16-788.371-1082.07-786.691-1082.102-785.012-1082.25-783.328-1082.52-781.711-1082.91-780.09-1083.391-778.531-1083.988-777-1084.711-775.531-1085.551-774.121-1086.48-772.77-1087.5-771.512-1088.609-770.34-1089.809-769.262-1091.102-768.238-1092.449-767.34-1093.891-766.559-1095.359-765.84-1096.891-765.27-1098.48-764.789-1100.102-764.461-1101.75-764.219-1103.398-764.102-1105.078V-1106.789L-764.219-1108.469-764.461-1110.121-764.789-1111.77-765.27-1113.391-765.84-1114.98-766.559-1116.512-767.34-1117.98-768.238-1119.422-769.262-1120.77-770.34-1122.059-771.512-1123.262-772.77-1124.371-774.121-1125.391-775.531-1126.32-777-1127.129-778.531-1127.852-780.09-1128.48-781.711-1128.961-783.328-1129.352-785.012-1129.621-786.691-1129.77-788.371-1129.801-790.051-1129.711-791.73-1129.5-793.379-1129.172-795-1128.719-796.59-1128.18-798.148-1127.52-799.648-1126.738-801.059-1125.871-802.441-1124.879-803.762-1123.828-804.961-1122.66-806.102-1121.43-807.148-1120.109-808.109-1118.699-808.949-1117.262-809.699-1115.73-810.328-1114.172-810.871-1112.578-811.289-1110.961-811.59-1109.281-811.738-1107.629-811.801-1105.922" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-825.961-1133.699H-839.879V-1141.7109H-825.961Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-825.961-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-839.879-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-825.961C1118.809-825.961 1115.699-829.07 1115.699-832.906 1115.699-836.742 1118.809-839.852 1122.645-839.852" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-863.34-1133.699H-877.262V-1141.7109H-863.34Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-863.34-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-877.262-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-863.34C1118.809-863.34 1115.699-866.449 1115.699-870.285 1115.699-874.121 1118.809-877.23 1122.645-877.23" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-900.75-1133.699H-914.672V-1141.7109H-900.75Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-900.75-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-914.672-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-900.75C1118.809-900.75 1115.699-903.859 1115.699-907.695 1115.699-911.531 1118.809-914.641 1122.645-914.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-938.129-1133.699H-952.051V-1141.7109H-938.129Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-938.129-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-952.051-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-938.129C1118.809-938.129 1115.699-941.238 1115.699-945.074 1115.699-948.91 1118.809-952.02 1122.645-952.02" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-975.539-1133.699H-989.461V-1141.7109H-975.539Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-975.539-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-989.461-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-975.539C1118.809-975.539 1115.699-978.648 1115.699-982.484 1115.699-986.32 1118.809-989.43 1122.645-989.43" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1012.922-1133.699H-1026.84V-1141.7109H-1012.922Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1012.922-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1026.84-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-1012.922C1118.809-1012.922 1115.699-1016.031 1115.699-1019.863 1115.699-1023.699 1118.809-1026.809 1122.645-1026.809" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1050.328-1133.699H-1064.25V-1141.7109H-1050.328Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1050.328-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1064.25-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-1050.328C1118.809-1050.328 1115.699-1053.438 1115.699-1057.273 1115.699-1061.109 1118.809-1064.219 1122.645-1064.219" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1087.711-1133.699H-1101.629V-1141.7109H-1087.711Z" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1087.711-1122.66V-1141.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1101.629-1122.66V-1141.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1122.645-1087.711C1118.809-1087.711 1115.699-1090.82 1115.699-1094.656 1115.699-1098.492 1118.809-1101.602 1122.645-1101.602" />
                <path transform="matrix(0,-1,-1,0,0,0)" d="M-1367.578-593.641-1376.672-595.141V-592.109ZM-1367.578-593.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-1367.578-593.641-1376.672-595.141V-592.109ZM-1367.578-593.641" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1472.941-593.641V-671.699H-1328.16" />
                <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29257" font-family="ArialMT"><tspan y="1325.79" x="667.62">H</tspan></text>
                <path transform="matrix(0,-1,-1,0,0,0)" d="M-1334.25-1626.719-1343.34-1628.219V-1625.191ZM-1334.25-1626.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".03" stroke-linecap="square" stroke-miterlimit="10" stroke-linejoin="miter" fill="none" stroke="#000000" d="M-1334.25-1626.719-1343.34-1628.219V-1625.191ZM-1334.25-1626.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1328.16-1704.75H-1472.941V-1626.719" />
                <text xml:space="preserve" transform="matrix(1 0 0 1 0 0)" font-size="11.29257" font-family="ArialMT"><tspan y="1325.79" x="1700.97">B</tspan></text>
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1167.449-975.645C1167.449-975.207 1167.094-974.852 1166.656-974.852 1166.215-974.852 1165.859-975.207 1165.859-975.645 1165.859-976.086 1166.215-976.441 1166.656-976.441 1167.094-976.441 1167.449-976.086 1167.449-975.645" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1167.422-970.605C1167.422-970.184 1167.078-969.84 1166.656-969.84 1166.234-969.84 1165.891-970.184 1165.891-970.605 1165.891-971.027 1166.234-971.371 1166.656-971.371 1167.078-971.371 1167.422-971.027 1167.422-970.605" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1176.27-984.695C1176.766-983.082 1177.09-981.418 1177.234-979.734" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1174.473-986.992C1175.32-986.469 1175.945-985.66 1176.238-984.711" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1158.824-986.984C1163.84-989.043 1169.469-989.043 1174.484-986.984" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1157.07-984.711C1157.363-985.66 1157.992-986.469 1158.836-986.992" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1156.074-979.734C1156.219-981.418 1156.543-983.082 1157.039-984.695" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1155.93-975.645C1155.93-977.012 1155.988-978.379 1156.105-979.742" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-975.66-1155.93H-967.828V-1177.41H-975.66" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1177.234-979.742C1177.352-978.379 1177.41-977.012 1177.41-975.645" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1175.164-976.613C1174.539-976.039 1173.875-975.508 1173.172-975.031" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1173.152-975.016C1169.23-972.355 1164.078-972.355 1160.156-975.02" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1160.168-975.031C1159.465-975.508 1158.801-976.039 1158.172-976.613" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1158.156-976.605C1158.176-977.82 1158.25-979.031 1158.375-980.234" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1158.371-980.227C1158.504-981.496 1158.77-982.75 1159.164-983.965" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.18-983.961C1159.309-984.348 1159.547-984.691 1159.867-984.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.863-984.938C1164.215-986.727 1169.098-986.727 1173.449-984.938" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1173.441-984.945C1173.762-984.691 1174.004-984.352 1174.129-983.961" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1174.145-983.969C1174.539-982.754 1174.805-981.5 1174.941-980.23" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1174.934-980.215C1175.062-979.008 1175.137-977.793 1175.156-976.582" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1173.117-980.359C1173.258-979.082 1173.328-977.801 1173.328-976.516" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-975.148-1173.359H-976.531" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1172.402-983.441C1172.77-982.445 1173.012-981.406 1173.129-980.352" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1160.906-983.441C1164.605-984.867 1168.703-984.867 1172.402-983.441" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1160.211-980.348C1160.328-981.402 1160.57-982.438 1160.934-983.43" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.98-976.516C1159.98-977.801 1160.051-979.082 1160.191-980.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-976.531-1159.98H-975.148" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-983.43-1160.91-983.609-1160.762-983.789-1160.609-984.18-1160.371-984.961-1159.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-983.43-1172.43-984.18-1172.969-984.961-1173.449" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1175.16-971.715C1175.16-970.266 1174.066-969.051 1172.625-968.895" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1172.621-968.906C1168.664-968.352 1164.648-968.352 1160.688-968.906" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1160.688-968.895C1159.262-969.047 1158.18-970.25 1158.18-971.684" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1175.168-976.598C1175.195-974.973 1175.195-973.352 1175.172-971.727" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1158.137-971.727C1158.113-973.352 1158.113-974.973 1158.141-976.598" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1169.43-970.605C1169.43-970.184 1169.086-969.84 1168.664-969.84 1168.242-969.84 1167.898-970.184 1167.898-970.605 1167.898-971.027 1168.242-971.371 1168.664-971.371 1169.086-971.371 1169.43-971.027 1169.43-970.605" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1165.41-970.605C1165.41-970.184 1165.066-969.84 1164.645-969.84 1164.223-969.84 1163.879-970.184 1163.879-970.605 1163.879-971.027 1164.223-971.371 1164.645-971.371 1165.066-971.371 1165.41-971.027 1165.41-970.605" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-1217.609H-766.469V-1216.59H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1217.609H-798.301V-1216.59H-811.801" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1216.59H-820.77V-1217.609H-813.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1155.93H-814.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1216.59H-845.039V-1217.609H-852.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1155.93H-852.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1217.609V-1216.59" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1217.609H-813.719V-1216.59H-811.801" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-742.199-1081.078H-766.469V-1082.07H-742.199" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1081.078H-798.301V-1082.07H-811.801" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1082.07H-820.77V-1081.078H-813.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1142.73H-814.711" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1082.07H-845.039V-1081.078H-852.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1142.73H-852.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-811.801-1081.078H-813.719V-1082.07H-811.801" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1082.07H-858.18V-1081.078H-851.129" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1142.73H-852.121" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-889.5-1082.07H-882.449V-1081.078H-889.5" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1142.73H-889.5" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-889.5-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1082.07H-895.559V-1081.078H-888.512" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1142.73H-889.5" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.91-1082.07H-919.828V-1081.078H-926.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1142.73H-926.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.91-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1082.07H-932.969V-1081.078H-925.891" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1142.73H-926.91" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.289-1082.07H-957.238V-1081.078H-964.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1142.73H-964.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.289-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1082.07H-970.352V-1081.078H-963.301" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1142.73H-964.289" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1001.699-1082.07H-994.621V-1081.078H-1001.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1142.73H-1001.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1001.699-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1082.07H-1007.762V-1081.078H-1000.68" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1142.73H-1001.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1039.078-1082.07H-1032.031V-1081.078H-1039.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1038.09-1142.73H-1039.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1039.078-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1038.09-1082.07H-1045.141V-1081.078H-1038.09" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1038.09-1142.73H-1039.078" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.461-1082.07H-1069.41V-1081.078H-1076.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1142.73H-1076.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.461-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1038.09-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1082.07H-1082.551V-1081.078H-1075.469" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1142.73H-1076.461" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1113.871-1082.07H-1106.82V-1081.078H-1113.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1112.879-1142.73H-1113.871" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1113.871-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1081.078V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-766.801-1216.648-796.711-1227.539-796.379-1228.469-766.469-1217.609-766.801-1216.648" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M798.27 1217.594C798.27 1221.305 797.621 1224.988 796.352 1228.477" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-821.488-1217.309-838.648-1200.148-837.93-1199.43-820.77-1216.59-821.488-1217.309" />
                <path transform="matrix(0,1,1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M837.906 1199.426C842.453 1203.973 845.012 1210.141 845.012 1216.574" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-766.801-1082.012-796.711-1071.121-796.379-1070.191-766.469-1081.078-766.801-1082.012" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-796.352-1070.184C-797.621-1073.672-798.27-1077.355-798.27-1081.066" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-821.488-1081.352-838.648-1098.512-837.93-1099.23-820.77-1082.07-821.488-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-845.012-1082.055C-845.012-1088.488-842.453-1094.656-837.906-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-858.871-1081.352-876.031-1098.512-875.34-1099.23-858.18-1082.07-858.871-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-882.422-1082.055C-882.422-1088.488-879.863-1094.656-875.316-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-896.281-1081.352-913.441-1098.512-912.719-1099.23-895.559-1082.07-896.281-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-919.801-1082.055C-919.801-1088.488-917.246-1094.656-912.695-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-933.66-1081.352-950.82-1098.512-950.129-1099.23-932.969-1082.07-933.66-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-957.211-1082.055C-957.211-1088.488-954.656-1094.656-950.105-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-971.07-1081.352-988.23-1098.512-987.512-1099.23-970.352-1082.07-971.07-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-994.59-1082.055C-994.59-1088.488-992.035-1094.656-987.484-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1008.449-1081.352-1025.609-1098.512-1024.922-1099.23-1007.762-1082.07-1008.449-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1032-1082.055C-1032-1088.488-1029.445-1094.656-1024.895-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1045.859-1081.352-1063.02-1098.512-1062.301-1099.23-1045.141-1082.07-1045.859-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1069.379-1082.055C-1069.379-1088.488-1066.824-1094.656-1062.277-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1083.238-1081.352-1100.398-1098.512-1099.711-1099.23-1082.551-1082.07-1083.238-1081.352" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1106.789-1082.055C-1106.789-1088.488-1104.234-1094.656-1099.688-1099.207" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-814.711-1155.93V-1216.59" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1155.93V-1216.59" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1216.59V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1216.59V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-814.711-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-813.719-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-852.121-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-851.129-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-889.5-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-889.5-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-888.512-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.91-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-926.91-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-925.891-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.289-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.289-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-963.301-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1001.699-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1001.699-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1038.09-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.68-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1039.078-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1039.078-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1142.73V-1082.07" />
                <path stroke-width=".696667" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1082.047 1038.09H1138.84" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.461-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1076.461-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1112.879-1142.73V-1082.07" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1075.469-1082.07V-1142.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".72" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1113.871-1082.07V-1142.73" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.945-874.84C1162.07-873.562 1163.371-871.266 1163.371-868.785 1163.371-866.305 1162.07-864.008 1159.945-862.73" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-862.738-1159.98H-861.719V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-875.879-1155.93V-1159.98H-874.859" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-874.859-1159.98V-1155.93-1157.789H-862.738V-1155.93-1159.98" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.945-909.461C1162.07-908.184 1163.371-905.887 1163.371-903.406 1163.371-900.926 1162.07-898.625 1159.945-897.348" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-909.48-1159.98H-910.5V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-896.309-1155.93V-1159.98H-897.359" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-897.359-1159.98V-1155.93-1157.789H-909.48V-1155.93-1159.98" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1159.945-944.082C1162.07-942.805 1163.371-940.504 1163.371-938.023 1163.371-935.547 1162.07-933.246 1159.945-931.969" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-944.102-1159.98H-945.121V-1155.93" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-930.961-1155.93V-1159.98H-931.98" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-931.98-1159.98V-1155.93-1157.789H-944.102V-1155.93-1159.98" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.742-811.809C1274.695-811.004 1271.469-812.188 1269.664-814.773 1267.859-817.355 1267.859-820.793 1269.664-823.379 1271.469-825.961 1274.695-827.145 1277.742-826.34" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1280.641-814.746C1280.289-813.312 1279.18-812.191 1277.754-811.812" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.754-826.336C1279.18-825.961 1280.289-824.836 1280.641-823.402" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.863-818.699C1277.656-818.699 1277.488-818.867 1277.488-819.074 1277.488-819.281 1277.656-819.449 1277.863-819.449" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-818.699-1282.289V-1277.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-819.48-1282.289V-1277.879" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-818.25C1275.371-818.25 1275-818.621 1275-819.074 1275-819.531 1275.371-819.898 1275.824-819.898" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-819.898C1276.281-819.898 1276.648-819.531 1276.648-819.074 1276.648-818.621 1276.281-818.25 1275.824-818.25" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-809.488C1270.531-809.488 1266.238-813.781 1266.238-819.074 1266.238-824.367 1270.531-828.66 1275.824-828.66" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-828.66C1281.117-828.66 1285.41-824.367 1285.41-819.074 1285.41-813.781 1281.117-809.488 1275.824-809.488" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.742-848.141C1274.695-847.336 1271.469-848.52 1269.664-851.102 1267.859-853.688 1267.859-857.125 1269.664-859.707 1271.469-862.293 1274.695-863.477 1277.742-862.672" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1280.641-851.105C1280.289-849.676 1279.18-848.551 1277.754-848.172" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.754-862.668C1279.18-862.289 1280.289-861.164 1280.641-859.734" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.863-855.031C1277.656-855.031 1277.488-855.199 1277.488-855.406 1277.488-855.613 1277.656-855.781 1277.863-855.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-855.059-1282.289V-1277.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-855.809-1282.289V-1277.879" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-854.578C1275.371-854.578 1275-854.949 1275-855.406 1275-855.859 1275.371-856.23 1275.824-856.23" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-856.23C1276.281-856.23 1276.648-855.859 1276.648-855.406 1276.648-854.949 1276.281-854.578 1275.824-854.578" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-845.82C1270.531-845.82 1266.238-850.113 1266.238-855.406 1266.238-860.699 1270.531-864.988 1275.824-864.988" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-864.988C1281.117-864.988 1285.41-860.699 1285.41-855.406 1285.41-850.113 1281.117-845.82 1275.824-845.82" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.742-884.5C1274.695-883.695 1271.469-884.879 1269.664-887.461 1267.859-890.047 1267.859-893.484 1269.664-896.066 1271.469-898.652 1274.695-899.836 1277.742-899.031" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1280.641-887.438C1280.289-886.004 1279.18-884.879 1277.754-884.504" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.754-898.996C1279.18-898.621 1280.289-897.496 1280.641-896.062" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1277.863-891.391C1277.656-891.391 1277.488-891.559 1277.488-891.766 1277.488-891.973 1277.656-892.141 1277.863-892.141" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-891.391-1282.289V-1277.879" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-892.141-1282.289V-1277.879" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-890.941C1275.371-890.941 1275-891.309 1275-891.766 1275-892.219 1275.371-892.59 1275.824-892.59" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-892.59C1276.281-892.59 1276.648-892.219 1276.648-891.766 1276.648-891.309 1276.281-890.941 1275.824-890.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-882.18C1270.531-882.18 1266.238-886.473 1266.238-891.766 1266.238-897.059 1270.531-901.352 1275.824-901.352" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1275.824-901.352C1281.117-901.352 1285.41-897.059 1285.41-891.766 1285.41-886.473 1281.117-882.18 1275.824-882.18" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".27" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-802.441-1288.648V-1263.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".27" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-908.43-1288.648V-1263.391H-802.441" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-826.34C1023.934-827.145 1027.16-825.961 1028.965-823.379 1030.77-820.793 1030.77-817.355 1028.965-814.773 1027.16-812.188 1023.934-811.004 1020.887-811.809" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-811.812C1019.449-812.191 1018.344-813.312 1017.988-814.746" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-814.754C1017.305-817.594 1017.305-820.559 1018.008-823.395" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-823.402C1018.344-824.836 1019.449-825.961 1020.875-826.336" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-819.449C1020.973-819.449 1021.141-819.281 1021.141-819.074 1021.141-818.867 1020.973-818.699 1020.766-818.699" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-818.699-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-819.48-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-821.578C1016.629-821.578 1016.852-821.359 1016.852-821.086 1016.852-820.812 1016.629-820.59 1016.355-820.59" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-820.59C1016.082-820.59 1015.859-820.812 1015.859-821.086 1015.859-821.359 1016.082-821.578 1016.355-821.578" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-818.699C1016.148-818.699 1015.98-818.867 1015.98-819.074 1015.98-819.281 1016.148-819.449 1016.355-819.449" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-817.559C1016.629-817.559 1016.852-817.34 1016.852-817.066 1016.852-816.793 1016.629-816.57 1016.355-816.57" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-816.57C1016.082-816.57 1015.859-816.793 1015.859-817.066 1015.859-817.34 1016.082-817.559 1016.355-817.559" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-819.898C1023.262-819.898 1023.629-819.531 1023.629-819.074 1023.629-818.621 1023.262-818.25 1022.805-818.25" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-818.25C1022.348-818.25 1021.98-818.621 1021.98-819.074 1021.98-819.531 1022.348-819.898 1022.805-819.898" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-828.66C1028.098-828.66 1032.391-824.367 1032.391-819.074 1032.391-813.781 1028.098-809.488 1022.805-809.488" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-809.488C1017.512-809.488 1013.219-813.781 1013.219-819.074 1013.219-824.367 1017.512-828.66 1022.805-828.66" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-862.672C1023.934-863.477 1027.16-862.293 1028.965-859.707 1030.77-857.125 1030.77-853.688 1028.965-851.102 1027.16-848.52 1023.934-847.336 1020.887-848.141" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-848.172C1019.449-848.551 1018.344-849.676 1017.988-851.105" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-851.086C1017.305-853.922 1017.305-856.887 1018.008-859.727" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-859.734C1018.344-861.164 1019.449-862.289 1020.875-862.668" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-855.781C1020.973-855.781 1021.141-855.613 1021.141-855.406 1021.141-855.199 1020.973-855.031 1020.766-855.031" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-855.059-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-855.809-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-857.941C1016.629-857.941 1016.852-857.719 1016.852-857.445 1016.852-857.172 1016.629-856.949 1016.355-856.949" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-856.949C1016.082-856.949 1015.859-857.172 1015.859-857.445 1015.859-857.719 1016.082-857.941 1016.355-857.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-855.031C1016.148-855.031 1015.98-855.199 1015.98-855.406 1015.98-855.613 1016.148-855.781 1016.355-855.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-853.891C1016.629-853.891 1016.852-853.668 1016.852-853.395 1016.852-853.121 1016.629-852.898 1016.355-852.898" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-852.898C1016.082-852.898 1015.859-853.121 1015.859-853.395 1015.859-853.668 1016.082-853.891 1016.355-853.891" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-856.23C1023.262-856.23 1023.629-855.859 1023.629-855.406 1023.629-854.949 1023.262-854.578 1022.805-854.578" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-854.578C1022.348-854.578 1021.98-854.949 1021.98-855.406 1021.98-855.859 1022.348-856.23 1022.805-856.23" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-864.988C1028.098-864.988 1032.391-860.699 1032.391-855.406 1032.391-850.113 1028.098-845.82 1022.805-845.82" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-845.82C1017.512-845.82 1013.219-850.113 1013.219-855.406 1013.219-860.699 1017.512-864.988 1022.805-864.988" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-899.031C1023.934-899.836 1027.16-898.652 1028.965-896.066 1030.77-893.484 1030.77-890.047 1028.965-887.461 1027.16-884.879 1023.934-883.695 1020.887-884.5" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-884.504C1019.449-884.879 1018.344-886.004 1017.988-887.438" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-887.445C1017.305-890.281 1017.305-893.246 1018.008-896.086" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-896.062C1018.344-897.496 1019.449-898.621 1020.875-898.996" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-892.141C1020.973-892.141 1021.141-891.973 1021.141-891.766 1021.141-891.559 1020.973-891.391 1020.766-891.391" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-891.391-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-892.141-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-894.27C1016.629-894.27 1016.852-894.047 1016.852-893.773 1016.852-893.5 1016.629-893.281 1016.355-893.281" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-893.281C1016.082-893.281 1015.859-893.5 1015.859-893.773 1015.859-894.047 1016.082-894.27 1016.355-894.27" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-891.391C1016.148-891.391 1015.98-891.559 1015.98-891.766 1015.98-891.973 1016.148-892.141 1016.355-892.141" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-890.219C1016.629-890.219 1016.852-890 1016.852-889.727 1016.852-889.453 1016.629-889.23 1016.355-889.23" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-889.23C1016.082-889.23 1015.859-889.453 1015.859-889.727 1015.859-890 1016.082-890.219 1016.355-890.219" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-892.59C1023.262-892.59 1023.629-892.219 1023.629-891.766 1023.629-891.309 1023.262-890.941 1022.805-890.941" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-890.941C1022.348-890.941 1021.98-891.309 1021.98-891.766 1021.98-892.219 1022.348-892.59 1022.805-892.59" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-901.352C1028.098-901.352 1032.391-897.059 1032.391-891.766 1032.391-886.473 1028.098-882.18 1022.805-882.18" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-882.18C1017.512-882.18 1013.219-886.473 1013.219-891.766 1013.219-897.059 1017.512-901.352 1022.805-901.352" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-935.359C1023.934-936.164 1027.16-934.98 1028.965-932.398 1030.77-929.812 1030.77-926.375 1028.965-923.793 1027.16-921.207 1023.934-920.023 1020.887-920.828" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-920.832C1019.449-921.211 1018.344-922.336 1017.988-923.766" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-923.773C1017.305-926.613 1017.305-929.578 1018.008-932.414" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-932.426C1018.344-933.855 1019.449-934.98 1020.875-935.355" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-928.469C1020.973-928.469 1021.141-928.301 1021.141-928.094 1021.141-927.887 1020.973-927.719 1020.766-927.719" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-927.719-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-928.5-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-930.602C1016.629-930.602 1016.852-930.379 1016.852-930.105 1016.852-929.832 1016.629-929.609 1016.355-929.609" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-929.609C1016.082-929.609 1015.859-929.832 1015.859-930.105 1015.859-930.379 1016.082-930.602 1016.355-930.602" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-927.719C1016.148-927.719 1015.98-927.887 1015.98-928.094 1015.98-928.301 1016.148-928.469 1016.355-928.469" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-926.578C1016.629-926.578 1016.852-926.359 1016.852-926.086 1016.852-925.812 1016.629-925.59 1016.355-925.59" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-925.59C1016.082-925.59 1015.859-925.812 1015.859-926.086 1015.859-926.359 1016.082-926.578 1016.355-926.578" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-928.922C1023.262-928.922 1023.629-928.551 1023.629-928.094 1023.629-927.641 1023.262-927.27 1022.805-927.27" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-927.27C1022.348-927.27 1021.98-927.641 1021.98-928.094 1021.98-928.551 1022.348-928.922 1022.805-928.922" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-937.68C1028.098-937.68 1032.391-933.387 1032.391-928.094 1032.391-922.801 1028.098-918.512 1022.805-918.512" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-918.512C1017.512-918.512 1013.219-922.801 1013.219-928.094 1013.219-933.387 1017.512-937.68 1022.805-937.68" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-971.691C1023.934-972.496 1027.16-971.312 1028.965-968.727 1030.77-966.145 1030.77-962.707 1028.965-960.121 1027.16-957.539 1023.934-956.355 1020.887-957.16" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-957.164C1019.449-957.539 1018.344-958.664 1017.988-960.098" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-960.105C1017.305-962.941 1017.305-965.906 1018.008-968.746" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-968.754C1018.344-970.188 1019.449-971.309 1020.875-971.688" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-964.801C1020.973-964.801 1021.141-964.633 1021.141-964.426 1021.141-964.219 1020.973-964.051 1020.766-964.051" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.078-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-964.828-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-966.961C1016.629-966.961 1016.852-966.738 1016.852-966.465 1016.852-966.191 1016.629-965.969 1016.355-965.969" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-965.969C1016.082-965.969 1015.859-966.191 1015.859-966.465 1015.859-966.738 1016.082-966.961 1016.355-966.961" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-964.051C1016.148-964.051 1015.98-964.219 1015.98-964.426 1015.98-964.633 1016.148-964.801 1016.355-964.801" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-962.91C1016.629-962.91 1016.852-962.688 1016.852-962.414 1016.852-962.141 1016.629-961.922 1016.355-961.922" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-961.922C1016.082-961.922 1015.859-962.141 1015.859-962.414 1015.859-962.688 1016.082-962.91 1016.355-962.91" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-965.25C1023.262-965.25 1023.629-964.879 1023.629-964.426 1023.629-963.969 1023.262-963.602 1022.805-963.602" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-963.602C1022.348-963.602 1021.98-963.969 1021.98-964.426 1021.98-964.879 1022.348-965.25 1022.805-965.25" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-974.012C1028.098-974.012 1032.391-969.719 1032.391-964.426 1032.391-959.133 1028.098-954.84 1022.805-954.84" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-954.84C1017.512-954.84 1013.219-959.133 1013.219-964.426 1013.219-969.719 1017.512-974.012 1022.805-974.012" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.887-1008.02C1023.934-1008.824 1027.16-1007.641 1028.965-1005.059 1030.77-1002.473 1030.77-999.035 1028.965-996.453 1027.16-993.867 1023.934-992.684 1020.887-993.488" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.875-993.523C1019.449-993.898 1018.344-995.023 1017.988-996.457" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1018.008-996.434C1017.305-999.273 1017.305-1002.238 1018.008-1005.074" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1017.988-1005.086C1018.344-1006.516 1019.449-1007.641 1020.875-1008.016" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1020.766-1001.129C1020.973-1001.129 1021.141-1000.961 1021.141-1000.754 1021.141-1000.547 1020.973-1000.379 1020.766-1000.379" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1000.41-1016.371V-1020.781" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-1001.16-1016.371V-1020.781" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-1003.289C1016.629-1003.289 1016.852-1003.07 1016.852-1002.797 1016.852-1002.523 1016.629-1002.301 1016.355-1002.301" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-1002.301C1016.082-1002.301 1015.859-1002.523 1015.859-1002.797 1015.859-1003.07 1016.082-1003.289 1016.355-1003.289" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-1000.379C1016.148-1000.379 1015.98-1000.547 1015.98-1000.754 1015.98-1000.961 1016.148-1001.129 1016.355-1001.129" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-999.238C1016.629-999.238 1016.852-999.02 1016.852-998.746 1016.852-998.473 1016.629-998.25 1016.355-998.25" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1016.355-998.25C1016.082-998.25 1015.859-998.473 1015.859-998.746 1015.859-999.02 1016.082-999.238 1016.355-999.238" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-1001.578C1023.262-1001.578 1023.629-1001.211 1023.629-1000.754 1023.629-1000.301 1023.262-999.93 1022.805-999.93" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-999.93C1022.348-999.93 1021.98-1000.301 1021.98-1000.754 1021.98-1001.211 1022.348-1001.578 1022.805-1001.578" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-1010.34C1028.098-1010.34 1032.391-1006.047 1032.391-1000.754 1032.391-995.461 1028.098-991.172 1022.805-991.172" />
                <path transform="matrix(1,0,0,-1,0,0)" stroke-width=".42" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M1022.805-991.172C1017.512-991.172 1013.219-995.461 1013.219-1000.754 1013.219-1006.047 1017.512-1010.34 1022.805-1010.34" />
                <path transform="matrix(0,-1,-1,0,0,0)" stroke-width=".27" stroke-linecap="square" stroke-linejoin="round" fill="none" stroke="#000000" d="M-802.441-1010.012V-1035.27H-1018.141V-1010.012" />
              </g>
              <g clip-path="url(#clip_344)">
                <path d="M708.035 1240.234H1002.22598V1642.429H708.035Z" fill-opacity=".0120967" id="L2752" class="salle" fill="lightblue" />
                <path d="M703.895 731.164H998.08609V1133.355H703.895Z" fill-opacity=".0120967" id="L2750" class="salle" fill="lightblue" />
                <path d="M1005.289 1240.488H1299.48V1642.6831H1005.289Z" fill-opacity=".0120967" id="L2756" class="salle" fill="lightblue" />
                <path d="M1296.258 1240.367H1590.4491V1642.562H1296.258Z" fill-opacity=".0120967" id="L2760" class="salle" fill="lightblue" />

                <path d="M1148.273 731.219H1290.9879V1133.4141H1148.273Z" fill-opacity=".0120967" id="T1" class="toilet" />
                <path d="M1002.891 731.25H1145.606V1133.4451H1002.891Z" fill-opacity=".0120967" id="T2" class="toilet" />

                <path d="M699.309 1130.145H1594.993V1239.68H699.309Z" fill-opacity=".0120967" id="C-L-2-1" class="corridor" />

                <path d="M1590.168 1122.703H1744.648V1524.898H1590.168Z" fill-opacity=".0120967" id="E-L-2-1" class="escalier" />
                <path d="M558.125 1122.84H712.605V1525.031H558.125Z" fill-opacity=".0120967" id="E-L-2-2" class="escalier" />

                <path d="M1294.078 1043.355H1367.676V1138.183H1294.078Z" fill-opacity=".0120967" />
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
            zIndex: 10,
          }}
        >
          <strong>Classe : </strong> {infoBox.id}
          <br />
          <button onClick={() => setInfoBox({ ...infoBox, visible: false })}>
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
