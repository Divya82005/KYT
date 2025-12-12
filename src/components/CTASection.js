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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: ManImg,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: ManImg,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const CTASection = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const CARD_WIDTH = 1123;

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * CARD_WIDTH}px)`;
    }
  }, [index]);

  // Auto-slide
  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbackList.length);
    }, 3000);
    return () => clearInterval(auto);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % feedbackList.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + feedbackList.length) % feedbackList.length);
  };

  return (
    <section className="testimonial-section">
      <h2 className="section-heading">User Feedback</h2>

      <div className="carousel-outer-wrapper">
        {/* LEFT ARROW */}
        <button className="nav-btn left" onClick={prevSlide}>
          <img src={arrowl} />
        </button>

        {/* FIXED WIDTH CAROUSEL */}
        <div className="carousel-container-fixed">
          <div className="carousel-track" ref={trackRef}>
            {feedbackList.map((item, i) => (
              <div
                key={item.id}
                className={
                  i === index ? "testimonial-card active" : "testimonial-card"
                }
              >
                <div className="left-area">
                  <div className="floating-box" />
                  <img src={item.image} className="person-img" alt="User" />
                </div>

                <div className="right-area">
                  <img src={quote} className="quote-icon" alt="quote" />
                  <p className="feedback-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button className="nav-btn right" onClick={nextSlide}>
          <img src={arrowr} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
