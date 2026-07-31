// Import CSS
import "./Hero.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import Hero Image
import heroImage from "../../assets/hero.png";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* Left Content */}
      <div className="hero-left">

        {/* Subtitle */}
        <span className="hero-subtitle">
          NEW COLLECTIONS — SS 2025
        </span>

        {/* Hero Title */}
        <h1 className="hero-title">
          Dressed for <br />
          <span>Every Chapter</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          Tailored casualwear and formal collections for the
          modern Sri Lankan who refuses to compromise between
          comfort and timeless style.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          
          <Link to="/collections">
          <button 
                className="btn-primary"
                  onClick={() => navigate("/collections")}
          >
            SHOP NOW
          </button>
        </Link>

          <button className="btn-secondary">
            VIEW LOOKBOOK
          </button>

        </div>

        {/* Statistics */}
        <div className="hero-stats">

          <div className="stat">
            <h2>500+</h2>
            <p>CURATED PIECES</p>
          </div>

          <div className="stat">
            <h2>10K+</h2>
            <p>HAPPY CUSTOMERS</p>
          </div>

          <div className="stat">
            <h2>4.9 / 5</h2>
            <p>AVG. RATING</p>
          </div>

        </div>

      </div>

      {/* Right Image */}
      <div className="hero-right">
        <img
          src={heroImage}
          alt="Velvet Vogue Fashion"
        />
      </div>

    </section>
  );
}

export default Hero;