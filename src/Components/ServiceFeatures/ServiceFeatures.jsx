// Styles
import "./ServiceFeatures.css";

// Icons
import {
  FiTruck,
  FiRefreshCw,
  FiLock,
  FiHeadphones,
} from "react-icons/fi";

// Service Data
const services = [
  {
    icon: <FiTruck />,
    title: "Islandwide Delivery",
    description:
      "Free on orders above Rs. 5,000. All districts covered.",
  },
  {
    icon: <FiRefreshCw />,
    title: "30-Day Returns",
    description:
      "No-questions-asked returns within 30 days of delivery.",
  },
  {
    icon: <FiLock />,
    title: "Secure Checkout",
    description:
      "SSL-encrypted payments. Your data is always protected.",
  },
  {
    icon: <FiHeadphones />,
    title: "Customer Support",
    description:
      "Mon – Sat, 9 AM – 6 PM. Reach us at +94 712345678.",
  },
];

function ServiceFeatures() {
  return (
    <section className="service-features">

      {/* Service Grid */}
      <div className="service-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
          >

            {/* Service Icon */}
            <div className="service-icon">
              {service.icon}
            </div>

            {/* Accent Line */}
            <div className="service-line"></div>

            {/* Service Title */}
            <h3 className="service-title">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="service-description">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ServiceFeatures;