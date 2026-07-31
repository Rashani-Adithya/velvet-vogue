// React Router
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./Components/Layout/Layout";

// Components
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// Pages
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Account from "./pages/Account/Account";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import AdminPanel from "./pages/Admin/AdminPanel/AdminPanel";

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
                     element={
                           <ProtectedRoute>
                                   <Account />
                            </ProtectedRoute> 
                            }
                />

                {/*OrderSuccess*/}
                <Route
                    path="order-success"
                     element={<OrderSuccess />}
                 />

                {/* Login*/}
                <Route 
                    path="/login" 
                    element={<Login />} />

                {/*Register*/}
                <Route
                    path="register"
                     element={<Register />}

                />

                {/* Admin Dashboard */}
<Route
    path="admin"
    element={
        <AdminRoute>
            <AdminPanel />
        </AdminRoute>
    }
/>


            </Route>

        </Routes>
    );
}

export default App;