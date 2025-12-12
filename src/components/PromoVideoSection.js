import React from "react";
import "./Styles/PromoVideoSection.css";
import promoVideo from "../assets/promo_video.mp4";

const PromoVideoSection = () => {
  return (
    <section className="promo-section">
      {/* LEFT VIDEO BOX - WIDER */}
      <div className="promo-video-box">
        <video
          className="promo-video"
          src={promoVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div className="promo-text-box">
        <h3 className="promo-about-title">About</h3>

        <h2 className="promo-heading">
          <span className="main-title">YOUR ALL-IN-ONE</span>
          <span className="main-title">TRAVEL COMPANION</span>
        </h2>

        <p className="promo-description">
          Get streamlined travel planning with our user-friendly app. Effortless
          booking, personalized recommendations, and hassle-free itineraries.
          <br />
          
          Real-time updates, convenient flights with airport taxi booking, and
          secure payment options for a stress-free travel experience.
        </p>
      </div>
    </section>
  );
};

export default PromoVideoSection;
