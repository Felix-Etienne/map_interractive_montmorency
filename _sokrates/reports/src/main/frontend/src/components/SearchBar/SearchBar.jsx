import React, { useState, useMemo } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSelectClasse, classes = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredClasses = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return [];
    return classes.filter((cls) => cls.toLowerCase().includes(term));
  }, [searchTerm, classes]);

  const handleSelect = (cls) => {
    setSearchTerm(cls);
    setShowResults(false);
    if (onSelectClasse) onSelectClasse(cls, true);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  return (
    <div className="search-container" style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Rechercher une classe"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
        onFocus={() => setShowResults(true)}
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