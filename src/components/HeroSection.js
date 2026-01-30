import Ai_Safety from "../assets/Img1.png";
import Security from "../assets/Img2.png";
import Alert from "../assets/Img3.png";
import "./Styles/HeroSection.css";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";




const HeroSection = () => {

  const features = [
    {
      icon: <img 
        src={Ai_Safety}
        alt="AI Safety Intelligence" 
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width="100"
        height="100"
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
        decoding="async"
        width="100"
        height="100"
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
        decoding="async"
        width="100"
        height="100"
      />,
      title: "Real-Time Incident Alerts",
      desc: "Know Your Safety Status",
    },
  ];


const location = useLocation();

const handleDownloadClick = () => {
  const path = location.pathname;

  let pageName = "Other";
  if (path === "/") pageName = "Home";
  if (path === "/blogs") pageName = "Blogs";
  if (path === "/mexico") pageName = "Mexico";

  ReactGA.event("download_btn", {
    page_name: pageName
  });

  window.open(
    "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs",
    "_blank"
  );
};






  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1 className="hero-title">
          YOUR SAFETY, OUR PRIORITY
        </h1>

        <p className="vision-text">Real time intelligence for peace of mind where ever you are</p>

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
              style={{ display: 'none' }}
              className="product-hunt-desktop-link"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956968&theme=dark&t=1745506618137"
                alt="KnowYourTrips - Your Personal Travel Assistant | Product Hunt"
                className="product-hunt-badge"
                loading="lazy"
                fetchpriority="low"
              />
            </a>
            {/* Mobile Product Hunt Button */}
            <a
              href="https://www.producthunt.com/posts/knowyourtrips"
              target="_blank"
              rel="noopener noreferrer"
              className="product-hunt-mobile-btn"
            >
              <span style={{ marginLeft: '0.5rem' }}>
                <div style={{ fontSize: 'clamp(0.5rem, 1.8vw, 0.65rem)', fontWeight: '400', lineHeight: '1' }}>
                  FIND US ON
                </div>
                <div style={{ fontSize: 'clamp(0.75rem, 2.8vw, 0.95rem)', fontWeight: '700', lineHeight: '1.1', marginTop: '2px' }}>
                  Product Hunt
                </div>
              </span>
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
          src="/city-hero.webp"
          className="city-main-img hero-image"
          alt="City view"
          width="1200"
          height="800"
        />
      </div>
    </section>
  );
};

export default HeroSection;