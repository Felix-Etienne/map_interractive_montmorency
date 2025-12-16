import "./Inscription.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [couriel, setCouriel] = useState("");

  const nomRegex = /^[a-zA-Z0-9]{3,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  async function authSubmitHandler(event) {
    if (checkerNom()) {
      if (nom != "" && password != "") {
        event.preventDefault();
        const data = {
          username: nom,
          email: couriel,
          password: password,
        };
        try {
          console.log(data);
          const response = await fetch(
            import.meta.env.VITE_BACKEND_URL + "api/students",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          const responseData = await response.json();
          console.log(responseData);
          navigate("/connection");
        } catch (err) {
          setError(
            err.message || "Une erreur est survenue lors de l'inscription."
          );
          console.error(err);
        } finally {
        }
      }
    }
  }
  const checkerNom = () => {
    if (nomRegex.test(nom)) {
      if (checkerPassword() === true) {
        return true;
      }
    } else {
      alert("Veuillez remplir le champ nom avec au minimum 3 caractères");
      return false;
    }
  };
  const checkerPassword = () => {
    if (passwordRegex.test(password)) {
      return true;
    } else {
      alert(
        "Veuillez remplir le champ mot de passe avec au minimum 8 caractères, une lettre et au moins 1 chiffre"
      );
      return false;
    }
  };

  return (
    <div className="inscription-container">
      <h1>Inscription</h1>
      <p>Veuillez entrer vos informations de connexion :</p>
      <form className="login-form">
        <div className="form-group">
          <div className="control">
            <label>Username : </label>
            <input
              id="user"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
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
        </div>

        <button className="login-button" onClick={authSubmitHandler}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}
