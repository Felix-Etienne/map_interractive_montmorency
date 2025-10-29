import React, { useState, useMemo } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSelectClasse }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const classes = ["L1756", "L1758", "L1760", "L1762"];

  const filteredClasses = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return [];
    return classes.filter((cls) => cls.toLowerCase().includes(term));
  }, [searchTerm]);

  const handleSelect = (cls) => {
    setSearchTerm(cls);
    setShowResults(false);
    if (onSelectClasse) onSelectClasse(cls); 
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  return (
    <div className="search-container">
      <h2>Rechercher une classe</h2>
      <input
        type="text"
        placeholder="Entrer le nom de la classe..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />

      {showResults && filteredClasses.length > 0 && (
        <ul className="results-list">
          {filteredClasses.map((cls, index) => (
            <li
              key={index}
              className="result-item"
              onClick={() => handleSelect(cls)}
            >
              {cls}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
