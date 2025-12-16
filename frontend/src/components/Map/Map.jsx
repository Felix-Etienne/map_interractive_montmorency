import "./Map.css";
import Premier from "./svgFiles/bloc-L/premier.jsx";
import Deuxieme from "./svgFiles/bloc-L/deuxieme.jsx";
import { useState, useEffect } from 'react';
import exportSVGToPDF from "./mapToPDF.jsx";

export default function Map() {
    const [level, setLevel] = useState("1");
    const [highlightedPath, setHighlightedPath] = useState([]);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [pathfindingMode, setPathfindingMode] = useState(false);
    const [selectedPath, setSelectedPath] = useState({
        start: null,
        end: null
    });


    const mapGraphique = {
        "L1756": ["C-L-1-2"],
        "L1758": ["C-L-1-2"],
        "L1760": ["C-L-1-2"],
        "L1762": ["C-L-1-2"],
        "L2750": ["C-L-2-1"],
        "L2752": ["C-L-2-1"],
        "L2756": ["C-L-2-1"],
        "L2760": ["C-L-2-1"],
        "L1222": ["C-L-1-1"],
        "T1": ["C-L-2-1"],
        "T2": ["C-L-2-1"],
        "C-L-1-1": ["C-L-1-2", "L1222"],
        "C-L-1-2": ["L1756", "L1758", "L1760", "L1762", "C-L-1-1", "E-L-1-1", "E-L-1-2"],
        "C-L-2-1": ["L2750", "L2752", "L2756", "L2760", "E-L-2-1", "E-L-2-2", "T1", "T2"],
        "E-L-1-1": ["C-L-1-2", "E-L-2-1"],
        "E-L-1-2": ["C-L-1-2", "E-L-2-2"],
        "E-L-2-1": ["E-L-1-1", "C-L-2-1"],
        "E-L-2-2": ["E-L-1-2", "C-L-2-1"],
    };
    const nodePositionsTest = {
        "L1756": { x: 970, y: 1130 },
        "L1758": { x: 740, y: 1250 },
        "L1760": { x: 1035, y: 1250 },
        "L1762": { x: 1330, y: 1250 },

        "L2750": { x: 970, y: 1130 },
        "L2752": { x: 740, y: 1250 },
        "L2756": { x: 1035, y: 1250 },
        "L2760": { x: 1330, y: 1250 },
    };
    const [nodePositions, setNodePositions] = useState({});

    // TESTING PURPOSES -- Set les points de chaque place automatiquement
    useEffect(() => {
        // Wait for the SVG to be rendered
        setTimeout(() => {
            const positions = {};
            document.querySelectorAll(".corridor, .escalier").forEach(el => {
                const id = el.id;
                if (!id) return;
                // getBBox works for SVG elements
                const bbox = el.getBBox();
                positions[id] = {
                    x: bbox.x + bbox.width / 2,
                    y: bbox.y + bbox.height / 2
                };

            });
            document.querySelectorAll(".salle").forEach(el => {
                const id = el.id;
                if (!id) return;
                positions[id] = {
                    x: nodePositionsTest[id]?.x,
                    y: nodePositionsTest[id]?.y
                };

            });
            setNodePositions(positions);
        }, 100);
    }, [level, windowSize]);


    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        function handleClick(e) {
            if (!pathfindingMode) return;

            const el = e.currentTarget;
            if (!selectedPath.start) {
                setSelectedPath(prev => ({ ...prev, start: el.id }));
                el.style.fill = "#4CAF50";
            } else if (!selectedPath.end) {
                setSelectedPath(prev => ({ ...prev, end: el.id }));
                el.style.fill = "#F44336";

                const path = trouverPath(mapGraphique, selectedPath.start, el.id);
                if (path) {
                    setHighlightedPath(path);
                }
            }
        }

        const elements = document.querySelectorAll(".salle, .corridor, .escalier");
        elements.forEach(el => el.addEventListener("click", handleClick));

        return () => {
            elements.forEach(el => el.removeEventListener("click", handleClick));
        };
    }, [pathfindingMode, selectedPath, level]);

    const maps = {
        1: <Premier
            width={windowSize.width * 0.5}
            height={windowSize.height * 0.7}
            highlightedPath={highlightedPath}
            nodePositions={nodePositions}
        />,
        2: <Deuxieme
            width={windowSize.width * 0.5}
            height={windowSize.height * 0.7}
            highlightedPath={highlightedPath}
            nodePositions={nodePositions}
        />,
    };

    function clearCouleurs() {
        document.querySelectorAll(".salle, .corridor, .escalier")
            .forEach(el => {
                el.style.fill = "#82c0ffff";
                el.style.fillOpacity = "";
            });
        setHighlightedPath([]);
    }


    function trouverPath(graph, debut, fin) {
        const queue = [[debut]];
        const visiter = new Set();

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === fin) return path;

            if (!visiter.has(node)) {
                visiter.add(node);

                for (const neighbor of graph[node] || []) {
                    queue.push([...path, neighbor]);
                }
            }
        }
        return null;
    }

    return (
        <>
            <div className="map-container">
                <p>Voici la Map interactive du college Montmorency : </p>
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="1">1er Étage</option>
                    <option value="2">2em Étage</option>
                </select>

                <div className="pathfinding-controls">
                    <button
                        onClick={() => {
                            setPathfindingMode(!pathfindingMode);
                            if (pathfindingMode) {
                                setSelectedPath({ start: null, end: null });
                                clearCouleurs();
                            }
                        }}
                    >
                        {pathfindingMode ? "Annuler Navigation" : "Trouver un chemin"}
                    </button>
                    {pathfindingMode && (
                        <div className="path-info">
                            <p>Départ: {selectedPath.start || "Non sélectionné"}</p>
                            <p>Arrivée: {selectedPath.end || "Non sélectionné"}</p>
                        </div>
                    )}
                </div>
                <div>
                    <button onClick={() => exportSVGToPDF('#map-svg')}>
                        Exporter la map en PDF
                    </button>
                    <div className="map" id="map-svg">{maps[level]}</div>
                </div>
            </div>
        </>
    );

}