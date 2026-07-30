// Styles
import "./Footer.css";

// Logo
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      {/* Footer Content */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">

            <img
              src={logo}
              alt="Velvet Vogue Logo"
            />

            <span>ANURADHAPURA</span>

          </div>

          <p className="footer-description">
            Discover timeless fashion with Velvet Vogue. From elegant formal
            wear to modern casual collections, we bring premium quality and
            effortless style to every wardrobe.
          </p>

        </div>

        {/* Collections */}
        <div className="footer-column">

          <h4>COLLECTIONS</h4>

          <ul>
            <li>New Arrivals</li>
            <li>Casual Wear</li>
            <li>Formal Wear</li>
            <li>Accessories</li>
          </ul>

        </div>

        {/* Customer Care */}
        <div className="footer-column">

          <h4>CUSTOMER CARE</h4>

          <ul>
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h4>CONTACT</h4>

          <ul>
            <li>Anuradhapura, Sri Lanka</li>
            <li>+94 71 234 5678</li>
            <li>hello@velvetvogue.lk</li>
            <li>Mon - Sat | 9.00 AM - 6.00 PM</li>
          </ul>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        {/* Left Side */}
        <p>
          © 2025 Velvet Vogue — John Finlo. All prices in Sri Lankan Rupees (LKR).
        </p>

        {/* Right Side */}
        <p>
          Website Designed & Developed by Rashani Adithya
        </p>

      </div>

    </footer>
  );
}

export default Footer;