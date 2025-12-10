import React from "react";
import "./Styles/HeroSection.css";
import city from "../assets/city.jpg";
import map from "../assets/map.png";
import Group from "../assets/Group.png";
import SafetyCard from "../assets/SafetyCard.png";

import security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";

import Ai_Safety from "../assets/Img1.png";

const HeroSection = () => {
  const features = [
    {
      icon: <img src={Ai_Safety} className="Ai_Safety" alt="AISafetyImg" />,
      title: "Ai Safety Intelligence",
      desc: "Smart Suggestions And Planning",
    },
    {
      icon: <img src={security} className="Ai_Safety" alt="AISequrityImg" />,
      title: "Risk Assessment",
      desc: "Evaluate Locations Before You Go",
    },
    {
      icon: <img src={Alert} className="Ai_Safety" alt="AIAlertImg" />,
      title: "Real-Time Incident Alerts",
      desc: "Know Your Safety",
    },
  ];

  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <div className="hero-container">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="left-content">
          <p className="vision">OUR VISION IS TO-</p>

          <h1 className="hero-title">
            EMPOWER EVERY JOURNEY WITH <br /> SAFETY
          </h1>

          <button className="btn-primary" onClick={handleDownloadClick}>
            Download the App
          </button>

          {/* HORIZONTAL FEATURE CARDS */}
          <div className="features-horizontal">
            {features.map((f, index) => (
              <div className="feature-card-horizontal" key={index}>
                <div className="feature-icon-horizontal">{f.icon}</div>
                <div className="feature-content-horizontal">
                  <h3 className="feature-title-horizontal">{f.title}</h3>
                  <span className="feature-desc-horizontal">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL SECTION */}
      <div className="hero-visual">
        {/* BACKGROUND CIRCLES */}
        <div className="big-circle"></div>
        <div className="mid-circle"></div>
        <div className="small-circle"></div>

        {/* CENTER CITY IMAGE */}
        <img src={city} alt="city" className="city-img" />

        {/* --- CARD 1: Safety Score (Rotation 13.61°) --- */}
        <div className="safety-card">
          <img src={SafetyCard} className="safetyImg" alt="safety" />
        </div>

        {/* --- CARD 2: Weather Alert (Rotation 8.56°) --- */}
        <div className="alert-card">
          <img src={Group} className="alertImg" alt="alert" />
        </div>

        {/* --- CARD 3: MAP CARD (Rotation 22.83°) --- */}
        <div className="map-card">
          <img src={map} className="map-image" alt="map" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
