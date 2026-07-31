import { useEffect, useState } from "react";

import "./AdminProducts.css";

import productImages from "../../../assets/productImages";

import {
    getProducts,
    deleteProduct
} from "../../../services/productService";


function AdminProducts( {
     setEditingProduct,
    setActiveTab
}) {

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {

        const data = await getProducts();

        setProducts(data);

    };

    useEffect(() => {

        loadProducts();

    }, []);

    const handleDelete = async (docId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await deleteProduct(docId);

            alert("Product deleted successfully!");

            loadProducts();

        } catch (error) {

            console.error(error);

            alert("Failed to delete product.");

        }

    };

    const handleEdit = (product) => {

    setEditingProduct(product);

    setActiveTab("addProduct");

};

    return (

        <div className="admin-products">

            <table>

                <thead>

                    <tr>

                        <th>Product</th>
                        <th>Category</th>
                        <th>Gender</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map((product) => (

                        <tr key={product.docId}>

                            <td>

                                <div className="product-info">

                                    <img
                                        src={
                                            productImages[
                                                product.image.replace("/src/assets/", "")
                                            ]
                                        }
                                        alt={product.name}

                                    />

                                    <span>{product.name}</span>

                                </div>

                            </td>

                            <td>{product.category}</td>

                            <td>{product.gender}</td>

                            <td>
                                Rs. {Number(product.price).toLocaleString()}
                            </td>

                            <td>
                                ⭐ {product.rating}
                            </td>

                            <td>

                                <span className="status active">

                                    {product.status}

                                </span>

                            </td>

                            <td>

                                <button className="edit-btn"
                                        onClick={() => handleEdit(product)}
                                >

                                    Edit

                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(product.docId)}
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default AdminProducts;