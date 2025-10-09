import "./Map.css";
import Premier from "./svgFiles/bloc-L/premier.jsx";
import Deuxieme from "./svgFiles/bloc-L/deuxieme.jsx";
import { useState, useEffect } from 'react';

export default function Map() {
    const [level, setLevel] = useState("1");
    const [startSalle, setStartSalle] = useState(null);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
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
        "T1": ["C-L-2-1"],
        "T2": ["C-L-2-1"],
        "C-L-1-1": ["C-L-1-2"],
        "C-L-1-2": ["L1756", "L1758", "L1760", "L1762", "C-L-1-1", "E-L-1-1", "E-L-1-2"],
        "C-L-2-1": ["L2750", "L2752", "L2756", "L2760", "E-L-2-1", "E-L-2-2", "T1", "T2"],
        "E-L-1-1": ["C-L-1-2", "E-L-2-1"],
        "E-L-1-2": ["C-L-1-2", "E-L-2-2"],
        "E-L-2-1": ["E-L-1-1", "C-L-2-1"],
        "E-L-2-2": ["E-L-1-2", "C-L-2-1"],
    };

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

        document.querySelectorAll(".salle, .corridor, .escalier").forEach(el => {
            el.addEventListener("click", () => {
                if (!startSalle) {
                    setStartSalle(el.id);
                    el.style.fill = "orange";
                } else {
                    const endSalle = el.id;
                    const path = trouverPath(mapGraphique, startSalle, endSalle);
                    console.log("Path trouvé :", path);
                    if (path) {
                        highlightPath(path);
                    }
                    setStartSalle(null);
                }
            });
        });
    }, [startSalle, level]);

    const maps = {
        1: <Premier width={windowSize.width * 0.5} height={windowSize.height * 0.7} />,
        2: <Deuxieme width={windowSize.width * 0.5} height={windowSize.height * 0.7} />,
    };


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

    function highlightPath(path) {
        document.querySelectorAll(".salle, .corridor, .escalier")
            .forEach(el => {
                el.style.fill = "",
                    el.style.fillOpacity = "";
            });

        path.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.fill = "yellow",
                    el.style.fillOpacity = "0.7";
            }
        });
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
                <div>
                    <div className="map">{maps[level]}</div>
                </div>
            </div>
        </>

    );
}