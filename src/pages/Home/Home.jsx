// Hero Section
import Hero from "../../Components/Hero/Hero";

// Shop by Category Section
import ShopByCategory from "../../Components/ShopByCategory/ShopByCategory";

// New Arrivals Section
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

// Promotional Banner Section
import PromotionalBanner from "../../Components/PromotionalBanner/PromotionalBanner";

// Selected Offers Section
import SelectedOffers from "../../Components/SelectedOffers/SelectedOffers";

// Service Features Section
import ServiceFeatures from "../../Components/ServiceFeatures/ServiceFeatures";

// Footer Section
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Shop by Category Section */}
      <ShopByCategory />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Promotional Banner Section */}
      <PromotionalBanner />

      {/* Selected Offers Section */}
      <SelectedOffers />

      {/* Service Features Section */}
      <ServiceFeatures />

      
    </>
  );
}

export default Home;