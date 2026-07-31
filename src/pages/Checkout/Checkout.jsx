import { useState } from "react";
import productImages from "../../assets/productImages";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
    FiShield,
    FiTruck,
    FiRefreshCw,
    FiLock,
} from "react-icons/fi";

import {
    createOrder,
    addOrderItem
} from "../../services/orderService";

function Checkout() {

    const {
        cartItems,
        totalItems,
        totalPrice,
        clearCart,
    } = useCart();

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: "Sri Lanka",
    phone: "",
    paymentMethod: "Credit / Debit Card"
});

    const handlePayment = async () => {

    if (cartItems.length === 0) {

        alert("Your cart is empty.");
        return;

    }

    if (
        !formData.email ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.address ||
        !formData.city ||
        !formData.postalCode ||
        !formData.phone
    ) {

        alert("Please complete all required fields.");
        return;

    }

    try {

        // Generate Order Number
        const orderNumber = `VV-${Date.now().toString().slice(-6)}`;

        // Save Order
        const orderId = await createOrder({

            orderNumber,

            customerName:
                `${formData.firstName} ${formData.lastName}`,

            email: formData.email,

            firstName: formData.firstName,

            lastName: formData.lastName,

            address: formData.address,

            apartment: formData.apartment,

            city: formData.city,

            postalCode: formData.postalCode,

            country: formData.country,

            phone: formData.phone,

            paymentMethod: formData.paymentMethod,

            totalItems,

            totalAmount: totalPrice,

            status: "Pending"

        });

        // Save Order Items
        for (const item of cartItems) {

            await addOrderItem({

                orderId,

                productId: item.id,

                productName: item.name,

                image: item.image,

                category: item.category,

                gender: item.gender,

                size: item.size,

                colour: item.colour,

                quantity: item.quantity,

                unitPrice: item.price,

                totalPrice: item.price * item.quantity

            });

        }

        sessionStorage.setItem(
            "orderNumber",
            orderNumber
        );

        clearCart();

        navigate("/order-success");

    } catch (error) {

        console.error(error);

        alert("Failed to place order.");

    }

};

     const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));

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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name *"
        />

        <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name *"
        />

    </div>

    <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address *"
    />

    <input
        type="text"
        name="apartment"
        value={formData.apartment}
        onChange={handleChange}
        placeholder="Apartment, suite, etc. (optional)"
    />

    <div className="two-column">

        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City *"
        />

        <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code *"
        />

    </div>

    <div className="two-column">

        <select
            name="country"
            value={formData.country}
            onChange={handleChange}
        >

            <option>
                Sri Lanka
            </option>

        </select>

        <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
                name="paymentMethod"
                value="Credit / Debit Card"
                checked={formData.paymentMethod === "Credit / Debit Card"}
                onChange={handleChange}
            />

            Credit / Debit Card

        </label>

    </div>

    <div className="payment-option">

        <label>

            <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={formData.paymentMethod === "Cash on Delivery"}
                onChange={handleChange}
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
                                 src={
                                    productImages[
                                        item.image.replace("/src/assets/", "")
                                    ]
                                 }
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