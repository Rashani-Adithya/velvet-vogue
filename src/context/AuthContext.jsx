import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (firebaseUser) => {

                if (firebaseUser) {

                    const userRef = doc(
                        db,
                        "users",
                        firebaseUser.uid
                    );

                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {

                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            ...userSnap.data()
                        });

                    } else {

                        setUser(null);

                    }

                } else {

                    setUser(null);

                }

                setLoading(false);

            }
        );

        return unsubscribe;

    }, []);

    const logout = async () => {

        await auth.signOut();

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                logout
            }}
        >
            {!loading && children}
        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}