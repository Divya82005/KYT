import React, { useState, useEffect, useRef } from "react";
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
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
  },
  {
    id: 2,
    image: ManImg,
    name: "Jane Smith",
    title: "Content Creator",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    image: ManImg,
    name: "Mike Johnson",
    title: "Digital Nomad",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
