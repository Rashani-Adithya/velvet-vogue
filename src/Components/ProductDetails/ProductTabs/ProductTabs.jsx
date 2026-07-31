import { useEffect, useState } from "react";

import "./ProductTabs.css";
import { FaStar } from "react-icons/fa";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useAuth } from "../../../context/AuthContext";

import {
    addReview as saveReview,
    getReviews
} from "../../../services/reviewService";


function ProductTabs({ product }) {
    
     const { user } = useAuth();

    const [activeTab, setActiveTab] = useState("description");

    const [showReviewForm, setShowReviewForm] = useState(false);

       const [reviews, setReviews] = useState([]);

       useEffect(() => {

    async function loadReviews() {

        try {

            const data = await getReviews(product.docId);

            setReviews(data);

        } catch (error) {

            console.error(error);

        }

    }

    loadReviews();

}, [product.docId]);


const addReview = async (review) => {

    try {

        await saveReview({

            productId: product.docId,

            uid: user.uid,

            userName: user.displayName || user.email,

            rating: review.rating,

            comment: review.comment

        });

        const updatedReviews = await getReviews(product.docId);

        setReviews(updatedReviews);

    } catch (error) {

        console.error(error);

    }

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
                    Reviews ({reviews.length})
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

            <h2>
    {reviews.length > 0
        ? (
            reviews.reduce(
                (total, review) => total + review.rating,
                0
            ) / reviews.length
        ).toFixed(1)
        : "0.0"} / 5
</h2>

<p>
    Based on {reviews.length} verified customer reviews
</p>

        </div>

        <div className="review-header">

            <button
    className="write-review-btn"
    onClick={() => {

        if (!user) {

            alert("Please login to write a review.");

            return;

        }

        setShowReviewForm(true);

    }}
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

                        <h4>{review.userName}</h4>

                        <span className="verified">

                            Verified Buyer

                        </span>

                    </div>

                    <small>
                         {review.createdAt
                         ? review.createdAt.toDate().toLocaleDateString()
                         : ""}
                        </small>

                </div>

                <div className="review-stars">

                  {[1,2,3,4,5].map((star) => {

    const average =
        reviews.length > 0
            ? reviews.reduce(
                  (total, review) => total + review.rating,
                  0
              ) / reviews.length
            : 0;

    return (

        <FaStar
            key={star}
            color={star <= average ? "#F5B301" : "#ddd"}
        />

    );

})}


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