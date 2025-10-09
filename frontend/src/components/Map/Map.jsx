import "./Map.css";
import Premier from "./svgFiles/bloc-L/premier.jsx";
import Deuxieme from "./svgFiles/bloc-L/deuxieme.jsx";
import { useState, useEffect } from 'react';

export default function Map() {
    const [level, setLevel] = useState("1");
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

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

    const maps = {
        1: <Premier width={windowSize.width * 0.5} height={windowSize.height * 0.7} />,
        2: <Deuxieme width={windowSize.width * 0.5} height={windowSize.height * 0.7} />,
    };

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