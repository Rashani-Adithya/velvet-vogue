import "./CollectionCard.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function CollectionCard({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart(
            product,
            1, // Quantity
            product.sizes[0], // Default Size
            product.colours[0] // Default Colour
        );
    };

    return (
        <div className="collection-card">

            {/* Product Image */}
            <div className="collection-image-wrapper">

                {/* Status Badge */}
                {product.status && (
                    <span
                        className={`collection-badge ${
                            product.status === "Sale" ? "sale" : "new"
                        }`}
                    >
                        {product.status}
                    </span>
                )}

                {/* Wishlist */}
                <button className="wishlist-btn">
                    <FiHeart />
                </button>

                {/* Image */}
                <Link to={`/collections/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="collection-image"
                    />
                </Link>

                {/* Add to Cart */}
                <button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>

            </div>

            {/* Product Details */}
            <Link
                to={`/collections/${product.id}`}
                className="product-link"
            >
                <div className="collection-content">

                    <p className="collection-category">
                        {product.category}
                    </p>

                    <h3 className="collection-title">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="collection-rating">

                        <div className="stars">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>

                        <span>({product.reviews})</span>

                    </div>

                    {/* Price */}
                    <div className="collection-price">

                        <span className="current-price">
                            Rs. {product.price.toLocaleString()}
                        </span>

                        {product.oldPrice && (
                            <span className="old-price">
                                Rs. {product.oldPrice.toLocaleString()}
                            </span>
                        )}

                    </div>

                </div>
            </Link>

        </div>
    );
}

export default CollectionCard;