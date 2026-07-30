import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../../data/products";

// Sidebar Component
import CollectionSidebar from "../../Components/CollectionSidebar/CollectionSidebar";

// Product Grid Component
import CollectionGrid from "../../Components/CollectionGrid/CollectionGrid";

// Footer
import Footer from "../../Components/Footer/Footer";

// Styles
import "./Collections.css";

function Collections() {

  const [searchParams] = useSearchParams();

  const [category, setCategory] = useState(
  searchParams.get("category") || "All"
);
  const [gender, setGender] = useState("All");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Featured");

  useEffect(() => {
  const selectedCategory = searchParams.get("category") || "All";
  setCategory(selectedCategory);
}, [searchParams]);


let filteredProducts = [...products];

if (category === "Casualwear") {

  filteredProducts = filteredProducts.filter(
    (product) => product.category.includes("Casual")
  );

} else if (category === "Formalwear") {

  filteredProducts = filteredProducts.filter(
    (product) => product.category.includes("Formal")
  );

} else if (category === "Accessories") {

  filteredProducts = filteredProducts.filter(
    (product) => product.category === "Accessories"
  );

}

// Gender filter
if (gender !== "All") {
  filteredProducts = filteredProducts.filter(
    (product) => product.gender === gender
  );
}

// Price filter
if (maxPrice < 50000) {
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= maxPrice
  );
}

// Size filter
if (size !== "All") {
  filteredProducts = filteredProducts.filter(
    (product) => product.sizes.includes(size)
  );
}

// Search filter
if (search.trim() !== "") {
  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}

if (sort === "LowToHigh") {

  filteredProducts.sort((a, b) => a.price - b.price);

}

else if (sort === "HighToLow") {

  filteredProducts.sort((a, b) => b.price - a.price);

}

else if (sort === "Newest") {

  filteredProducts.sort((a, b) => {

    if (a.status === "New" && b.status !== "New") return -1;
    if (a.status !== "New" && b.status === "New") return 1;

    return 0;

  });

}


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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort */}
          <div className="sort-box">
            <select
             value={sort}
             onChange={(e) => setSort(e.target.value)}
             >
              <option value="Featured">Sort: Featured</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
              <option value="Newest">Newest</option>
            </select>
          </div>

          {/* Product Count */}
          <div className="product-count">
            {filteredProducts.length} Products
          </div>

        </div>

        {/* Sidebar + Product Grid */}
        <div className="collections-content">

          {/* Left Sidebar */}
          <div className="sidebar-column">
            <CollectionSidebar 
              category={category}
              setCategory={setCategory}

              gender={gender}
              setGender={setGender}

              size={size}
              setSize={setSize}

              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          

          {/* Right Products */}
          
              <CollectionGrid 
                   products={filteredProducts}
              />
        
          

        </div>

      </main>

     

    </>
  );
}

export default Collections;