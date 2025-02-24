import React, { useState, useEffect } from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete(); // Notify the parent component that loading is complete
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isLoading ? "visible" : "hidden"}`}>
      <h1>Phenomenal</h1>
    </div>
  );
};

export default LoadingScreen;