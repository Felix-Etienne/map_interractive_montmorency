import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import CurrentUser from "../CurrentUser/CurrentUser";


export default function Header() {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const authSubmitHandler = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="header-titre">

          <Link to="/">
            <h1 className="header-title">Map Interactive Collège Montmorency</h1>
          </Link>
          {!auth.isLoggedIn ? (
            <div className="boutton-inscri">
              <Link to="/inscription">
                <button >Inscription</button>
              </Link>
              <Link to="/connection">
                <button >Connection</button>
              </Link>
            </div>
          ) : (
            <div className="boutton-inscri">
              <CurrentUser />
              <button onClick={authSubmitHandler}>Déconnection</button>
            </div>
          )}


        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
