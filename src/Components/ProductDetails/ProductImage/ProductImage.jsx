import "./ProductImage.css";
import { FaHeart } from "react-icons/fa";
import productImages from "../../../assets/productImages";

function ProductImage({ product }) {

    return (

        <section className="product-image-section">

            <div className="product-image-container">

                <img
    src={
        productImages[
            product.image.replace("/src/assets/", "")
        ]
    }
    alt={product.name}
    className="product-image"
/>

                {/* Status Badge */}

                {product.status && (

                    <span className={`image-badge ${product.status.toLowerCase()}`}>

                        {product.status}

                    </span>

                )}

                {/* Wishlist Button */}

                <button
                    className="wishlist-btn"
                    aria-label="Add to Wishlist"
                >

                    <FaHeart />

                </button>

            </div>

        </section>

    );

}

export default ProductImage;