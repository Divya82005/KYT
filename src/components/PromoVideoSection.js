import promoVideo from "../assets/promo_video.mp4";
import "./Styles/PromoVideoSection.css";

const PromoVideoSection = () => {
  return (
    <section className="promo-section">
      {/* LEFT VIDEO BOX */}
      <div className="promo-video-box">
        <video
          className="promo-video"
          src={promoVideo}
          autoPlay
          muted
        />
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div className="promo-text-box">
        <h3 className="promo-about-title">About</h3>

        <h2 className="promo-heading">
          <span className="main-title">Real-time Safety</span>
          <span className="main-title"> Intelligence for travellers</span>
        </h2>

        <p className="promo-description">
          Introducing knowyourtrips, the dedicated app designed to inform and empower every traveler. We deliver real-time safety intelligence—not just general advice—to help you actively avoid incidents that could disrupt your journey. Navigate any city, new or familiar, with the confidence that comes from knowing the ground truth. Your peace of mind starts here.
        </p>
      </div>
    </section>
  );
};

export default PromoVideoSection;