import { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

import "./SavedItems.css";

import { useAuth } from "../../../context/AuthContext";

import {
    getWishlist,
    removeFromWishlist
} from "../../../services/wishlistService";

import { getProductByDocId } from "../../../services/productService";

import productImages from "../../../assets/productImages";

function SavedItems() {

    const { user } = useAuth();

    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {

        async function loadWishlist() {

            if (!user) return;

            try {

                const wishlist = await getWishlist(user.uid);

                const products = await Promise.all(

                    wishlist.map(async (item) => {

                        const product = await getProductByDocId(
                            item.productId
                        );

                        return {
                            wishlistDocId: item.docId,
                            ...product
                        };

                    })

                );

                setSavedItems(products.filter(Boolean));

            } catch (error) {

                console.error(error);

            }

        }

        loadWishlist();

    }, [user]);

    const handleRemove = async (wishlistDocId) => {

        try {

            await removeFromWishlist(wishlistDocId);

            setSavedItems((previous) =>
                previous.filter(
                    (item) =>
                        item.wishlistDocId !== wishlistDocId
                )
            );

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="saved-card">

            <div className="saved-title">

                <FaHeart />

                <h2>Saved Items</h2>

            </div>

            {savedItems.length === 0 ? (

                <div className="empty-saved">

                    <FaHeart />

                    <p>No saved items yet</p>

                </div>

            ) : (

                savedItems.map((item) => (

                    <div
                        key={item.wishlistDocId}
                        className="saved-product"
                    >

                        <img
                            src={
                                productImages[
                                    item.image.replace(
                                        "/src/assets/",
                                        ""
                                    )
                                ]
                            }
                            alt={item.name}
                            className="saved-image"
                        />

                        <div className="saved-info">

                            <h4>{item.name}</h4>

                            <p>

                                Rs. {item.price.toLocaleString()}

                            </p>

                        </div>

                        <button
                            className="remove-btn"
                            onClick={() =>
                                handleRemove(item.wishlistDocId)
                            }
                        >

                            <FaTrash />

                        </button>

                    </div>

                ))

            )}

        </div>

    );

}

export default SavedItems;