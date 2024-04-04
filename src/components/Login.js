import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // You can implement your authentication logic here
    console.log("Login clicked with:", { email, password });
  };

  return (
    <div className="outer">
      <div className="login">
        <div className="login-inner">
          <div className="heading">
            <br />
            <br />
            <span className="login-text"> Log In</span>
            <br />
            <br />
            <span className="login-welcome">
              Welcome back! Please enter your details
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />

          <form className="login-container" onSubmit={handleLogin}>
            <br />
            <div className="login-container-inner">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />

              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <a className="login-welcome" href="http://">
                forget password?
              </a>
            </div>

            <br />
            <br />

            <button type="submit">Login</button>
            <br />
            <br />
            {/* Use Link to navigate to register page */}
            <div className="register-link">
              Don't have an account?{" "}
              <Link to="/register">Click here to register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
