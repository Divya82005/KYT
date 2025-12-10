import React from "react";
import "./Styles/SafetyIntelligence.css";

const SafetyIntelligence = () => {



  return (
    <section className="safety-container">
      {/* LEFT VERTICAL TITLE */}
      <div className="left-title">
        <span className="title-dynamic">Dynamic</span>
        <span className="title-safety">Safety Intelligence</span>
      </div>

      {/* RIGHT CONTENT BLOCK */}
      <div className="right-content">
        {/* ROW 01 */}
        <div className="safety-row">
          <div className="num">01</div>
          <div>
            <h3 className="row-title">Real time incident alerts</h3>
            <p className="row-desc">
              Real-time alerts inform travellers of immediate journey
              disruptions, including localized crime, civil unrest, adverse
              weather, and transport problems, allowing for quick route
              adjustments.
            </p>
          </div>
        </div>

        {/* ROW 02 — GLOW CARD */}
        <div className="safety-row card">
          <div className="num">02</div>
          <div>
            <h3 className="row-title">AI Safety Intelligence</h3>
            <p className="row-desc">
              AI Safety Intelligence analyzes the impact of an incident,
              calculates your distance from the event, and dynamically generates
              safe alternate routes while highlighting specific areas to avoid.
            </p>
          </div>
        </div>

        {/* ROW 03 */}
        <div className="safety-row">
          <div className="num">03</div>
          <div>
            <h3 className="row-title">Destination Risk Assessment</h3>
            <p className="row-desc">
              Stay vigilant against petty crime, recognize common scams, and
              always prioritize secure and verified transport/walking methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyIntelligence;
