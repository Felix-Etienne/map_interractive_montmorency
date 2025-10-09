import React, { useState, useMemo } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const classes = ["L-1762", "L-1760", "L-1758", "L-1756"];

  const filteredClasses = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return [];
    return classes.filter((cls) => cls.toLowerCase().includes(term));
  }, [searchTerm]);

  const handleSelect = (cls) => {
    setSearchTerm(cls);
    setShowResults(false);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Rechercher une classe"
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
