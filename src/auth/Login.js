import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./login.css";
import { toast } from "react-hot-toast";
import { baseUrl } from "../apiConfig";
import { useUserContext } from "../context/userContext";

function LoginPage() {
  const { isAuthenticated, loginHandler } = useUserContext();
  // Hooks
  const navigate = useNavigate();

  // State
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Handler ==> Login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    console.log(baseUrl);
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response?.status === 200) {
        toast.success(response?.data?.message, { position: "top-right" });
        loginHandler(response?.data); // Update user context with the logged in user data
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { position: "top-right" });
    }
  };

  // ==> LinkedIn login handler
  const linkedInLoginHandler = async () => {
    window.open(`${baseUrl}/auth/linkedin`, "_self");
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label>Password</label>
        </div>
        <center>
          <button type="submit" className="login-button">
            Login
          </button>
          <br></br>
          <br></br>
          <p style={{ color: "gray", fontSize: "12px" }}>
            Forgot your password? Send an email to hello@zeroxp.fyi
          </p>
        </center>
        <button type="button" onClick={linkedInLoginHandler}>
          Continue with LinkedIn
        </button>
        <hr />
        <center>
          Don't have an account?{" "}
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/signup")}
          >
            Join today for free!
          </span>
        </center>
      </form>
    </div>
  );
}

export default LoginPage;
