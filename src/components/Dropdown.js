// Dropdown.js
import React, { useState, useEffect } from "react";
import '../Styles/Dropdown.css'

const Dropdown = ({ onCategoryChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const categories = [
    "All",
    "Breakfast",
    "Brunch",
    "Lunch",
    "Dinner",
    "Desserts",
    "Healthy and Diet",
    "Cuisine",
    "Mithai",
    "Drink and Cocktail",
    "Soup",
    "Snacks and Appetizers",
    "International Eats",
  ];

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

  const handleCategoryClick = (category) => {
    onCategoryChange(category);  // call the prop passed from App
    setIsChecked(false); // close dropdown after selection
  };

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
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick(cat);
              }}
            >
              {cat}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
