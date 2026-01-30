import React from "react";
import "./Styles/FooterSection.css";
import QRCode from "../assets/Vector.png";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
const location = useLocation();

const handleDownloadClick = () => {
  const path = location.pathname;

  let pageName = "Other";
  if (path === "/") pageName = "Home";
  if (path === "/blogs") pageName = "Blogs";
  if (path === "/mexico") pageName = "Mexico";

  ReactGA.event("download_btn", {
    page_name: pageName
  });

  window.open(
    "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs",
    "_blank"
  );
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

          {/* DESKTOP: Links in horizontal line */}
          <div className="footer-links desktop-links">
            <span>About</span>
            <span>|</span>
            <span>Privacy</span>
            <span>|</span>
            <span>Terms</span>
            <span>|</span>
            <span>Contact</span>
          </div>

          <div className="footer-copyright">
            <span>© 2025 knowyourtrips. All rights reserved.</span>
          </div>
        </div>

        {/* RIGHT CONTENT - QR CODE AND DOWNLOAD BUTTON */}
        <div className="footer-right">
          <div className="qr-section">
            <img src={QRCode} alt="QR Code" className="qr-code" />
          </div>
          
          {/* iPad Mini: Links in vertical stack */}
          <div className="footer-links ipad-links">
            <span>About</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
          
          <button className="download-button" onClick={handleDownloadClick}>
            <span className="diamond-top-left">✦</span>
            Download the App
            <span className="diamond-bottom-right">✦</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
