import { Link } from "react-router-dom";
import Signupimage from "../assets/images/signup.png";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-image">
          <img src={ Signupimage } alt="signup" />
          <div className="overlay">
            <h3>Join the Club</h3>
            <p>Create an account to enjoy exclusive offers.</p>
          </div>
        </div>

        <div className="auth-form">
          <h2>Create Account</h2>
          <p>Please fill in the details to sign up.</p>

          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email Address</label>
          <input type="email" placeholder="user@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Create password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />

          <button className="btn-primary">Sign Up</button>

          <p className="switch-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
