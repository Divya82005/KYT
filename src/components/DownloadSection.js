import IphoneImg from "../assets/iPhone 13.png";
import QRCode from "../assets/Vector.png";
import "./Styles/DownloadSection.css";
import ReactGA from "react-ga4";

const DownloadSection = () => {
  
  const handleDownloadClick = () => {
  ReactGA.event("download_btn"); // no need to send page manually

  window.open(
    "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs",
    "_blank"
  );
};



  return (
    <section className="download-section">
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
        <img src={IphoneImg} alt="App Screenshot" className="iphone-img" />
      </div>
    </section>
  );
};

export default DownloadSection;