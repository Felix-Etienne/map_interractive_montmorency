import "./Inscription.css";
import { useState } from "react";


export default function Inscription() {


    return (
        <div className="inscription-container">
            <h1>Connection Utilisateur</h1>
            <p>Veuillez entrer vos informations de connexion.</p>
            <form action="submit" method="post">
                <label for="username">Nom d'utilisateur:</label><br />
                <input type="text" id="username" name="username" required /><br />
                <label for="password">Mot de passe:</label><br />
                <input type="password" id="password" name="password" required /><br /><br />
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}