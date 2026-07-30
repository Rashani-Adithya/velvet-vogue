// Promotional Banner Styles
import "./PromotionalBanner.css";

// Promotional Banner Image
import promoBanner from "../../assets/promo-boutique-sale-banner.png";

function PromotionalBanner() {
  return (
    <section className="promo-section">

      <div className="promo-banner">

        {/* Background Image */}
        <img
          src={promoBanner}
          alt="Formal Wear Sale"
          className="promo-image"
        />

        {/* Dark Overlay */}
        <div className="promo-overlay"></div>

        {/* Promotional Content */}
        <div className="promo-content">

          <p className="promo-subtitle">
            LIMITED TIME
          </p>

          <h2 className="promo-title">
            Up to 30% Off
            <br />
            <span>Formal Wear</span>
          </h2>

          <p className="promo-description">
            Premium suits, blazers, and tailored collections
            <br />
            at exceptional prices.
            <br />
            This weekend only.
          </p>

          <button className="promo-btn">
            EXPLORE SALE
          </button>

        </div>

      </div>

    </section>
  );
}

export default PromotionalBanner;