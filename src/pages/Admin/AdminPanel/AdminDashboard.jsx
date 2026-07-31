import "./AdminDashboard.css";

import { useEffect, useState } from "react";

import { getProducts } from "../../../services/productService";
import { getOrders } from "../../../services/orderService";
import { getUsers } from "../../../services/userService";


function AdminDashboard() {

    const [products, setProducts] = useState(0);

const [orders, setOrders] = useState([]);

const [customers, setCustomers] = useState(0);

const [revenue, setRevenue] = useState(0);

useEffect(() => {

    async function loadDashboard() {

        try {

            const productList = await getProducts();

            const orderList = await getOrders();

            const userList = await getUsers();

            setProducts(productList.length);

            setOrders(orderList);

            setCustomers(userList.length);

            const totalRevenue = orderList.reduce(

                (total, order) =>

                    total + Number(order.totalAmount || 0),

                0

            );

            setRevenue(totalRevenue);

        } catch (error) {

            console.error(error);

        }

    }

    loadDashboard();

}, []);


    

    return (

        <div className="admin-dashboard">

            {/* Statistics */}
            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <p className="card-title">PRODUCTS</p>
                    <h2>{products}</h2>
                    <span>In catalog</span>
                </div>

                <div className="dashboard-card">
                    <p className="card-title">REVENUE</p>
                    <h2>
                       Rs. {revenue.toLocaleString()}
                        </h2>
                    <span>This month</span>
                </div>

                <div className="dashboard-card">
                    <p className="card-title">ORDERS</p>
                    <h2>{orders.length}</h2>
                    <span>Today</span>
                </div>

                <div className="dashboard-card">
                    <p className="card-title">CUSTOMERS</p>
                    <h2>{customers}</h2>
                    <span>Registered</span>
                </div>

            </div>

            {/* Recent Orders */}

            <div className="recent-orders">

                <h2>
                    Recent Orders
                </h2>

                <table>

                    <thead>

                        <tr>

                            <th>Order</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders
    .sort((a, b) => {

        if (!a.createdAt || !b.createdAt) return 0;

        return b.createdAt.seconds - a.createdAt.seconds;

    })
    .slice(0, 5)
    .map((order) => (

                            <tr key={order.docId}>

                                <td>{order.orderNumber}</td>

                                <td>{order.customerName}</td>

                                <td>{order.totalItems}</td>

                                <td>
                                     Rs. {Number(order.totalAmount).toLocaleString()}
                                    </td>

                                <td>

                                    <span
                                        className={`status ${order.status.toLowerCase()}`}
                                    >
                                        {order.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminDashboard;