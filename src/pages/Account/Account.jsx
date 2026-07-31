import "./Account.css";

import AccountHeader from "./Components/AccountHeader";
import AccountDetails from "./Components/AccountDetails";
import RecentOrders from "./Components/RecentOrders";
import SavedItems from "./Components/SavedItems";
import AdminBanner from "./Components/AdminBanner";

function Account() {
    return (

        <div className="account-page">

            {/* Admin banner (only visible for admins) */}
            <AdminBanner />

            <div className="account-container">

                <AccountHeader />

                <AccountDetails />

                <div className="account-bottom">

                    <RecentOrders />

                    <SavedItems />

                </div>

            </div>

        </div>

    );
}

export default Account;