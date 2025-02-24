import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // React Icons for back button
import "../styles/Extras.css";

const Extras = () => {
  // State to manage accordion visibility
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle accordion visibility
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="extras-container">
      {/* Back Button and Heading */}
      <div className="header">
        <Link to="/" className="back-button">
          <IoArrowBack size={24} />
        </Link>
        <h1>Extras</h1>
      </div>

      {/* About Section */}
      <section className="section">
        <h2>About the App</h2>
        <p>
        The Parables of Jesus mobile app is a complimentary resource designed to facilitate a deeper understanding of Jesus' parables and the Bible as a whole. By providing insightful images and detailed interpretations for each parable, this app aims to make biblical study more engaging and accessible for everyone.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="section">
        <h2>Contact Us</h2>
        <p>
          Have feedback or suggestions? Reach out at{" "}
          <a href="mailto:abiodunojo453@gmail.com" className="link">
            support@parablesofjesus.com
          </a>
          .
        </p>
      </section>

      {/* Rate the App Section */}
      <section className="section">
        <h2>Rate the App</h2>
        <button className="disabled-button" disabled>
          Coming Soon
        </button>
      </section>

      {/* Privacy Policy Accordion */}
      <section className="section">
        <h2 onClick={() => toggleAccordion("privacy")} className="accordion-header">
          Privacy Policy {openAccordion === "privacy" ? "−" : "+"}
        </h2>
        {openAccordion === "privacy" && (
          <p>
            Your use of the app is completely confidential. We do not collect or transmit any data related to your usage, ensuring your privacy is fully respected.
          </p>
        )}
      </section>

      {/* Terms of Use Accordion */}
      <section className="section">
        <h2 onClick={() => toggleAccordion("terms")} className="accordion-header">
          Terms of Use {openAccordion === "terms" ? "−" : "+"}
        </h2>
        {openAccordion === "terms" && (
          <p>
            This application is exclusively intended for non-commercial purposes and is designed to facilitate scripture-based studies and devotionals. It may be freely used in personal and group settings, as well as in non-commercial corporate environments, provided that such use aligns with the principles of the Christian faith. 
            <br /> <br />
            By utilizing this application, you acknowledge that you have read, understood, and agreed to these terms. If you do not accept these terms, please discontinue use of the application.
          </p>
        )}
      </section>

      {/* Version Info Section */}
      <section className="section">
        <h2>Version Info</h2>
        <p>Current Version: 1.0.0</p>
      </section>

      {/* Credits Accordion */}
      <section className="section">
        <h2 onClick={() => toggleAccordion("credits")} className="accordion-header">
          Credits {openAccordion === "credits" ? "−" : "+"}
        </h2>
        {openAccordion === "credits" && (
          <p>
            The images and illustrations used in this app are courtesy of{" "}
            <a href="https://www.freebibleimages.org" target="_blank" rel="noopener noreferrer" className="link">
              Free Bible Images
            </a>{" "} and their contributors.
            All images remain the property of their respective owners and are used under the terms of the Free Bible Images Terms of Download. We do not claim any ownership or rights to these images.
            <br /> <br />
            For access to these images or similar ones, please visit the {" "}
            <a href="https://www.freebibleimages.org" target="_blank" rel="noopener noreferrer" className="link">
              Free Bible Images website
            </a>
            .
          </p>
        )}
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Phenomenal Productions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Extras;