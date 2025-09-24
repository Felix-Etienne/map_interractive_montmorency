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
                    <div className="boutton-inscri">
                        <Link to="/inscription">
                            <button>Inscription</button>
                        </Link>

                        <Link to="/connection">
                            <button >Connection</button>
                        </Link>
                    </div>

                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    );
}