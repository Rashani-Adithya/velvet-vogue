import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../../firebase/firebase";

import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const userRef = doc(
                db,
                "users",
                userCredential.user.uid
            );

            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                alert("User profile not found.");
                return;
            }

            const userData = userSnap.data();

            if (userData.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/account");
            }

        } catch (error) {

            alert(error.message);

        }

    };

    return (

        <section className="login-page">

            <div className="login-card">

                {/* Tabs */}
                <div className="login-tabs">

                    <Link
                        to="/login"
                        className="login-tab active"
                    >
                        SIGN IN
                    </Link>

                    <Link
                        to="/register"
                        className="login-tab"
                    >
                        CREATE ACCOUNT
                    </Link>

                </div>

                {/* Form */}
                <div className="login-body">

                    <form
                        className="login-form"
                        onSubmit={handleLogin}
                    >

                        {/* Email */}
                        <div className="form-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {errors.email && (
                                <p className="error-text">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Password */}
                        <div className="form-group">

                            <label>Password</label>

                            <div className="password-input">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>

                            </div>

                            {errors.password && (
                                <p className="error-text">
                                    {errors.password}
                                </p>
                            )}

                        </div>

                        {/* Forgot Password */}
                        <div className="login-links">

                            <Link to="/forgot-password">
                                Forgot your password?
                            </Link>

                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="login-btn"
                        >
                            SIGN IN
                        </button>

                    </form>

                </div>

            </div>

        </section>

    );
}

export default Login;