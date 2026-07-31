// Import CSS
import "./NewArrivals.css";

// React
import { useEffect, useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Cart Context
import { useCart } from "../../context/CartContext";

// Icons
import { FiHeart } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

// Firestore Service
import { getProducts } from "../../services/productService";
import productImages from "../../assets/productImages";

function NewArrivals() {

    const { addToCart } = useCart();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProducts() {

            try {

                const data = await getProducts();

                setProducts(data);

            } catch (error) {

                console.error("Error loading products:", error);

            } finally {

                setLoading(false);

            }

        }

        loadProducts();

    }, []);

    // Display first 5 products
    const newArrivals = products.slice(0, 5);

    if (loading) {
        return <p>Loading New Arrivals...</p>;
    }

    return (

        <section className="new-arrivals">

            {/* Section Header */}

            <div className="arrivals-header">

                <div>

                    <span className="arrivals-subtitle">
                        NEW ARRIVALS
                    </span>

                    <h2 className="arrivals-title">
                        Fresh Styles Just In
                    </h2>

                </div>

                <Link
                    to="/collections"
                    className="view-all-btn"
                >

                    VIEW ALL

                    <HiArrowLongRight />

                </Link>

            </div>

            {/* Products */}

            <div className="products-grid">

                {newArrivals.map((product) => (

                    <Link
                        to={`/collections/${product.id}`}
                        className="product-card"
                        key={product.docId}
                    >

                        {/* Product Image */}

                        <div className="product-image">

                            <span className="new-badge">
                                NEW
                            </span>

                            <button
                                className="wishlist-btn"
                                onClick={(e) => {

                                    e.preventDefault();
                                    e.stopPropagation();

                                }}
                            >
                                <FiHeart />
                            </button>

                            <img
                                 src={
                                        productImages[
                                         product.image.replace("/src/assets/", "")
                                     ]
                                     }
                                 alt={product.name}
                             />

                            <button
                                className="quick-add"
                                onClick={(e) => {

                                    e.preventDefault();
                                    e.stopPropagation();

                                    addToCart(
                                        product,
                                        1,
                                        product.sizes[0],
                                        product.colours[0]
                                    );

                                }}
                            >

                                ADD TO CART

                            </button>

                        </div>

                        {/* Product Details */}

                        <div className="arrival-details">

                            <span className="arrival-category">
                                {product.category.toUpperCase()}
                            </span>

                            <h3 className="arrival-name">
                                {product.name}
                            </h3>

                            <div className="arrival-rating">

                                <span className="stars">
                                    ★★★★★
                                </span>

                                <span className="review-count">
                                    ({product.reviews})
                                </span>

                            </div>

                            <p className="arrival-price">

                                Rs. {Number(product.price ?? 0).toLocaleString()}

                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );

}

export default NewArrivals;