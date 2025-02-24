import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack, IoRepeat, IoArrowUp } from "react-icons/io5"; // React Icons
import { ClipLoader } from "react-spinners"; // Fancy spinner
import { fetchParableVerses } from "../api/BibleApi";
import ParableMeanings from "../data/ParableProperties";
import "../styles/ParableDetail.css";

const ParableDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [verses, setVerses] = useState("");
  const [loading, setLoading] = useState(true);
  const [translation, setTranslation] = useState("kjv"); // Default translation
  const [error, setError] = useState(""); // Error message for unsupported translations
  const [activeTab, setActiveTab] = useState("text"); // State to manage active tab
  const [showBackToTop, setShowBackToTop] = useState(false); // State to control back-to-top button visibility

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

  useEffect(() => {
    scrollToTop();
  }, []);

  // Fetch verses
  useEffect(() => {
    const loadVerses = async () => {
      setLoading(true);
      setError("");
      const parable = ParableMeanings.find((p) => p.id === parseInt(id));
      if (parable) {
        try {
          const data = await fetchParableVerses(parable.reference, translation);
          if (data === "Verses not found.") {
            setError(`The ${translation.toUpperCase()} translation is not supported for this verse.`);
          }
          setVerses(data);
        } catch (error) {
          console.error("Error fetching verses:", error);
          setError("Error fetching verses. Please try again later.");
        }
      }
      setLoading(false);
    };
    loadVerses();
  }, [id, translation]);

  const parable = ParableMeanings.find((p) => p.id === parseInt(id));

  if (!parable) {
    return <div className="parable-container">Parable Not Found</div>;
  }

  return (
    <div className="parable-container">
      {/* Back Button and Version Toggle */}
      <div className="header-buttons">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack className="back-icon" /> Back
        </button>
        <button className="version-button" onClick={() => setTranslation(translation === "kjv" ? "web" : "kjv")}>
          {translation.toUpperCase()} <IoRepeat className="toggle-icon" />
        </button>
      </div>

      {/* Parable Title and Reference */}
      <h1 className="parable-title">{parable.title}</h1>
      <p className="parable-reference">{parable.reference} ({translation.toUpperCase()})</p>

      {/* Filter Navigation */}
      <div className="filter-navigation">
        <button
          className={`filter-button ${activeTab === "images" ? "active" : ""}`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          className={`filter-button ${activeTab === "text" ? "active" : ""}`}
          onClick={() => setActiveTab("text")}
        >
          Text
        </button>
        <button
          className={`filter-button ${activeTab === "meaning" ? "active" : ""}`}
          onClick={() => setActiveTab("meaning")}
        >
          Meaning
        </button>
      </div>

      {/* Display Images */}
      {activeTab === "images" && (
        <div className="parable-images fade-in">
          {parable.image.map((img, index) => (
            <img key={index} src={img} alt={`${parable.title} ${index}`} className="parable-image" />
          ))}
        </div>
      )}

      {/* Display Text (Verses) */}
      {activeTab === "text" && (
        <>
          {/* Loading Animation */}
          {loading && (
            <div className="loading-animation">
              <ClipLoader color="#007bff" size={50} />
              <p>Loading verses...</p>
            </div>
          )}

          {/* Error Message */}
          {error && !loading && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          {/* Display Bible Verses */}
          {!loading && !error && verses && (
            <div className="parable-verses fade-in">
              {verses
                .split("[")
                .filter((v) => v.trim() !== "")
                .map((line, index) => {
                  const cleanLine = line.replace("]", "").trim();
                  const splitIndex = cleanLine.indexOf(" ");
                  const verseNumber = cleanLine.substring(0, splitIndex);
                  const verseText = cleanLine.substring(splitIndex + 1);

                  return (
                    <p key={index} className="verse">
                      <span className="verse-number">[{verseNumber}]</span> {verseText}
                    </p>
                  );
                })}
            </div>
          )}
        </>
      )}

      {/* Display Meaning */}
      {activeTab === "meaning" && (
        <div className="parable-meaning fade-in" dangerouslySetInnerHTML={{ __html: parable.meaning }}>
          
        </div>
      )}

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <IoArrowUp className="back-to-top-icon" />
        </button>
      )}
    </div>
  );
};

export default ParableDetail;