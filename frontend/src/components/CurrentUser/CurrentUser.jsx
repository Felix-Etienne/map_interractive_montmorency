import React, { useEffect, useState } from "react";

export default function CurrentUser() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUsername(payload.username);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  if (!username) return <p>Pas connecté</p>;

  return <p>Bienvenue, {username}!</p>;
}
