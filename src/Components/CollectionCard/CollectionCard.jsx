import "./CollectionCard.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import productImages from "../../assets/productImages";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

import {
    addToWishlist,
    removeFromWishlist,
    getWishlist
} from "../../services/wishlistService";


function CollectionCard({ product }) {
    const { addToCart } = useCart();

    const { user } = useAuth();

const [saved, setSaved] = useState(false);
const [wishlistDocId, setWishlistDocId] = useState(null);

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

    useEffect(() => {

    async function loadWishlist() {

        if (!user) return;

        const wishlist = await getWishlist(user.uid);

        const item = wishlist.find(
            (w) => w.productId === product.docId
        );

        if (item) {

            setSaved(true);
            setWishlistDocId(item.docId);

        }

    }

    loadWishlist();

}, [user, product.docId]);


const handleWishlist = async (e) => {

    e.preventDefault();
    e.stopPropagation();

    if (!user) {

        alert("Please login first.");

        return;

    }

    if (saved) {

        await removeFromWishlist(wishlistDocId);

        setSaved(false);
        setWishlistDocId(null);

    } else {

        await addToWishlist(user.uid, product.docId);

        const wishlist = await getWishlist(user.uid);

        const item = wishlist.find(
            (w) => w.productId === product.docId
        );

        if (item) {

            setWishlistDocId(item.docId);

        }

        setSaved(true);

    }

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
                <button className="wishlist-btn"
                         onClick={handleWishlist}
                >
                     {saved ? <FaHeart /> : <FiHeart />}
                </button>

                {/* Image */}
                <Link to={`/collections/${product.id}`}>
                    <img
                       src={
                             productImages[
                                      product.image.replace("/src/assets/", "")
                             ]
                        }
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
