import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !confirmPassword)) {
      setError("Please fill out all fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (isLogin) {
      // Mock login validation
      if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
        navigate("/"); // Redirect to home page
      } else {
        setError("Invalid login credentials.");
      }
    } else {
      // Mock signup logic
      alert("Account created successfully!");
      setIsLogin(true); // Switch to login
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          {error && <p className="error">{error}</p>}
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;