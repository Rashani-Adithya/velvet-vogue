import "./AccountHeader.css";

import { FaSignOutAlt, FaShieldAlt } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AccountHeader() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <>

            {/* Top Row */}
            <div className="account-top">

                <h1>My Account</h1>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt />
                    Sign Out
                </button>

            </div>

            {/* Profile Card */}
            <div className="profile-card">

                <div className="avatar">

                    {user?.fullName?.charAt(0).toUpperCase()}

                </div>

                <div className="profile-info">

                    <div className="profile-name">

                        <h2>{user?.fullName}</h2>

                        {user?.role === "admin" && (

                            <span className="admin-tag">

                                <FaShieldAlt />

                                Admin

                            </span>

                        )}

                    </div>

                    <p>{user?.email}</p>

                </div>

            </div>

            {/* Tabs */}
            <div className="account-tabs">

                <button className="active-tab">

                    Profile

                </button>

                

            </div>

        </>
    );

}

export default AccountHeader;