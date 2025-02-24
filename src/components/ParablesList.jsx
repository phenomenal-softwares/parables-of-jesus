import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny, IoEllipsisHorizontal, IoArrowUp } from "react-icons/io5"; // Added IoArrowUp
import ParableMeanings from "../data/ParableProperties";
import "../styles/styles.css";

const ParablesList = ({ darkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false); // State to control button visibility

  // Handle scroll event to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Filter parables based on search query
  const filteredParables = ParableMeanings.filter((parable) =>
    parable.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort parables alphabetically by title
  const sortedParables = filteredParables.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="parable-list fade-in">
      {/* Heading, Theme Toggle, and Extras Button */}
      <div className="header">
        <h1>Parables of Jesus</h1>
        <div className="header-buttons">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon size={24} /> : <IoSunny size={24} />}
          </button>
          <Link to="/extras" className="extras-button">
            <IoEllipsisHorizontal size={24} />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search parables..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Grid of Parables */}
      <div className="grid-container">
        {sortedParables.map((parable) => (
          <div key={parable.id} className="parable-card">
            <Link to={`/parable/${parable.id}`}>
              <div className="card-image">
                <img src={parable.poster} alt={parable.title} />
              </div>
              <div className="card-content">
                <h2>{parable.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <IoArrowUp className="back-to-top-icon" />
        </button>
      )}
    </div>
  );
};

export default ParablesList;