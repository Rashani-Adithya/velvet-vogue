import { db } from "../firebase/firebase";
import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";

// Collections
const ordersCollection = collection(db, "orders");
const orderItemsCollection = collection(db, "orderItems");

// Create Order
export const createOrder = async (orderData) => {

    const docRef = await addDoc(ordersCollection, {
        ...orderData,
        createdAt: serverTimestamp(),
    });

    return docRef.id;

};

// Add Order Item
export const addOrderItem = async (itemData) => {

    const docRef = await addDoc(orderItemsCollection, itemData);

    return docRef.id;

};

// Get All Orders
export const getOrders = async () => {

    const snapshot = await getDocs(ordersCollection);

    return snapshot.docs.map((document) => ({
        docId: document.id,
        ...document.data(),
    }));

};

// Get Items of One Order
export const getOrderItems = async (orderId) => {

    const q = query(
        orderItemsCollection,
        where("orderId", "==", orderId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
        docId: document.id,
        ...document.data(),
    }));

};

// Update Order Status
export const updateOrderStatus = async (orderId, status) => {

    const orderRef = doc(db, "orders", orderId);

    await updateDoc(orderRef, {
        status,
    });

};