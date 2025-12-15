import "./ConnectionForm.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export default function ConnectionForm() {
  const navigate = useNavigate();
  const [couriel, setCouriel] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  async function authSubmitHandler(event) {
    if (couriel != "" && password != "") {
      event.preventDefault();
      const data = {
        email: couriel,
        password: password,
      };
      console.log(data);
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "api/students/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || "Une erreur est survenue.");
        }
        auth.login(responseData.nom, responseData.userId, responseData.token);
        navigate("/");
      } catch (err) {
        setError(
          err.message || "Une erreur est survenue lors de l'inscription."
        );
        console.error(err);
      } finally {
        navigate("/");
      }
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  return (
    <div className="inscription-container">
      <h1>Connection Utilisateur</h1>
      <p>Veuillez entrer vos informations de connexion :</p>
      <form className="login-form">
        <div className="control">
          <label>Email : </label>
          <input
            id="couriel"
            value={couriel}
            onChange={(e) => setCouriel(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={authSubmitHandler}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
