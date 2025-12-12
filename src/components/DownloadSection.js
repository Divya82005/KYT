import React from "react";
import "./Styles/DownloadSection.css";
import IphoneImg from "../assets/iPhone 13.png";
import QRCode from "../assets/Vector.png";

const DownloadSection = () => {
  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <section className="download-section">
      {/* LEFT SIDE */}
      <div className="left-contents">
        <h2>Get real-time safety alerts on your phone with our app</h2>
        <p>Get real-time safety alerts on your phone with our app</p>

        <div className="qr-and-button">
          <img src={QRCode} alt="QR Code" className="footer-qr" />

          <button className="footer-btn" onClick={handleDownloadClick}>
            Download the App
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-phone">
        <div className="phone-bg-circle"></div>
        <img src={IphoneImg} alt="App Screenshot" className="iphone-img" />
      </div>
    </section>
  );
};

export default DownloadSection;
