// Styles
import "./SelectedOffers.css";

// React
import { useEffect, useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Cart Context
import { useCart } from "../../context/CartContext";

// Firestore Service
import { getProducts } from "../../services/productService";
import productImages from "../../assets/productImages";

// Icons
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";

function SelectedOffers() {

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

    // Sale products
    const saleProducts = products.filter(
        (product) => product.status === "Sale"
    );

    if (loading) {
        return <p>Loading Selected Offers...</p>;
    }

    return (

        <section className="selected-offers">

            {/* Header */}

            <div className="offers-header">

                <div className="offers-heading">

                    <span className="offers-subtitle">
                        ON SALE
                    </span>

                    <h2 className="offers-title">
                        Selected Offers
                    </h2>

                </div>

                <Link
                    to="/collections"
                    className="offers-view-btn"
                >

                    <span>VIEW ALL</span>

                    <IoArrowForward />

                </Link>

            </div>

            {/* Products */}

            <div className="offers-grid">

                {saleProducts.map((product) => (

                    <Link
                        key={product.docId}
                        to={`/collections/${product.id}`}
                        className="offer-card"
                    >

                        {/* Product Image */}

                        <div className="offer-image">

                            <span className="sale-badge">
                                SALE
                            </span>

                            <button
                                className="offer-wishlist"
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
                                className="offer-cart-btn"
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

                        <div className="offer-details">

                            <p className="offer-category">
                                {product.category.toUpperCase()}
                            </p>

                            <h3 className="offer-name">
                                {product.name}
                            </h3>

                            <div className="offer-rating">

                                {[1, 2, 3, 4, 5].map((star) => (

                                    <FaStar
                                        key={star}
                                    />

                                ))}

                                <span>
                                    ({product.reviews})
                                </span>

                            </div>

                            <div className="offer-price">

                                <span className="current-price">

                                    Rs. {Number(product.price ?? 0).toLocaleString()}

                                </span>

                                {product.oldPrice && (

                                    <span className="old-price">

                                        Rs. {Number(product.oldPrice).toLocaleString()}

                                    </span>

                                )}

                                {product.oldPrice && (

                                    <span className="discount">

                                        {Math.round(
                                            ((product.oldPrice - product.price) /
                                                product.oldPrice) * 100
                                        )}% OFF

                                    </span>

                                )}

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );

}

export default SelectedOffers;