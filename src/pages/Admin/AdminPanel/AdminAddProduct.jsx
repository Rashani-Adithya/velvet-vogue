import { useEffect, useState } from "react";
import "./AdminAddProduct.css";

import {
    addProduct,
    getProducts,
    updateProduct
} from "../../../services/productService";
import productImages from "../../../assets/productImages";


function AdminAddProduct( {
    editingProduct,
    setEditingProduct,
    setActiveTab
}) {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");

    const [category, setCategory] = useState("Casual");
    const [gender, setGender] = useState("Women");
    const [status, setStatus] = useState("Active");

    const [price, setPrice] = useState("");
    const [oldPrice, setOldPrice] = useState("");

    const [stock, setStock] = useState("");
    const [sku, setSku] = useState("");

    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");

    const [material, setMaterial] = useState("");
    const [fit, setFit] = useState("");

    const [careInstructions, setCareInstructions] = useState("");

    const [image, setImage] = useState("");

    const [sizes, setSizes] = useState([]);
    const [colours, setColours] = useState([]);

    const handleSizeChange = (size) => {

        if (sizes.includes(size)) {
            setSizes(sizes.filter(item => item !== size));
        } else {
            setSizes([...sizes, size]);
        }

    };

    const handleColourChange = (colour) => {

        if (colours.includes(colour)) {
            setColours(colours.filter(item => item !== colour));
        } else {
            setColours([...colours, colour]);
        }

    };
// Add this function here
const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const product = {

            id: editingProduct
                ? editingProduct.id
                : (
                    (await getProducts()).length > 0
                        ? Math.max(...(await getProducts()).map(product => product.id)) + 1
                        : 1
                ),

            name,
            image,
            category,
            gender,
            status,

            price: Number(price),

            oldPrice:
                oldPrice === ""
                    ? null
                    : Number(oldPrice),

            rating: editingProduct
                ? editingProduct.rating
                : 0,

            reviews: editingProduct
                ? editingProduct.reviews
                : 0,

            brand,

            colours,

            sizes,

            stock: Number(stock),

            sku,

            material,

            fit,

            shortDescription,

            description,

            careInstructions

        };

        if (editingProduct) {

            await updateProduct(editingProduct.docId, product);

            alert("Product updated successfully!");

        } else {

            await addProduct(product);

            alert("Product added successfully!");

        }

        setEditingProduct(null);

        setActiveTab("products");

    } catch (error) {

        console.error(error);

        alert("Something went wrong.");

    }

};

useEffect(() => {

    if (editingProduct) {

        setName(editingProduct.name || "");
        setBrand(editingProduct.brand || "");
        setCategory(editingProduct.category || "Casual");
        setGender(editingProduct.gender || "Women");
        setStatus(editingProduct.status || "Active");

        setPrice(editingProduct.price || "");
        setOldPrice(editingProduct.oldPrice || "");

        setStock(editingProduct.stock || "");
        setSku(editingProduct.sku || "");

        setShortDescription(editingProduct.shortDescription || "");
        setDescription(editingProduct.description || "");

        setMaterial(editingProduct.material || "");
        setFit(editingProduct.fit || "");

        setCareInstructions(editingProduct.careInstructions || "");

        setImage(editingProduct.image || "");

        setSizes(editingProduct.sizes || []);
        setColours(editingProduct.colours || []);

    }

}, [editingProduct]);


    return (

        <div className="add-product">

            <h2>Add New Product</h2>

            <form className="product-form"
                    onSubmit={handleSubmit}
            >

                <h3>Basic Information</h3>

                <div className="form-group">

                    <label>Product Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                    />

                </div>

                <div className="form-group">

                    <label>Brand</label>

                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Enter brand name"
                    />

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Casual</option>
                            <option>Formal</option>
                            <option>Party Wear</option>
                            <option>Accessories</option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label>Gender</label>

                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option>Women</option>
                            <option>Men</option>
                            <option>Unisex</option>
                        </select>

                    </div>

                </div>

                <div className="form-group">

                    <label>Status</label>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Out of Stock</option>
                    </select>

                </div>


                <h3>Pricing</h3>

                <div className="form-row">

                    <div className="form-group">

                        <label>Price</label>

                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0.00"
                        />

                    </div>

                    <div className="form-group">

                        <label>Old Price</label>

                        <input
                            type="number"
                            value={oldPrice}
                            onChange={(e) => setOldPrice(e.target.value)}
                            placeholder="0.00"
                        />

                    </div>

                </div>


                <h3>Inventory</h3>

                <div className="form-row">

                    <div className="form-group">

                        <label>Stock Quantity</label>

                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            placeholder="0"
                        />

                    </div>

                    <div className="form-group">

                        <label>SKU</label>

                        <input
                            type="text"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                            placeholder="VV001"
                        />

                    </div>

                </div>


                <h3>Descriptions</h3>

                <div className="form-group">

                    <label>Short Description</label>

                    <textarea
                        rows="3"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        placeholder="Enter short description"
                    />

                </div>

                <div className="form-group">

                    <label>Full Description</label>

                    <textarea
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter full description"
                    />

                </div>


                <h3>Product Details</h3>

                <div className="form-group">

                    <label>Material</label>

                    <input
                        type="text"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        placeholder="Cotton"
                    />

                </div>

                <div className="form-group">

                    <label>Fit</label>

                    <input
                        type="text"
                        value={fit}
                        onChange={(e) => setFit(e.target.value)}
                        placeholder="Regular Fit"
                    />

                </div>

                <div className="form-group">

                    <label>Care Instructions</label>

                    <textarea
                        rows="3"
                        value={careInstructions}
                        onChange={(e) => setCareInstructions(e.target.value)}
                        placeholder="Machine wash cold"
                    />

                </div>


                <h3>Available Colours</h3>

                <div className="sizes">

                    {["Black", "White", "Blue", "Red", "Green", "Brown"].map(colour => (

                        <label key={colour}>

                            <input
                                type="checkbox"
                                checked={colours.includes(colour)}
                                onChange={() => handleColourChange(colour)}
                            />

                            {colour}

                        </label>

                    ))}

                </div>


                <h3>Available Sizes</h3>

                <div className="sizes">

                    {["XS", "S", "M", "L", "XL"].map(size => (

                        <label key={size}>

                            <input
                                type="checkbox"
                                checked={sizes.includes(size)}
                                onChange={() => handleSizeChange(size)}
                            />

                            {size}

                        </label>

                    ))}

                </div>


                <h3>Product Image</h3>

                <div className="form-group">

                    <label>Image File Name</label>

                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="women-dress-01.jpg"
                    />

                </div>


                <button
                    type="submit"
                    className="save-btn"
                >
                   {editingProduct ? "Update Product" : "Save Product"}
                </button>

            </form>

        </div>

    );

}

export default AdminAddProduct;