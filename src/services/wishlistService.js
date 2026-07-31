import { db } from "../firebase/firebase";

import {
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    query,
    where,
    serverTimestamp,
    doc
} from "firebase/firestore";

const wishlistCollection = collection(db, "wishlist");

// Add Product
export const addToWishlist = async (uid, productId) => {

    const q = query(
        wishlistCollection,
        where("uid", "==", uid),
        where("productId", "==", productId)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        return;
    }

    await addDoc(wishlistCollection, {
        uid,
        productId,
        addedAt: serverTimestamp()
    });

};

// Get User Wishlist
export const getWishlist = async (uid) => {

    const q = query(
        wishlistCollection,
        where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
        docId: document.id,
        ...document.data()
    }));

};

// Remove Product
export const removeFromWishlist = async (docId) => {

    await deleteDoc(doc(db, "wishlist", docId));

};