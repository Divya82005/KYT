import IphoneImg from "../assets/iPhone 13.png";
import QRCode from "../assets/Vector.png";
import "./Styles/DownloadSection.css";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShrink, setShouldShrink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isTransitioning = false; // Add flag to prevent chain reactions
    let lastTransitionTime = 0; // Track last transition time
    
    const handleScroll = () => {
      const downloadSection = document.querySelector('.download-section');
      const safetySection = document.querySelector('.safety-container');
      
      if (downloadSection && safetySection) {
        const rect = downloadSection.getBoundingClientRect();
        const safetyRect = safetySection.getBoundingClientRect();
        
        // Trigger when download section starts entering viewport
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(visible);
        
        // Check if we're on iPad
        const isIPad = window.innerWidth >= 744 && window.innerWidth <= 1023;
        
        // Skip automatic shrink management on iPad to allow touch events to control it
        if (!isIPad) {
          // Shrink the download section only when the safety section is in the main viewport area.
          const safetyEntering = safetyRect.top < window.innerHeight * 0.5 && safetyRect.bottom > 0;
          const scrollingDown = window.scrollY > lastScrollY;
          lastScrollY = window.scrollY;

          // Only shrink if we are scrolling DOWN into the safety section
          // If we scroll UP, we want the download section to be visible (not shrunk)
          if (scrollingDown && safetyEntering) {
            setShouldShrink(true);
          } else {
            setShouldShrink(false);
          }
        } else {
          // On iPad, let touch events handle the shrink state
          lastScrollY = window.scrollY;
        }
      }
    };

    // ADD DIRECT SCROLL LISTENERS TO DOWNLOAD SECTION ELEMENTS
    const handleDownloadScroll = (e) => {
      console.log('🔥 DOWNLOAD AREA SCROLL DETECTED!', e.deltaY, 'from:', e.target.className);
      
      // Prevent chain reactions
      const now = Date.now();
      const globalTransitionTime = now - (window.lastScrollTransitionTime || 0);
      
      if (isTransitioning || window.isScrollTransitioning || globalTransitionTime < 2000) {
        console.log('🚫 BLOCKING Download scroll - transition in progress or too recent:', globalTransitionTime, 'ms ago');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      
      // Only handle downward scrolls with sufficient threshold
      if (e.deltaY > 1) {
        const downloadSection = document.querySelector('.download-section');
        const safetyWrapper = document.getElementById('safety');
        const safetySection = document.querySelector('.safety-container');
        
        if (downloadSection && (safetyWrapper || safetySection)) {
          const downloadRect = downloadSection.getBoundingClientRect();
          
          // Check if we're actually in the Download section
          if (downloadRect.top < window.innerHeight && downloadRect.bottom > 0) {
            console.log('🚀 DOWNLOAD -> SAFETY SCROLL TRIGGERED from Download area!');
            
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Set transition flags
            isTransitioning = true;
            lastTransitionTime = now;
            
            // GLOBAL FLAG to prevent other components from triggering
            window.isScrollTransitioning = true;
            window.lastScrollTransitionTime = now;
            
            // Add shrink animation
            downloadSection.classList.add('shrink-right');
            
            // Smooth scroll to Safety Intelligence
            setTimeout(() => {
              const targetElement = safetyWrapper || safetySection;
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                console.log('✅ DOWNLOAD -> SAFETY complete from Download area scroll');
              }
              
              // Reset transition flags after completion
              setTimeout(() => {
                isTransitioning = false;
                window.isScrollTransitioning = false;
                console.log('✅ Download transition complete - ready for next scroll');
              }, 800); // Increased back to 800ms to prevent chain reactions
            }, 150); // Reduced from 300ms to 150ms
            
            return false;
          }
        }
      } else {
        console.log('❌ Download scroll deltaY too small or upward:', e.deltaY);
      }
    };

    // Add listeners to main Download section elements
    const addDownloadScrollListeners = () => {
      // Target main containers and interactive elements
      const downloadSection = document.querySelector('.download-section');
      const leftContents = document.querySelector('.left-contents');
      const rightPhone = document.querySelector('.right-phone');
      const qrAndButton = document.querySelector('.qr-and-button');
      
      const elementsToListen = [downloadSection, leftContents, rightPhone, qrAndButton].filter(element => element);
      
      console.log(`✅ Adding scroll listeners to ${elementsToListen.length} Download section elements`);
      
      elementsToListen.forEach((element, index) => {
        if (element) {
          element.addEventListener('wheel', handleDownloadScroll, { passive: false });
          console.log(`✅ Download listener ${index + 1} added to:`, element.className);
        }
      });
      
      return elementsToListen;
    };

    // Store elements reference for cleanup
    let elementsWithListeners = [];

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    // Add download scroll listeners after a short delay
    const timeoutId = setTimeout(() => {
      elementsWithListeners = addDownloadScrollListeners();
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      
      // Remove all download scroll listeners
      elementsWithListeners.forEach(element => {
        if (element) {
          element.removeEventListener('wheel', handleDownloadScroll);
        }
      });
    };
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
    <section className={`download-section ${isVisible ? 'slide-up' : ''} ${shouldShrink ? 'shrink-right' : ''}`}>
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