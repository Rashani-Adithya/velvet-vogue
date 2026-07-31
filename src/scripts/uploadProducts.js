import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import products from "../data/products";

async function uploadProducts() {

    console.log("===== Upload Started =====");

    try {

        const productsRef = collection(db, "products");

        for (const product of products) {

            await addDoc(productsRef, {
                ...product
            });

            console.log(`${product.name} uploaded`);
        }

        console.log("✅ All products uploaded successfully!");

    } catch (error) {

        console.error("Upload Error:", error);

    }

}

uploadProducts();