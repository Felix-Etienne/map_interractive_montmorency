import "./Map.css";
import "https://unpkg.com/leaflet/dist/leaflet.js";
import image from "../../Images/ImageMap.png";
import { useEffect } from "react";
import CurrentUser from "../CurrentUser/CurrentUser"; 

export default function Map({ imageSize = [2000, 1000], imageUrl = image, polygons = [] }) {

    useEffect(() => {
        const container = L.DomUtil.get("map");
        if (container != null) {
            container._leaflet_id = null;
        }


        const [mapWidth, mapHeight] = imageSize;

        const map = L.map("map", {
            crs: L.CRS.Simple,
            minZoom: -1,
            maxZoom: 4,
        });

        // Définir les bornes de l'image
        var bounds = [
            [0, 0],
            [mapHeight, mapWidth],
        ];

        // Ajouter l'image du Cégep
        L.imageOverlay(imageUrl, bounds).addTo(map);

        // Ajuster la vue pour montrer toute l'image
        map.fitBounds(bounds);

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

        map.on("click", onMapClick);

        polygons.forEach(({ coords, label }) => {
            L.polygon(coords).addTo(map).bindPopup(label);
        });
        const classB3381 = L.polygon([
            [382.89807, 1086],
            [380.397744, 1258.5],
            [501.052092, 1256.8125],
            [500.977047, 1083.375],
        ]).addTo(map).bindPopup("B-3381");

        const classB3317 = L.polygon([
            [502.004763, 1083.5],
            [593.75937, 1083.9375],
            [595.388662, 1294.625],
            [504.388599, 1293.625],
        ]).addTo(map).bindPopup("B-3317");

        const classB3303 = L.polygon([
            [432.589864, 911.625],
            [456.976036, 911],
            [477.968777, 944.25],
            [593.353813, 945],
            [594.175613, 1081.8125],
            [433.213602, 1083.125],
        ]).addTo(map).bindPopup("B-3303");

        return () => {
            map.remove();
        };
    }, []);




    return (
        <>
            <div className="map-container">
                <p>Voici la Map interactive du college Montmorency : </p>
                <div id="map"></div>
            </div>
        </>

    );
}