import React, { useEffect } from 'react';
import WCIntro from './WCIntro';
import WCGlance from './WCGlance';
import WCPrePlanning from './WCPrePlanning';
import WCDestinationSafety from './WCDestinationSafety';
import WCCrowdSafety from './WCCrowdSafety';
import WCTransportationSafety from './WCTransportationSafety';
import WCCrimePrevention from './WCCrimePrevention';
import WCHealthandWellness from './WCHealthandWellness';
import WCConclusion from './WCConclusion';

const WorldCupPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add body class for styling
    document.body.classList.add('worldcup-page');
    
    return () => {
      // Remove body class when component unmounts
      document.body.classList.remove('worldcup-page');
    };
  }, []);

  return (
    <div className="worldcup-page-wrapper">
      <WCIntro />
      <WCGlance />
      <WCPrePlanning />
      <WCDestinationSafety />
      <WCCrowdSafety />
      <WCTransportationSafety />
      <WCCrimePrevention />
      <WCHealthandWellness />
      <WCConclusion />
    </div>
  );
};

export default WorldCupPage;
