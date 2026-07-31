import { db } from "../firebase/firebase";

import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp
} from "firebase/firestore";

const reviewCollection = collection(db, "reviews");

// Add Review
export async function addReview(reviewData) {

    await addDoc(reviewCollection, {
        ...reviewData,
        createdAt: serverTimestamp()
    });

}

// Get Reviews of One Product
export async function getReviews(productId) {

   const q = query(
    reviewCollection,
    where("productId", "==", productId)
);

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data()
    }));

}