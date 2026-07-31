import { useState } from "react";

import "./AdminPanel.css";

import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminAddProduct from "./AdminAddProduct";

function AdminPanel() {

    const [activeTab, setActiveTab] = useState("dashboard");

    const [editingProduct, setEditingProduct] = useState(null);

    return (

        <div className="admin-panel">

            <div className="admin-header">

                <div>

                    <span className="admin-subtitle">
                        VELVET VOGUE
                    </span>

                    <h1>
                        Admin Panel
                    </h1>

                </div>

                

            </div>

            <div className="admin-tabs">

                <button
                    className={activeTab === "dashboard" ? "active" : ""}
                    onClick={() => setActiveTab("dashboard")}
                >
                    Dashboard
                </button>

                <button
                    className={activeTab === "products" ? "active" : ""}
                    onClick={() => setActiveTab("products")}
                >
                    Products
                </button>

                <button
                    className={activeTab === "addProduct" ? "active" : ""}
                    onClick={() => {

                        setEditingProduct(null);

                        setActiveTab("addProduct");

                    }}
                >
                    Add Product
                </button>

            </div>

            <div className="admin-content">

                {activeTab === "dashboard" && <AdminDashboard />}

                {activeTab === "products" && (

                    <AdminProducts
                        setEditingProduct={setEditingProduct}
                        setActiveTab={setActiveTab}
                    />

                )}

                {activeTab === "addProduct" && (

                    <AdminAddProduct
                        editingProduct={editingProduct}
                        setEditingProduct={setEditingProduct}
                        setActiveTab={setActiveTab}
                    />

                )}

            </div>

        </div>

    );

}

export default AdminPanel;