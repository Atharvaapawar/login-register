import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

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

            <span className="login-text"> Register</span>
          </div>

          <form className="login-container" onSubmit={handleLogin}>
            <br />
            <div className="login-container-inner">
              <br />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />

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

              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <br />

              <label htmlFor="password">Create Password</label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <br />

              <a className="login-welcome" href="http://"></a>
            </div>

            <button type="submit">Register</button>
            <br />
            <br />
            {/* Use Link to navigate to register page */}
            <div className="register-link">
              Already have an account? <Link to="/">Click here to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
