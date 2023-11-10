import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/Login.css'

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Auth-form-container">
        {/* Creating the form for taking the user data */}
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            {/* If user wants to create new account, then directing them to the Sign Up page. */}
            <div className="text-center">
              Register new account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="link-primary "
                style={{
                  cursor: "pointer",
                  // textDecoration: "underline",
                }}
              >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="text-center mt-3">
              {/* Creating the button for submitting the user form */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            {/* Providing the Functionality to change the passsword in case user forgot. */}
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
