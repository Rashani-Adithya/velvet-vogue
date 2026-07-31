import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../../firebase/firebase";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

function Register() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState({});

   const handleRegister = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!fullName.trim()) {
        newErrors.fullName = "Full name is required.";
    }

    if (!email.trim()) {
        newErrors.email = "Email is required.";
    }

    if (!phone.trim()) {
        newErrors.phone = "Phone number is required.";
    }

    if (!password.trim()) {
        newErrors.password = "Password is required.";
    }

    if (!confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password.";
    }

    if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
        return;
    }

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await setDoc(
            doc(db, "users", userCredential.user.uid),
            {
                fullName,
                email,
                phone,
                role: "user",
                createdAt: serverTimestamp(),
            }
        );

        alert("Account created successfully!");

    } catch (error) {

        alert(error.message);

    }

};

    return (

        <section className="login-page">

            <div className="login-card">

                <div className="login-tabs">

                    <Link
                        to="/login"
                        className="login-tab"
                    >
                        SIGN IN
                    </Link>

                    <Link
                        to="/register"
                        className="login-tab active"
                    >
                        CREATE ACCOUNT
                    </Link>

                </div>

                <div className="login-body">

                    <form
                        className="login-form"
                        onSubmit={handleRegister}
                    >

                        <div className="form-group">

                            <label>Full Name</label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />

                            {errors.fullName && (
                                <p className="error-text">{errors.fullName}</p>
                            )}

                        </div>

                        <div className="form-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {errors.email && (
                                <p className="error-text">{errors.email}</p>
                            )}

                        </div>

                        <div className="form-group">

                            <label>Phone Number</label>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            {errors.phone && (
                                <p className="error-text">{errors.phone}</p>
                            )}

                        </div>

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
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                            {errors.password && (
                                <p className="error-text">{errors.password}</p>
                            )}

                        </div>

                        <div className="form-group">

                            <label>Confirm Password</label>

                            <div className="password-input">

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>

                            {errors.confirmPassword && (
                                <p className="error-text">
                                    {errors.confirmPassword}
                                </p>
                            )}

                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                        >
                            CREATE ACCOUNT
                        </button>

                    </form>

                </div>

            </div>

        </section>

    );
}

export default Register;