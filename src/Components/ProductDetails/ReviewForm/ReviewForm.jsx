import { useState } from "react";
import "./ReviewForm.css";
import { FaStar } from "react-icons/fa";

function ReviewForm({ onClose, onSubmit }) {

    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name.trim() || !comment.trim()) {

            alert("Please complete all fields.");

            return;

        }

        onSubmit({

            name,
            rating,
            comment,
            date: new Date().toLocaleDateString()

        });

        onClose();

    };

    return (

        <div className="review-overlay">

            <div className="review-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2>Write a Review</h2>

                <form onSubmit={handleSubmit}>

                    <label>Your Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name"
                    />

                    <label>Your Rating</label>

                    <div className="rating-select">

                        {[1,2,3,4,5].map((star)=>(

                            <FaStar

                                key={star}

                                onClick={()=>setRating(star)}

                                onMouseEnter={()=>setHover(star)}

                                onMouseLeave={()=>setHover(0)}

                                className={
                                    star <= (hover || rating)
                                        ? "active-star"
                                        : ""
                                }

                            />

                        ))}

                    </div>

                    <label>Your Review</label>

                    <textarea

                        rows="5"

                        value={comment}

                        onChange={(e)=>setComment(e.target.value)}

                        placeholder="Write your experience..."

                    />

                    <div className="review-actions">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Submit Review
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default ReviewForm;