import { useEffect, useState } from "react";
import { FaBoxOpen, FaChevronRight } from "react-icons/fa";

import "./RecentOrders.css";

import { useAuth } from "../../../context/AuthContext";
import { getOrders } from "../../../services/orderService";

function RecentOrders() {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        async function loadOrders() {

            if (!user) return;

            try {

                const allOrders = await getOrders();
                console.log("Current User:", user);
console.log("User Email:", user?.email);
console.log("All Orders:", allOrders);

const userOrders = allOrders
    .filter(
        (order) =>
            order.email?.toLowerCase() === user.email?.toLowerCase()
    )
    .sort((a, b) => {

        if (!a.createdAt || !b.createdAt) return 0;

        return b.createdAt.seconds - a.createdAt.seconds;

    });


console.log("Filtered Orders:", userOrders);
                setOrders(userOrders);

            } catch (error) {

                console.error(error);

            }

        }

        loadOrders();

    }, [user]);

    return (

        <div className="orders-card">

            <div className="card-title">

                <FaBoxOpen />

                <h2>Recent Orders</h2>

            </div>

            {orders.length === 0 ? (

                <p className="no-orders">

                    No recent orders found.

                </p>

            ) : (

                orders.map((order) => (

                    <div
                        className="order-item"
                        key={order.docId}
                    >

                        <div>

                            <h3>

                                {order.orderNumber}

                            </h3>

                            <p>

                                {order.createdAt
                                    ? order.createdAt
                                        .toDate()
                                        .toLocaleDateString()
                                    : "Today"}

                            </p>

                        </div>

                        <div className="order-right">

                            <h3>

                                LKR {Number(order.totalAmount).toLocaleString()}

                            </h3>

                            <span>

                                {order.status}

                            </span>

                        </div>

                        <FaChevronRight />

                    </div>

                ))

            )}

        </div>

    );

}

export default RecentOrders;