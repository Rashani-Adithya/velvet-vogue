import { db } from "../firebase/firebase";

import {
    collection,
    getDocs
} from "firebase/firestore";

export async function getUsers() {

    try {

        const snapshot = await getDocs(
            collection(db, "users")
        );

        return snapshot.docs.map((doc) => ({
            docId: doc.id,
            ...doc.data()
        }));

    } catch (error) {

        console.error(error);

        return [];

    }

}