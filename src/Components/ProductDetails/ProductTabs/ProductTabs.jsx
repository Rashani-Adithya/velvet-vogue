import { useState } from "react";
import "./ProductTabs.css";
import { FaStar } from "react-icons/fa";
import ReviewForm from "../ReviewForm/ReviewForm";

function ProductTabs({ product }) {

    const [activeTab, setActiveTab] = useState("description");

    const [showReviewForm, setShowReviewForm] = useState(false);

    const [reviews, setReviews] = useState([
        {
            name: "Nimal Perera",
            rating: 5,
            comment:
                "Excellent quality and very comfortable. The stitching and material exceeded my expectations.",
            date: "18 Jul 2026"
        },
        {
            name: "Sarah Fernando",
            rating: 5,
            comment:
                "Beautiful design and premium fabric. I will definitely purchase another colour.",
            date: "14 Jul 2026"
        },
        {
            name: "Ayesha Silva",
            rating: 5,
            comment:
                "Fast delivery, excellent packaging and the product looks exactly like the photos.",
            date: "08 Jul 2026"
        }
    ]);

    const addReview = (review) => {

        setReviews((prevReviews) => [review, ...prevReviews]);

    };
    
    return (

        <section className="product-tabs">

            <div className="tab-buttons">

                <button
                    className={activeTab === "description" ? "active" : ""}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    className={activeTab === "details" ? "active" : ""}
                    onClick={() => setActiveTab("details")}
                >
                    Details
                </button>

                <button
                    className={activeTab === "reviews" ? "active" : ""}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews ({product.reviews})
                </button>

            </div>

            {/* ================= Description ================= */}

            {activeTab === "description" && (

                <div className="tab-content">

                    <h3>Product Description</h3>

                    <p>{product.description}</p>

                </div>

            )}

            {/* ================= Details ================= */}

            {activeTab === "details" && (

                <div className="tab-content">

                    <h3>Product Information</h3>

                    <table className="details-table">

                        <tbody>

                            <tr>

                                <td>Brand</td>

                                <td>{product.brand}</td>

                            </tr>

                            <tr>

                                <td>Category</td>

                                <td>{product.category}</td>

                            </tr>

                            <tr>

                                <td>Material</td>

                                <td>{product.material}</td>

                            </tr>

                            <tr>

                                <td>Fit</td>

                                <td>{product.fit}</td>

                            </tr>

                            <tr>

                                <td>Available Colours</td>

                                <td>{product.colours.join(", ")}</td>

                            </tr>

                            <tr>

                                <td>Available Sizes</td>

                                <td>{product.sizes.join(", ")}</td>

                            </tr>

                            <tr>

                                <td>SKU</td>

                                <td>{product.sku}</td>

                            </tr>

                            <tr>

                                <td>Stock</td>

                                <td>

                                    {product.stock > 0

                                        ? `${product.stock} Available`

                                        : "Out of Stock"}

                                </td>

                            </tr>

                            <tr>

                                <td>Care Instructions</td>

                                <td>{product.careInstructions}</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            )}

{/* ================= Reviews ================= */}

{activeTab === "reviews" && (

    <div className="tab-content">

        <div className="review-summary">

            <div className="review-stars">

                {[1,2,3,4,5].map((star)=>(

                    <FaStar key={star} />

                ))}

            </div>

            <h2>{product.rating} / 5</h2>

            <p>

                Based on {product.reviews} verified customer reviews

            </p>

        </div>

        <div className="review-header">

            <button

                className="write-review-btn"

                onClick={() => setShowReviewForm(true)}

            >

                Write a Review

            </button>

        </div>

        {reviews.map((review,index)=>(

            <div
                className="review-card"
                key={index}
            >

                <div className="review-top">

                    <div>

                        <h4>{review.name}</h4>

                        <span className="verified">

                            Verified Buyer

                        </span>

                    </div>

                    <small>{review.date}</small>

                </div>

                <div className="review-stars">

                    {[1,2,3,4,5].map((star)=>(

                        <FaStar

                            key={star}

                            color={star<=review.rating ? "#F5B301" : "#ddd"}

                        />

                    ))}

                </div>

                <p>{review.comment}</p>

            </div>

        ))}

    </div>

)}

{showReviewForm && (

    <ReviewForm

        onClose={() => setShowReviewForm(false)}

        onSubmit={addReview}

    />

)}

        </section>

    );

}

export default ProductTabs;