import React from "react";
import "./Styles/HeroSection.css";
import city from "../assets/City.png";
import map from "../assets/map.png";
import SafetyCard from "../assets/Safety Card.png";
import AlertCard from "../assets/Group.png";
import Ai_Safety from "../assets/Img1.png";
import Security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";

const HeroSection = () => {
  const features = [
    {
      icon: <img src={Ai_Safety} alt="AI Safety Intelligence" />,
      title: "AI Safety Intelligence",
      desc: "Email Support with Privacy",
    },
    {
      icon: <img src={Security} alt="Risk Assessment" />,
      title: "Risk Assessment",
      desc: "Evaluate Locations Before You Go",
    },
    {
      icon: <img src={Alert} alt="Real-Time Incident Alerts" />,
      title: "Real-Time Incident Alerts",
      desc: "Know Your Safety Status",
    },
  ];

  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <p className="vision-text">OUR VISION IS TO-</p>

        <h1 className="hero-title">
          EMPOWER EVERY JOURNEY WITH <br />
          <span className="safety-text">SAFETY</span>
        </h1>

        <div className="button-row">
          <button className="download-btns">Download the App</button>

          {/* <button className="product-btn">Find us on Product Hunt</button> */}

          <div className="product-btn">
            <a
              href="https://www.producthunt.com/posts/knowyourtrips?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-knowyourtrips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956968&theme=dark&t=1745506618137"
                alt="KnowYourTrips - Your&#0032;Personal&#0032;Travel&#0032;Assistant&#0032; | Product Hunt"
                
                className="product-hunt-badge"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {/* Main City Circle Image */}
        <img src={city} className="city-main-img" alt="City view" />

        {/* Safety Score Card */}
        <div className="safety-card">
          <img src={SafetyCard} alt="Safety Score Card" />
        </div>

        {/* Weather Alert Card */}
        <div className="alert-card">
          <img src={AlertCard} alt="Weather Alert" />
        </div>

        {/* Map Card */}
        <div className="map-card">
          <img src={map} alt="Map Location" />
        </div>
      </div>

      {/* Bottom feature cards */}
      <div className="feature-row">
        {features.map((f, i) => (
          <div className="feature-box" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
