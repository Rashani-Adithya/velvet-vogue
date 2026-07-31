import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaUsers,
    FaShoppingBag
} from "react-icons/fa";

import { useAuth } from "../../../context/AuthContext";

import "./AccountDetails.css";
import { useEffect, useState } from "react";
import { getOrders } from "../../../services/orderService";


function AccountDetails() {

    const { user } = useAuth();
    const [totalOrders, setTotalOrders] = useState(0);


    useEffect(() => {

    async function loadOrders() {

        if (!user) return;

        try {

            const allOrders = await getOrders();

            const userOrders = allOrders.filter(
                (order) =>
                    order.email?.trim().toLowerCase() ===
                    user.email?.trim().toLowerCase()
            );

            console.log("Account User Email:", user.email);
console.log("Account Total Orders:", userOrders.length);

            setTotalOrders(userOrders.length);

        } catch (error) {

            console.error(error);

        }

    }

    loadOrders();

}, [user]);

    return (

        <div className="details-card">

            <h2>Account Details</h2>

            <div className="title-line"></div>

            <div className="details-grid">

                {/* Left */}

                <div className="details-column">

                    <div className="detail-item">

                        <div className="detail-icon">
                            <FaUser />
                        </div>

                        <div className="detail-content">

                            <span>FULL NAME</span>

                            <p>{user?.fullName}</p>

                        </div>

                    </div>

                    <div className="detail-item">

                        <div className="detail-icon">
                            <FaEnvelope />
                        </div>

                        <div className="detail-content">

                            <span>EMAIL</span>

                            <p>{user?.email}</p>

                        </div>

                    </div>

                    <div className="detail-item">

                        <div className="detail-icon">
                            <FaPhone />
                        </div>

                        <div className="detail-content">

                            <span>PHONE</span>

                            <p>{user?.phone}</p>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="details-column">

                    <div className="detail-item">

                        <div className="detail-icon">
                            <FaUsers />
                        </div>

                        <div className="detail-content">

                            <span>ACCOUNT TYPE</span>

                            <p>
                                {user?.role === "admin"
                                    ? "Administrator"
                                    : "Customer"}
                            </p>

                        </div>

                    </div>

                    <div className="detail-item">

                        <div className="detail-icon">
                            <FaShoppingBag />
                        </div>

                        <div className="detail-content">

                            <span>TOTAL ORDERS</span>

                            <p>{totalOrders}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AccountDetails;