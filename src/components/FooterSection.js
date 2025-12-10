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
        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="footer-data">
            <h3>Data sources:</h3>
            <p>
              Local police reports, government travel advisories, user reports,
              crime statistics, AI analysis. Safety scores updated hourly.
            </p>
          </div>

          <div className="footer-links">About | Privacy | Terms | Contact</div>

          <div className="footer-copy">
            © 2025 knowyourtrips. All rights reserved.
          </div>
        </div>

        {/* RIGHT SIDE: QR + BUTTON */}
        <div className="footer-right">
          <img src={QRCode} alt="QR Code" className="footer-qr" />

          <button className="footer-btn" onClick={handleDownloadClick}>
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
