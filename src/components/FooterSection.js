import React from "react";
import "./Styles/FooterSection.css";
import QRCode from "../assets/Vector.png";

const FooterSection = () => {
  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        {/* LEFT CONTENT */}
        <div className="footer-left">
          <div className="data-sources">
            <h3>Data sources:</h3>
            <p>
              Local police reports, government travel advisories, user reports,
              crime statistics, AI analysis. Safety scores updated hourly.
            </p>
          </div>

          <div className="footer-links">
            <span>About | Privacy | Terms | Contact</span>
          </div>

          <div className="footer-copyright">
            <span>© 2025 knowyourtrips. All rights reserved.</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="footer-right">
          <div className="qr-section">
            <img src={QRCode} className="qr-code" alt="QR Code" />
          </div>
          <button className="download-button" onClick={handleDownloadClick}>
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
