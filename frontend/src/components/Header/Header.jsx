import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-titre">
                    <Link to="/">
                        <h1 className="header-title">Map Interactive Collège Montmorency</h1>
                    </Link>
                    <Link to="/inscription">
                        <button className="boutton-inscri">Inscription</button>
                    </Link>
                    <Link to="/connection">
                        <button className="boutton-inscri">Connection</button>
                    </Link>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    );
}