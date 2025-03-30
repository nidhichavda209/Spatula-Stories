import React, { useState, useEffect } from "react";


const Dropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsChecked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <input
        type="checkbox"
        id="cat-toggle"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        style={{ display: "none" }}
      />
      <label htmlFor="cat-toggle" className="dropdown-label">
        Categories ▾
      </label>
      {isChecked && (
        <div className="dropdown-content">
          <a href="#breakfast">Breakfast</a>
          <a href="#brunch">Brunch</a>
          <a href="#lunch">Lunch</a>
          <a href="#dinner">Dinner</a>
          <a href="#desserts">Desserts</a>
          <a href="#diet">Healthy and Diet</a>
          <a href="#cuisine">Cuisine</a>
          <a href="#mithai">Mithai</a>

        </div>
      )}
    </div>
  );
};

export default Dropdown;