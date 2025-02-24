import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen
import ParablesList from "./components/ParablesList";
import ParableDetail from "./components/ParableDetail";
import Extras from "./components/Extras";
import "./styles/styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Callback to handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Show LoadingScreen while loading */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Render the main app after loading */}
      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<ParablesList darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/parable/:id" element={<ParableDetail darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;