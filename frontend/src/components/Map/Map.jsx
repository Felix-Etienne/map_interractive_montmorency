import "./Map.css";
import Premier from "./svgFiles/bloc-L/premier.jsx";
import Deuxieme from "./svgFiles/bloc-L/deuxieme.jsx";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function Map() {

    const [level, setLevel] = useState("1");

    const maps = {
        1: <Premier />,
        2: <Deuxieme />,
    };




    return (
        <>
            <div className="map-container">
                <SearchBar />
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
            </div >
        </>

    );
}