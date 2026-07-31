import {
    collection,
    getDocs,
    query,
    where,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";


// =============================
// Get All Products
// =============================
export async function getProducts() {

    try {

        const productsRef = collection(db, "products");
        const snapshot = await getDocs(productsRef);

        return snapshot.docs.map(doc => ({
            docId: doc.id,
            ...doc.data()
        }));

    } catch (error) {

        console.error("Error getting products:", error);
        return [];

    }

}


// =============================
// Get Product By ID
// =============================
export async function getProductById(productId) {

    try {

        const productsRef = collection(db, "products");

        const q = query(
            productsRef,
            where("id", "==", productId)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return null;
        }

        return {
            docId: snapshot.docs[0].id,
            ...snapshot.docs[0].data()
        };

    } catch (error) {

        console.error("Error getting product:", error);
        return null;

    }

}


// =============================
// Add Product
// =============================
export async function addProduct(product) {

    try {

        const productsRef = collection(db, "products");

        await addDoc(productsRef, product);

    } catch (error) {

        console.error("Error adding product:", error);
        throw error;

    }

}


// =============================
// Update Product
// =============================
export async function updateProduct(docId, updatedProduct) {

    try {

        const productRef = doc(db, "products", docId);

        await updateDoc(productRef, updatedProduct);

    } catch (error) {

        console.error("Error updating product:", error);
        throw error;

    }

}


// =============================
// Delete Product
// =============================
export async function deleteProduct(docId) {

    try {

        const productRef = doc(db, "products", docId);

        await deleteDoc(productRef);

    } catch (error) {

        console.error("Error deleting product:", error);
        throw error;

    }

}

export async function getProductByDocId(docId) {

    try {

        const productRef = doc(db, "products", docId);

        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return null;
        }

        return {
            docId: snapshot.id,
            ...snapshot.data()
        };

    } catch (error) {

        console.error(error);
        return null;

    }

}