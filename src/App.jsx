// React Router
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./Components/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Account from "./pages/Account/Account";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";


// Styles
import "./App.css";

function App() {
    return (
        <Routes>

            {/* Main Layout */}
            <Route path="/" element={<Layout />}>

                {/* Home */}
                <Route
                    index
                    element={<Home />}
                />

                {/* Collections */}
                <Route
                    path="collections"
                    element={<Collections />}
                />

                {/* Product Details */}
                <Route
                    path="collections/:id"
                    element={<ProductDetails />}
                />

                {/* Shopping Cart */}
                <Route
                    path="cart"
                    element={<Cart />}
                />

                {/* Checkout */}
                <Route
                    path="checkout"
                    element={<Checkout />}
                />
                 
                 {/*Account*/}
                <Route
                     path="account"
                     element={<Account />}
                />

                {/*OrderSuccess*/}
                <Route
                    path="order-success"
                     element={<OrderSuccess />}
                 />

                {/* Future Pages */}

                {/*
                <Route path="account" element={<Account />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="order-success" element={<OrderSuccess />} />
                */}

            </Route>

        </Routes>
    );
}

export default App;