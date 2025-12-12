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
        {/* TOP LEFT BLOCK */}
        <div className="left-block">
          <h3>Data sources:</h3>
          <p>
            Local police reports, government travel advisories, user reports,
            crime statistics, AI analysis. Safety scores updated hourly.
          </p>
        </div>

        {/* QR CODE */}
        <img src={QRCode} className="qr-img" alt="QR Code" />

        {/* BOTTOM BLOCK */}
        <div className="bottom-block">
          <div className="footer-links">About | Privacy | Terms | Contact</div>
          <div className="footer-copy">
            © 2025 knowyourtrips. All rights reserved.
          </div>

          <button className="download-btn" onClick={handleDownloadClick}>
            Download the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
