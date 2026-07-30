// Sidebar Component
import CollectionSidebar from "../../Components/CollectionSidebar/CollectionSidebar";

// Product Grid Component
import CollectionGrid from "../../Components/CollectionGrid/CollectionGrid";

// Footer
import Footer from "../../Components/Footer/Footer";

// Styles
import "./Collections.css";

function Collections() {
  return (
    <>
      {/* Collections Page */}
      <main className="collections-page">

        {/* Breadcrumb & Page Title */}
        <div className="collections-top">

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>HOME</span>

            <span className="separator">›</span>

            <span className="active">
              COLLECTIONS
            </span>
          </div>

          {/* Page Title */}
          <h1 className="collections-title">
            All Collections
          </h1>

        </div>

        {/* Search, Sort & Product Count */}
        <div className="collections-toolbar">

          {/* Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name..."
            />
          </div>

          {/* Sort */}
          <div className="sort-box">
            <select>
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Product Count */}
          <div className="product-count">
            12 Products
          </div>

        </div>

        {/* Sidebar + Product Grid */}
        <div className="collections-content">

          {/* Left Sidebar */}
          <div className="sidebar-column">
            <CollectionSidebar />
          </div>
          

          {/* Right Products */}
          
              <CollectionGrid />
        
          

        </div>

      </main>

     

    </>
  );
}

export default Collections;