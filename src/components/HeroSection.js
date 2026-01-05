import { useEffect, useState } from "react";
import city from "../assets/City.png";
import Ai_Safety from "../assets/Img1.png";
import Security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";
import "./Styles/HeroSection.css";

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Optimized preloading for incognito mode
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [city, Ai_Safety, Security, Alert];
      
      try {
        // Create promises for all images
        const imagePromises = imageUrls.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            // Set high priority and eager loading
            img.fetchPriority = 'high';
            img.loading = 'eager';
            img.src = src;
          });
        });
        
        // Wait for all images to load
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        // Still set loaded to true to prevent infinite loading
        setImagesLoaded(true);
      }
    };
    
    preloadImages();
  }, []);

  const features = [
    {
      icon: <img 
        src={Ai_Safety} 
        alt="AI Safety Intelligence" 
        loading="eager"
        fetchPriority="high"
        style={{ opacity: imagesLoaded ? 1 : 0.7 }}
      />,
      title: "AI Safety Intelligence",
      desc: "Smart Suggestions and Planning",
    },
    {
      icon: <img 
        src={Security} 
        alt="Risk Assessment" 
        loading="eager"
        fetchPriority="high"
        style={{ opacity: imagesLoaded ? 1 : 0.7 }}
      />,
      title: "Risk Assessment",
      desc: "Evaluate Locations Before You Go",
    },
    {
      icon: <img 
        src={Alert} 
        alt="Real-Time Incident Alerts" 
        loading="eager"
        fetchPriority="high"
        style={{ opacity: imagesLoaded ? 1 : 0.7 }}
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
          className={`city-main-img hero-image ${imagesLoaded ? 'loaded' : 'loading'}`}
          alt="City view"
          loading="eager"
          fetchPriority="high"
          style={{ 
            opacity: imagesLoaded ? 1 : 0.7,
            filter: imagesLoaded ? 'none' : 'blur(1px)',
            transition: 'opacity 0.3s ease, filter 0.3s ease'
          }}
          onLoad={(e) => {
            e.target.classList.add('loaded');
            e.target.style.opacity = '1';
            e.target.style.filter = 'none';
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;