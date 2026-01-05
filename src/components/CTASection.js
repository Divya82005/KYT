import React, { useState } from "react";
import "./Styles/CTASection.css";

import ManImg from "../assets/Man_Img.png";
import quote from "../assets/ComaImg.png";
import arrowl from "../assets/arrow_left.png";
import arrowr from "../assets/arrow_right.png";

const feedbackList = [
  {
    id: 1,
    image: ManImg,
    name: "John Doe",
    title: "Travel Vlogger",
    text: "Highlight recommend it for solo travellers - The real time incident alerts when in a new country helps me to navigate the city easily. However one feedback is, the app currently is pushing too many notification, if you could tone it down to major alerts happening around me.",
  },
  {
    id: 2,
    image: ManImg,
    name: "Jane Smith",
    title: "Content Creator",
    text: "Brillant App - Finally a app which actually apps travellers, a must use app for all the travellers.",
  },
  {
    id: 3,
    image: ManImg,
    name: "Mike Johnson",
    title: "Digital Nomad",
    text: "Safety Feature - Real time safety alerts when in new country helps me to stay on top of my journey.",
  },
];

const CTASection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % feedbackList.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + feedbackList.length) % feedbackList.length);
  };

  const currentFeedback = feedbackList[index];

  return (
    <section className="testimonial-section">
      <h2 className="section-heading">User Feedback</h2>

      <div className="feedback-container">
        {/* LEFT ARROW */}
        <button className="nav-btn left" onClick={prevSlide}>
          <img src={arrowl} alt="Previous" />
        </button>

        {/* MAIN FEEDBACK CARD */}
        <div className="feedback-card">
          <div className="feedback-content">
            {/* LEFT SIDE - USER INFO */}
            <div className="user-info">
              <div className="user-avatar">
                <img src={currentFeedback.image} alt={currentFeedback.name} />
              </div>
              <div className="user-details">
                <h3 className="user-name">{currentFeedback.name}</h3>
                <p className="user-title">{currentFeedback.title}</p>
              </div>
            </div>

            {/* RIGHT SIDE - FEEDBACK TEXT */}
            <div className="feedback-text-area">
              <div className="quote-icon-container">
                <img src={quote} className="quote-icon" alt="quote" />
              </div>
              <p className="feedback-text">{currentFeedback.text}</p>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button className="nav-btn right" onClick={nextSlide}>
          <img src={arrowr} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
