import React from "react";
import "./Styles/CTASection.css";
import phones from "../assets/iPhone 17.png"; // the two tilted phones image
 
 
import ManImg from "../assets/Man_Img.png";
import quote from "../assets/ComaImg.png";

const CTASection = () => {
  /* ---------------------------
   DEMO FEEDBACK DATA (INSIDE FILE)
---------------------------- */
  const demoFeedback = {
    name: "John Carter",
    image: ManImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  /* ---------------------------
   COMPONENT
---------------------------- */

  return (
    <div className="testimonial-card-wrapper">
      <div className="testimonial-card">
        {/* LEFT IMAGE SECTION */}
        <div className="testimonial-left">
          <div className="floating-box"></div>

          <img
            src={demoFeedback.image}
            alt="user"
            className="testimonial-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="testimonial-content">
          <img src={quote} alt="quote" className="quote-img" />

          <p className="testimonial-text">{demoFeedback.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
