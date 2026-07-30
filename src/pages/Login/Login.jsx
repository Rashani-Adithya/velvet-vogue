import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login-page">

      <div className="login-container">

        {/* Tabs */}
        <div className="login-tabs">

          <Link
            to="/login"
            className="tab-btn active"
          >
            SIGN IN
          </Link>

          <Link
            to="/register"
            className="tab-btn"
          >
            CREATE ACCOUNT
          </Link>

        </div>

        {/* Form */}
        <form className="login-form">

          <label>EMAIL ADDRESS</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>PASSWORD</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="login-options">

            <label className="remember">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            SIGN IN
          </button>

        </form>

      </div>

    </main>
  );
}

export default Login;