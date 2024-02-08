import React, { useEffect } from "react";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Get the token from the cookies
  const cookies = parseCookies();

  const token = cookies.accessToken;

  // If the token is not present, redirect to the login page
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
