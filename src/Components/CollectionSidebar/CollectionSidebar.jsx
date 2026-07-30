import { useState } from "react";
import "./CollectionSidebar.css";

function CollectionSidebar() {

  // Selected Filters
  const [category, setCategory] = useState("All");
  const [gender, setGender] = useState("All");
  const [size, setSize] = useState("All");

  return (
    <aside className="collection-sidebar">

      {/* Category */}
      <div className="filter-section">

        <h3>Category</h3>

        <div className="filter-buttons">

          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={category === "Casualwear" ? "active" : ""}
            onClick={() => setCategory("Casualwear")}
          >
            Casualwear
          </button>

          <button
            className={category === "Accessories" ? "active" : ""}
            onClick={() => setCategory("Accessories")}
          >
            Accessories
          </button>

          <button
            className={category === "Formalwear" ? "active" : ""}
            onClick={() => setCategory("Formalwear")}
          >
            Formalwear
          </button>

        </div>

      </div>

      {/* Gender */}
      <div className="filter-section">

        <h3>Gender</h3>

        <div className="filter-buttons">

          <button
            className={gender === "All" ? "active" : ""}
            onClick={() => setGender("All")}
          >
            All
          </button>

          <button
            className={gender === "Men" ? "active" : ""}
            onClick={() => setGender("Men")}
          >
            Men
          </button>

          <button
            className={gender === "Women" ? "active" : ""}
            onClick={() => setGender("Women")}
          >
            Women
          </button>

          

        </div>

      </div>

      {/* Price */}
      <div className="filter-section">

        <h3>Max Price</h3>

        <input
          type="range"
          min="1000"
          max="50000"
          defaultValue="50000"
          className="price-slider"
        />

        <div className="price-values">
          <span>Rs. 1,000</span>
          <span>Rs. 50,000</span>
        </div>

      </div>

      {/* Size */}
      <div className="filter-section">

        <h3>Size</h3>

        <div className="size-buttons">

          <button
            className={size === "All" ? "active" : ""}
            onClick={() => setSize("All")}
          >
            All
          </button>

          <button
            className={size === "XS" ? "active" : ""}
            onClick={() => setSize("XS")}
          >
            XS
          </button>

          <button
            className={size === "S" ? "active" : ""}
            onClick={() => setSize("S")}
          >
            S
          </button>

          <button
            className={size === "M" ? "active" : ""}
            onClick={() => setSize("M")}
          >
            M
          </button>

          <button
            className={size === "L" ? "active" : ""}
            onClick={() => setSize("L")}
          >
            L
          </button>

          <button
            className={size === "XL" ? "active" : ""}
            onClick={() => setSize("XL")}
          >
            XL
          </button>

          <button
            className={size === "XXL" ? "active" : ""}
            onClick={() => setSize("XXL")}
          >
            XXL
          </button>

        </div>

      </div>

      {/* Clear Filters */}
      <button
        className="clear-btn"
        onClick={() => {
          setCategory("All");
          setGender("All");
          setSize("All");
        }}
      >
        CLEAR FILTERS
      </button>

    </aside>
  );
}

export default CollectionSidebar;