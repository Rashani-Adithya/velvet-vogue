import "./ProductSidebar.css";

import {
    FaTruck,
    FaUndoAlt,
    FaShieldAlt,
    FaCheckCircle
} from "react-icons/fa";

function ProductSidebar({ product }) {

    return (

        <aside className="product-sidebar">

            <div className="sidebar-card">

                <FaTruck className="sidebar-icon" />

                <div>

                    <h4>Free Delivery</h4>

                    <p>
                        Free shipping on orders over Rs. 10,000.
                    </p>

                </div>

            </div>

            <div className="sidebar-card">

                <FaUndoAlt className="sidebar-icon" />

                <div>

                    <h4>Easy Returns</h4>

                    <p>
                        Return or exchange within 14 days.
                    </p>

                </div>

            </div>

            <div className="sidebar-card">

                <FaCheckCircle className="sidebar-icon" />

                <div>

                    <h4>Availability</h4>

                    <p>

                        {product.stock > 0
                            ? `${product.stock} items in stock`
                            : "Out of Stock"}

                    </p>

                </div>

            </div>

            <div className="sidebar-card">

                <FaShieldAlt className="sidebar-icon" />

                <div>

                    <h4>Secure Payment</h4>

                    <p>

                        100% secure checkout with SSL encryption.

                    </p>

                </div>

            </div>

        </aside>

    );

}

export default ProductSidebar;