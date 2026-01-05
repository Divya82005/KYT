import { useEffect } from "react";
import city from "../assets/City.png";
import Ai_Safety from "../assets/Img1.png";
import Security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";
import "./Styles/HeroSection.css";

const HeroSection = () => {
  // Multiple preloading attempts
  useEffect(() => {
    // Method 1: Standard preload
    const img1 = new Image();
    img1.src = city;
    
    // Method 2: Force immediate priority
    const img2 = new Image();
    img2.loading = 'eager';
    img2.src = city;
    
    // Method 3: Create actual DOM element for caching
    const hiddenImg = document.createElement('img');
    hiddenImg.src = city;
    hiddenImg.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;';
    document.body.appendChild(hiddenImg);
    
    return () => {
      if (document.body.contains(hiddenImg)) {
        document.body.removeChild(hiddenImg);
      }
    };
  }, []);

  const features = [
    {
      icon: <img src={Ai_Safety} alt="AI Safety Intelligence" loading="eager" />,
      title: "AI Safety Intelligence",
      desc: "Smart Suggestions and Planning",
    },
    {
      icon: <img src={Security} alt="Risk Assessment" loading="eager" />,
      title: "Risk Assessment",
      desc: "Evaluate Locations Before You Go",
    },
    {
      icon: <img src={Alert} alt="Real-Time Incident Alerts" loading="eager" />,
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
          className="city-main-img hero-image"
          alt="City view"
          loading="eager"
          onLoad={(e) => {
            e.target.classList.add('loaded');
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;