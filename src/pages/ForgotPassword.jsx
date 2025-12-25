import { Link } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-card small">

        <div className="auth-form full">
          <h2>Forgot Password</h2>
          <p>Enter your email to receive a reset link.</p>

          <label>Email Address</label>
          <input type="email" placeholder="user@example.com" />

          <button className="btn-primary">Send Reset Link</button>

          <p className="switch-text">
            Back to <Link to="/login">Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
