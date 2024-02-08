import React, { useState } from "react";
import "./singup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseUrl } from "../apiConfig";

function SignUp() {
  // React router dome navigate hook
  const navigate = useNavigate();

  // State ==> form data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handler ==> Signup form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = data;
    try {
      const response = await axios.post(`${baseUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      if (response?.status === 201) {
        toast.success(response?.data?.message, { position: "top-right" });
        navigate("/login");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { position: "top-right" });
    }
  };

  // Custom link click handler
  const handleCustomLinkClick = () => {
    window.location.href = "/login";
  };

  // Custom link click handler
  const handleCustoLinkClick = () => {
    window.location.href = "/";
  };

  // ==> LinkedIn login handler
  const linkedInLoginHandler = async () => {
    window.open(`${baseUrl}/auth/linkedin`, "_self");
  };

  return (
    <div className="log-box">
      <h1>Join Today!</h1>
      <center>
        <p>
          Accelerate your job search today! Registered users also get the
          ability to bookmark jobs and view user-submitted interview questions
          and interview process insights for any given role.
        </p>
      </center>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="firstName"
            required
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <label>First Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="lastName"
            required
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
          <label>Last Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
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
          <button type="submit" className="signup-button">
            Sign Up
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <br></br>
          <br></br>
          <p style={{ color: "gray", fontSize: "12px" }}>
            By signing up or logging in, you are agreeing to ZeroXP's{" "}
            <span></span>
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={handleCustoLinkClick}
            >
              Terms of Use and Privacy Policy.
            </span>
          </p>
        </center>
        <button type="button" onClick={linkedInLoginHandler}>
          Continue with LinkedIn
        </button>
        <hr />
        <br />
        <center>
          Already have an account?
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={handleCustomLinkClick}
          >
            <span></span> Login here!
          </span>
        </center>
      </form>
    </div>
  );
}

export default SignUp;
