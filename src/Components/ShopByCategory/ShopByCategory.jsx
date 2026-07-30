import { Link } from "react-router-dom";
// Import CSS
import "./ShopByCategory.css";

// Import Images
import casualwear from "../../assets/casualwear.png";
import formalwear from "../../assets/formalwear.png";
import accessories from "../../assets/accessories.png";

// Import Icons
import { PiTShirtLight } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

function ShopByCategory() {
  return (
    <section className="shop-category">

      {/* Section Header */}
      <div className="section-header">

        {/* Section Title */}
        <div>

          <span className="section-subtitle">
            SHOP BY CATEGORY
          </span>

          <h2 className="section-title">
            Find Your Fit
          </h2>

        </div>

        {/* View All */}
        <Link to="/collections" className="view-all">

          VIEW ALL

          <HiArrowLongRight />

        </Link>

      </div>

      {/* Category Cards */}
      <div className="category-grid">

        {/* Casualwear */}
        <div
          className="category-card"
          style={{ backgroundImage: `url(${casualwear})` }}
        >

          <div className="card-overlay">

            <PiTShirtLight className="card-icon" />

            <h3>Casualwear</h3>

            <p>
              Trendy looks for everyday comfort.
            </p>

            <Link
                to="/collections?category=Casualwear"
                className="shop-button"
             >  

              SHOP NOW

              <HiArrowLongRight />

            </Link>

          </div>

        </div>

        {/* Formalwear */}
        <div
          className="category-card"
          style={{ backgroundImage: `url(${formalwear})` }}
        >

          <div className="card-overlay">

            <GiLargeDress className="card-icon" />

            <h3>Formalwear</h3>

            <p>
              Elegant styles for every occasion.
            </p>

             <Link
                  to="/collections?category=Formalwear"
                  className="shop-button"
            >

              SHOP NOW

              <HiArrowLongRight />

           </Link>

          </div>

        </div>

        {/* Accessories */}
        <div
          className="category-card"
          style={{ backgroundImage: `url(${accessories})` }}
        >

          <div className="card-overlay">

            <FiShoppingBag className="card-icon" />

            <h3>Accessories</h3>

            <p>
              Finishing touches to elevate your style.
            </p>

            
            <Link
                 to="/collections?category=Accessories"
                 className="shop-button"
            >

              SHOP NOW

              <HiArrowLongRight />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ShopByCategory;