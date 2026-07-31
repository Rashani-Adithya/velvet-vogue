import "./Header.css";
import logo from "./logo.png";

import { Link, NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function Header() {

    const { user } = useAuth();
    const { totalItems } = useCart();

    return (
        <>

            {/* Top Bar */}
            <div className="top-bar">
                <p>
                    COMPLIMENTARY DELIVERY ON ORDERS ABOVE RS. 5,000 • USE
                    VELVET20 FOR 20% OFF
                </p>
            </div>

            {/* Header */}
            <header className="header">

                {/* Left */}
                <nav className="nav-menu">

                    <NavLink to="/">
                        HOME
                    </NavLink>

                    <NavLink to="/collections">
                        COLLECTIONS
                    </NavLink>

                    <NavLink to="/collections?category=formalwear">
                        SALE
                    </NavLink>

                </nav>

                {/* Logo */}
                <div className="logo">

                    <img
                        src={logo}
                        alt="Velvet Vogue"
                    />

                    <span>
                        Velvet Vogue
                    </span>

                </div>

                {/* Right */}
                <div className="header-right">

                    <Link
                        to={user ? "/account" : "/login"}
                        className="account"
                    >
                        <HiOutlineUser />

                        <span>
                            {user
                                ? user.fullName.split(" ")[0].toUpperCase()
                                : "ACCOUNT"}
                        </span>

                    </Link>

                    <Link
                        to="/cart"
                        className="cart"
                    >

                        <FiShoppingBag />

                        <span className="cart-count">
                            {totalItems}
                        </span>

                    </Link>

                </div>

            </header>

        </>
    );
}

export default Header;