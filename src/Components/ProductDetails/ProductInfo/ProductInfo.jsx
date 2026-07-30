import { useState } from "react";
import "./ProductInfo.css";
import { FaStar} from "react-icons/fa";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColour, setSelectedColour] = useState(product.colours[0]);

    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (

        <section className="product-info">

           
            {/* Product Name */}

            <h1 className="product-name">

                {product.name}

            </h1>

            {/* Rating */}

            <div className="product-rating">

                <div className="stars">

                    {[1, 2, 3, 4, 5].map((star) => (

                        <FaStar key={star} />

                    ))}

                </div>

                <span>

                    {product.rating} ({product.reviews} Reviews)

                </span>

            </div>

            {/* Price */}

            <div className="product-price">

                <span className="current-price">

                    Rs. {product.price.toLocaleString()}

                </span>

                {product.oldPrice && (

                    <span className="old-price">

                        Rs. {product.oldPrice.toLocaleString()}

                    </span>

                )}

            </div>

            {/* Stock */}

            <div className="stock-status">

                {product.stock > 0 ? (

                    <span className="in-stock">

                        ✔ In Stock

                    </span>

                ) : (

                    <span className="out-stock">

                        ✖ Out of Stock

                    </span>

                )}

            </div>

            {/* Description */}

            <p className="product-description">

                {product.shortDescription}

            </p>

            <hr className="product-divider" />

            {/* Colour */}

            <div className="product-option">

                <label>Colour</label>

                <div className="colour-options">

                    {product.colours.map((colour) => (

                        <button

                            key={colour}

                            className={`colour ${colour.toLowerCase().replace(/\s+/g, "-")} ${selectedColour === colour ? "active-colour" : ""}`}

                            onClick={() => setSelectedColour(colour)}

                            title={colour}

                        />

                    ))}

                </div>

            </div>

            {/* Size */}

            <div className="product-option">

                <label>Size</label>

                <div className="size-options">

                    {product.sizes.map((size) => (

                        <button

                            key={size}

                            className={selectedSize === size ? "active-size" : ""}

                            onClick={() => setSelectedSize(size)}

                        >

                            {size}

                        </button>

                    ))}

                </div>

            </div>

            <hr className="product-divider" />

            {/* Quantity */}

            <div className="quantity-section">

                <label>Quantity</label>

                <div className="quantity-box">

                    <button

                        onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                        }

                    >

                        −

                    </button>

                    <span>

                        {quantity}

                    </span>

                    <button

                        onClick={() =>
                            setQuantity(quantity + 1)
                        }

                    >

                        +

                    </button>

                </div>

            </div>

            {/* Buttons */}

            <div className="product-buttons">

                <button

                    className="add-cart"

                    disabled={product.stock === 0}

                    onClick={() => {

                        addToCart(

                            product,
                            quantity,
                            selectedSize,
                            selectedColour

                        );

                    }}

                >

                    <span>

                        {product.stock === 0
                            ? "Out of Stock"
                            : "Add to Cart"}

                    </span>

                </button>

                <button

                    className="buy-now"

                    onClick={() => {

                        addToCart(

                            product,
                            quantity,
                            selectedSize,
                            selectedColour

                        );

                        navigate("/cart");

                    }}

                >

                    <span>

                        Buy Now

                    </span>

                </button>

            </div>

        </section>

    );

}

export default ProductInfo;