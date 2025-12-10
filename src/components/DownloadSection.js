import React from "react";
import "./Styles/DownloadSection.css";
import IphoneImg from "../assets/iPhone 13.png";
import QRCodeImg from "../assets/Vector.png"; // QR

const DownloadSection = () => {
  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <section className="download-section">
      <div className="left-contents">
        <h2>
          Get real-time safety alerts on your <br />
          phone with our app
        </h2>

        <p>
          Get real-time safety alerts on your phone <br />
          with our app
        </p>

        <div className="qr-and-button">
          <img src={QRCodeImg} alt="QR Code" className="qr-code-img" />

          <button onClick={handleDownloadClick} className="download-btn">
            Download the App
          </button>
        </div>
      </div>

      <div className="right-phone">
        <div className="phone-bg-circle"></div>
        <img src={IphoneImg} alt="App Screenshot" className="iphone-img" />
      </div>
    </section>
  );
};

export default DownloadSection;
