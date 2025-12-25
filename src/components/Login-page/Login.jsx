import "./Login.css";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login-image.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div
          className="login-left"
          style={{ backgroundImage: `url(${loginImage})` }}
        >
          <div className="overlay">
            <h2>Style Redefined.</h2>
            <p>
              Discover the latest trends and exclusive collections. Join our
              community for a seamless shopping experience.
            </p>
          </div>
        </div>

        <div className="login-right">
          <h2>Welcome Back</h2>
          <p className="subtitle">Please enter your details to sign in.</p>

          <div style={{ textAlign: "left" }}>
            <label>
              <strong>Email Address</strong>
            </label>
            <input type="email" placeholder="user@example.com" />
          </div>

          <div className="password-header">
            <label>
              <strong>Password</strong>
            </label>
            <span><Link to="/forgot-password">Forgot Password?</Link></span>
          </div>
          <input type="password" placeholder="Enter your password" />

          <button className="signin-btn">Sign In</button>

          <div className="divider">OR CONTINUE WITH</div>

          <div className="social-buttons">
            <button className="social-btn">
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <button className="social-btn">
              <FaApple size={20} />
              <span>Apple</span>
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? <span><Link to="/signup">Sign Up</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
