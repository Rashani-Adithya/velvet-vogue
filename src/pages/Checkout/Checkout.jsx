import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
    FiShield,
    FiTruck,
    FiRefreshCw,
    FiLock,
} from "react-icons/fi";

function Checkout() {

    const {
        cartItems,
        totalItems,
        totalPrice,
    } = useCart();

    const navigate = useNavigate();

    const handlePayment = () => {

          // Generate a simple order number
          const orderNumber = `VV-${Date.now().toString().slice(-6)}`;

         // Save it for the Order Success page
          sessionStorage.setItem("orderNumber", orderNumber);

        // Go to Order Success page
        navigate("/order-success");

     };

    return (

        <main className="checkout-page">

            <div className="checkout-container">

                {/* Left Side */}

                <section className="checkout-left">

                    <div className="breadcrumb">

                        <Link to="/">Home</Link>

                        <span>›</span>

                        <span>Checkout</span>

                    </div>

                    <h1>Checkout</h1>

                    <p className="login-text">
                        Already have an account?
                        <Link to="/account"> Login</Link>
                    </p>

                    {/* Contact */}

                    <div className="checkout-section">

                        <h3>1. Contact Information</h3>

                        <input
                            type="email"
                            placeholder="Email address *"
                        />

                        <label className="checkbox">

                            <input type="checkbox" />

                            Keep me updated with news and exclusive offers

                        </label>

                    </div>

                    {/* Shipping */}

                    <div className="checkout-section">

                        <h3>2. Shipping Address</h3>

                        <div className="two-column">

                            <input
                                type="text"
                                placeholder="First name *"
                            />

                            <input
                                type="text"
                                placeholder="Last name *"
                            />

                        </div>

                        <input
                            type="text"
                            placeholder="Address *"
                        />

                        <input
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                        />

                        <div className="two-column">

                            <input
                                type="text"
                                placeholder="City *"
                            />

                            <input
                                type="text"
                                placeholder="Postal Code *"
                            />

                        </div>

                        <div className="two-column">

                            <select>

                                <option>
                                    Sri Lanka
                                </option>

                            </select>

                            <input
                                type="text"
                                placeholder="Phone Number *"
                            />

                        </div>

                        <label className="checkbox">

                            <input type="checkbox" />

                            Save this information for next time

                        </label>

                    </div>

                    {/* Shipping Method */}

                    <div className="checkout-section">

                        <h3>3. Shipping Method</h3>

                        <div className="shipping-box">

                            <div>

                                <strong>
                                    Standard Delivery
                                </strong>

                                <p>
                                    Delivery within 2–3 business days
                                </p>

                            </div>

                            <span className="free">
                                Complimentary
                            </span>

                        </div>

                    </div>

                    {/* Payment */}

                    <div className="checkout-section">

                        <h3>4. Payment Method</h3>

                        <div className="payment-option">

                            <label>

                                <input
                                    type="radio"
                                    name="payment"
                                    defaultChecked
                                />

                                Credit / Debit Card

                            </label>

                        </div>

                        <div className="payment-option">

                            <label>

                                <input
                                    type="radio"
                                    name="payment"
                                />

                                Cash on Delivery

                            </label>

                        </div>

                    </div>

                    <div className="checkout-footer">

                        <Link to="/cart">
                            ← Return to Cart
                        </Link>

                        <button
                            className="pay-btn"
                            onClick={handlePayment}
                            disabled={cartItems.length === 0}
                        >
                            PAY NOW
                        </button>

                    </div>

                    <p className="secure-payment">

                        <FiLock />

                        SSL-encrypted • Secure Payment

                    </p>

                </section>

                {/* Right Side */}

                <aside className="checkout-right">

                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (

                        <div
                            className="summary-product"
                            key={`${item.id}-${item.size}-${item.colour}`}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="summary-details">

                                <h4>{item.name}</h4>

                                <p>
                                    {item.colour} / {item.size}
                                </p>

                                <p>
                                    Qty: {item.quantity}
                                </p>

                            </div>

                            <strong>

                                Rs. {(item.price * item.quantity).toLocaleString()}

                            </strong>

                        </div>

                    ))}

                    <hr />

                    <div className="summary-row">

                        <span>Subtotal</span>

                        <span>
                            Rs. {totalPrice.toLocaleString()}
                        </span>

                    </div>

                    <div className="summary-row">

                        <span>Delivery</span>

                        <span className="free">
                            Complimentary
                        </span>

                    </div>

                    <hr />

                    <div className="summary-total">

                        <span>Total</span>

                        <span>
                            Rs. {totalPrice.toLocaleString()}
                        </span>

                    </div>

                    <div className="checkout-benefits">

                        <div>

                            <FiShield />

                            <span>
                                Your information is protected
                            </span>

                        </div>

                        <div>

                            <FiTruck />

                            <span>
                                Free Delivery
                            </span>

                        </div>

                        <div>

                            <FiRefreshCw />

                            <span>
                                30-Day Returns
                            </span>

                        </div>

                        <div>

                            <FiLock />

                            <span>
                                Secure Checkout
                            </span>

                        </div>

                    </div>

                </aside>

            </div>

        </main>

    );

}

export default Checkout;