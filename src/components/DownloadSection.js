import IphoneImg from "../assets/iPhone 13.png";
import QRCode from "../assets/Vector.png";
import "./Styles/DownloadSection.css";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const downloadSection = document.querySelector('.download-section');
      if (downloadSection) {
        const rect = downloadSection.getBoundingClientRect();
        // Trigger when download section starts entering viewport
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(visible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs?pid=website&c=web_organic&af_channel=web",
  "_blank"
);
};




  return (
    <section className={`download-section ${isVisible ? 'slide-up' : ''}`}>
      {/* LEFT SIDE */}
      <div className="left-contents">
        <h2>Get real-time safety alerts on your phone with our app</h2>
        <p className="subtext">Get real-time safety alerts on your phone with our app</p>

        <div className="qr-and-button">
          <div className="qr-box">
            <img src={QRCode} alt="QR Code" className="footer-qr" />
          </div>

          <button className="footer-btn" onClick={handleDownloadClick}>
            <span className="btn-text">Download the App</span>
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-phone">
        <img 
          src={IphoneImg} 
          alt="App Screenshot" 
          className="iphone-img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default DownloadSection;