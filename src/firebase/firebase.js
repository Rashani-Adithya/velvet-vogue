import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnWunHS5lpHyeEcNniDM0fc7d_yOAcnvw",
  authDomain: "velvet-vogue-store.firebaseapp.com",
  projectId: "velvet-vogue-store",
  storageBucket: "velvet-vogue-store.firebasestorage.app",
  messagingSenderId: "213994648009",
  appId: "1:213994648009:web:a5f7179c6222dc265fb818"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;