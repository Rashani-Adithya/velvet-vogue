import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import "./AdminBanner.css";

function AdminBanner() {

    const { user } = useAuth();

    if (user?.role !== "admin") {
        return null;
    }

    return (

        <div className="admin-banner">

            <span>
                You are signed in as administrator.
            </span>

            <Link to="/admin">
                Open Admin Panel
            </Link>

        </div>

    );

}

export default AdminBanner;