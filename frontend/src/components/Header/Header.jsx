import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <h1 className="header-title">Map Interactive Collège Montmorency</h1>
                <div>
                    <Link to="/inscription">
                        <button>Inscription</button>
                    </Link>
                </div>
            </header>
            <body>
                <main className="main">
                    <Outlet />
                </main>
            </body>
        </>

    );
}