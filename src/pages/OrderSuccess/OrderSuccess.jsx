import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

function OrderSuccess() {

    const orderNumber =
        sessionStorage.getItem("orderNumber") || "VV-000000";
    return (

        <main className="success-page">

            <div className="success-container">

                <div className="success-icon">

                    <FiCheck />

                </div>

                <h1>Order Confirmed!</h1>

                <p className="order-number">

                    Order #{orderNumber}

                </p>

                <p className="success-message">

                    Thank you for shopping with Velvet Vogue.
                    Your order has been placed successfully.

                </p>

                <Link
                    to="/collections"
                    className="continue-btn"
                >

                    CONTINUE SHOPPING

                </Link>

            </div>

        </main>

    );

}

export default OrderSuccess;