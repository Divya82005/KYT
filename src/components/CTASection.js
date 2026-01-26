import React, { useState, useEffect } from "react";
import "./Styles/CTASection.css";

import quote from "../assets/ComaImg.png";
import arrowl from "../assets/arrow_left.png";
import arrowr from "../assets/arrow_right.png";

const feedbackList = [
  {
    id: 1,
    name: "John Doe",
    title: "Travel Vlogger",
    rating: 5,
    text: "Highlight recommend it for solo travellers - The real time incident alerts when in a new country helps me to navigate the city easily. However one feedback is, the app currently is pushing too many notification, if you could tone it down to major alerts happening around me.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Content Creator",
    rating: 5,
    text: "Brillant App - Finally a app which actually apps travellers, a must use app for all the travellers.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Digital Nomad",
    rating: 4,
    text: "Safety Feature - Real time safety alerts when in new country helps me to stay on top of my journey.",
  },
];

const CTASection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % feedbackList.length);
      setIsChanging(false);
    }, 200);
  };

  const prevSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + feedbackList.length) % feedbackList.length);
      setIsChanging(false);
    }, 200);
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex !== index) {
      setIsChanging(true);
      setTimeout(() => {
        setIndex(slideIndex);
        setIsChanging(false);
      }, 200);
    }
  };

  // Auto-slide every 3 seconds, but pause when hovering
  useEffect(() => {
    if (isPaused) return; // Don't start interval if paused

    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % feedbackList.length);
        setIsChanging(false);
      }, 200);
    }, 3000); // 3 seconds

    // Cleanup interval on component unmount or when paused
    return () => clearInterval(interval);
  }, [isPaused, index]);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-slide when hovering
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-slide when not hovering
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  const currentFeedback = feedbackList[index];

  return (
    <section className="testimonial-section">
      <h2 className="section-heading">User Feedback</h2>

      {/* MAIN FEEDBACK CARD WITH ARROWS */}
      <div 
        className="feedback-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* LEFT ARROW */}
        <button className="nav-btn left" onClick={prevSlide}>
          <img src={arrowl} alt="Previous" />
        </button>

        <div className={`feedback-content ${isChanging ? 'changing' : ''}`}>
          {/* LEFT SIDE - USER INFO */}
          <div className="user-info">
            <div className="rating-container">
              <div className="star-rating">
                {renderStars(currentFeedback.rating)}
              </div>
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

        {/* RIGHT ARROW */}
        <button className="nav-btn right" onClick={nextSlide}>
          <img src={arrowr} alt="Next" />
        </button>

        {/* PROGRESS INDICATORS */}
        <div className="progress-indicators">
          {feedbackList.map((_, i) => (
            <div
              key={i}
              className={`progress-dot ${i === index ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
