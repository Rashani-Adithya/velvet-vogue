import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems,
    } = useCart();

    return (
        <main className="cart-page">
            <div className="cart-container">

                {/* Left Side */}
                <section className="shopping-bag">

                    <h1>Shopping Cart</h1>

                    <p className="item-count">
                       {totalItems} {totalItems === 1 ? "Item" : "Items"}  
                    </p>

                    {cartItems.length > 0 && (
                        <div className="cart-header">
                            <span>PRODUCT</span>
                            <span>COLOUR / SIZE</span>
                            <span>QTY</span>
                            <span>TOTAL</span>
                        </div>
                    )}

                    {cartItems.length === 0 ? (

                        <div className="empty-cart">
                            <h2>Your shopping bag is empty.</h2>

                            <p>
                              Looks like you haven't added anything yet.
                            </p>

                            <Link
                                to="/collections"
                                className="continue-shopping"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>

                    ) : (

                        cartItems.map((item) => (

                            <div
                                className="cart-item"
                                key={`${item.id}-${item.size}-${item.colour}`}
                            >

                                <div className="product-info">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>
                                        <h3>{item.name}</h3>

                                        <p className="price">
                                            Rs. {item.price.toLocaleString()}
                                        </p>
                                    </div>

                                </div>

                                <div className="product-options">
                                    <p>{item.colour}</p>
                                    <span>Size {item.size}</span>
                                </div>

                                <div className="quantity">

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.size,
                                                item.colour,
                                                item.quantity - 1
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.size,
                                                item.colour,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <div className="product-total">

                                    <h3>
                                        Rs. {(item.price * item.quantity).toLocaleString()}
                                    </h3>

                                </div>

                                <button
                                    className="remove-item"
                                    onClick={() =>
                                        removeFromCart(
                                            item.id,
                                            item.size,
                                            item.colour
                                        )
                                    }
                                >
                                    ×
                                </button>

                            </div>

                        ))

                    )}

                    {cartItems.length > 0 && (
                        <Link
                            to="/collections"
                            className="continue-shopping"
                        >
                            ← Continue Shopping
                        </Link>
                    )}

                </section>

                {/* Right Side */}
                <aside className="order-summary">

                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>Rs. {totalPrice.toLocaleString()}</span>
                    </div>

                    <div className="summary-row">
                        <span>Delivery</span>
                        <span className="free">
                             {cartItems.length > 0 ? "Complimentary" : "-"}
                        </span>
                    </div>

                    <hr />

                    <div className="summary-total">
                        <span>Total</span>
                        <span>Rs. {totalPrice.toLocaleString()}</span>
                    </div>

                    <div className="promo">

                        <input
                            type="text"
                            placeholder="Promo code"
                        />

                        <button>APPLY</button>

                    </div>
                    
                    <Link to="/checkout">
                    <button 
                        className="checkout-btn"
                        disabled={cartItems.length === 0}
                        >
                        PROCEED TO CHECKOUT
                    </button>
                    </Link>

                    <p className="secure">
                        SSL-encrypted • Secure payment
                    </p>

                </aside>

            </div>
        </main>
    );
}

export default Cart;