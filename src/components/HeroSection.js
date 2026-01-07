import { useEffect, useState } from "react";
import city from "../assets/City_optimized.png";
import Ai_Safety from "../assets/Img1.png";
import Security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";
import "./Styles/HeroSection.css";

const HeroSection = () => {
  // Load images immediately without any delays
  useEffect(() => {
    const imageUrls = [city, Ai_Safety, Security, Alert];
    
    // Immediate preloading with multiple strategies
    imageUrls.forEach(src => {
      // Strategy 1: Multiple Image objects for browser cache
      for (let i = 0; i < 2; i++) {
        const img = new Image();
        img.src = src;
        img.loading = 'eager';
        img.decoding = 'sync';
      }
      
      // Strategy 2: Hidden DOM elements for immediate caching
      const hiddenImg = document.createElement('img');
      hiddenImg.src = src;
      hiddenImg.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;';
      hiddenImg.loading = 'eager';
      hiddenImg.decoding = 'sync';
      document.body.appendChild(hiddenImg);
    });
  }, []);

  const features = [
    {
      icon: <img 
        src={Ai_Safety} 
        alt="AI Safety Intelligence" 
        loading="eager"
        decoding="sync"
        fetchpriority="high"
        style={{ 
          imageRendering: 'crisp-edges',
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
      />,
      title: "AI Safety Intelligence",
      desc: "Smart Suggestions and Planning",
    },
    {
      icon: <img 
        src={Security} 
        alt="Risk Assessment" 
        loading="eager"
        decoding="sync"
        fetchpriority="high"
        style={{ 
          imageRendering: 'crisp-edges',
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
      />,
      title: "Risk Assessment",
      desc: "Evaluate Locations Before You Go",
    },
    {
      icon: <img 
        src={Alert} 
        alt="Real-Time Incident Alerts" 
        loading="eager"
        decoding="sync"
        fetchpriority="high"
        style={{ 
          imageRendering: 'crisp-edges',
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
      />,
      title: "Real-Time Incident Alerts",
      desc: "Know Your Safety Status",
    },
  ];

  const handleDownloadClick = () => {
    console.log("🔗 Download button clicked");
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <p className="vision-text">OUR VISION IS TO-</p>

        <h1 className="hero-title">
          EMPOWER EVERY <br />
          <span className="hero-title">JOURNEY WITH SAFETY</span>
        </h1>

        <div className="button-row">
          <button className="download-btns" onClick={handleDownloadClick}>
            <span className="diamond-top-left">✦</span>
            <span className="diamond-bottom-right">✦</span>
            Download the App
          </button>

          <div className="product-btn">
            <a
              href="https://www.producthunt.com/posts/knowyourtrips?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-knowyourtrips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956968&theme=dark&t=1745506618137"
                alt="KnowYourTrips - Your Personal Travel Assistant | Product Hunt"
                className="product-hunt-badge"
                loading="lazy"
                fetchpriority="low"
              />
            </a>
          </div>
        </div>

        {/* ✅ FEATURE ROW MOVED HERE */}
        <div className="feature-row">
          {features.map((f, i) => (
            <div className="feature-box" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <img
          src={city}
          className="city-main-img hero-image"
          alt="City view"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
          style={{ 
            imageRendering: 'crisp-edges',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;