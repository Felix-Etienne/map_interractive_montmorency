import "./Map.css";
import "https://unpkg.com/leaflet/dist/leaflet.js";
import image from "../../Images/a7fc6ee5.png";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function Map({ imageSize = [2000, 1000], imageUrl = image, polygons = [] }) {

    useEffect(() => {
        document.querySelectorAll(".salle").forEach(salle => {
            salle.addEventListener("click", () => {
                const id = salle.id;
                console.log("Salle cliquée :", id);

                highlightClass(id);
            });
        });

        function highlightClass(id) {
            // reset
            document.querySelectorAll(".salle").forEach(e => {
                e.setAttribute("fill", "lightblue");
            });

            if (!id) return;

            let el = document.getElementById(id);
            if (el) el.setAttribute("fill", "lightgreen");
        }
    }, []);




    return (
        <>
            <div className="map-container">
                <SearchBar />
                <p>Voici la Map interactive du college Montmorency : </p>
                <div>
                    <svg id="plan" viewBox="0 0 1000 600" width="100%">
                        <image href={image} x="0" y="0" width="100%" height="600" />
                        <g>
                            <rect id="L1760" class="salle" x="455" y="10" width="105" height="135" fill="lightblue" stroke="black" />
                            <text x="510" y="85" fontSize="20" textAnchor="middle" fill="black">L-1760</text>
                        </g>
                        <g>
                            <rect id="L1762" class="salle" x="345" y="10" width="110" height="135" fill="lightblue" stroke="black" />
                            <text x="400" y="85" fontSize="20" textAnchor="middle" fill="black">L-1762</text>
                        </g>
                        <g>
                            <rect id="L1758" class="salle" x="560" y="10" width="105" height="135" fill="lightblue" stroke="black" />
                            <text x="610" y="85" fontSize="20" textAnchor="middle" fill="black">L-1758</text>
                        </g>
                        <g>
                            <rect id="L1756" class="salle" x="560" y="190" width="105" height="140" fill="lightblue" stroke="black" />
                            <text x="610" y="265" fontSize="20" textAnchor="middle" fill="black">L-1756</text>
                        </g>
                        <g>
                            <rect id="C1" class="" x="510" y="190" width="40" height="310" fill="lightblue" stroke="black" />
                        </g>
                        <g>
                            <rect id="C1" class="" x="346" y="145" width="320" height="45" fill="lightblue" stroke="black" />
                        </g>
                        <rect id="sortie" class="exit" x="504" y="500" width="50" height="40" fill="orange" stroke="black" />
                    </svg>
                </div>
            </div>
        </>

    );
}