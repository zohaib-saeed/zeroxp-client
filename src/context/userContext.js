import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../apiConfig";
import toast from "react-hot-toast";

// Create the user context
export const UserContext = createContext();

// Custom hook for consuming the user context
export const useUserContext = () => useContext(UserContext);

// User context provider component
export function UserContextProvider({ children }) {
  const navigate = useNavigate();

  // Use cookies to access user token
  const cookies = parseCookies();
  const token_cookie = cookies.accessToken;

  // Accessing search parameters when the component mounts
  const params = new URLSearchParams(window.location.search);
  const param_token = params.get("token");

  // States
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login User Handler
  const loginHandler = (response) => {
    // Update states
    setAccessToken(response?.token);
    setIsAuthenticated(true);
    setUser(response?.user);
    // Set auth token as cookie
    setCookie(null, "accessToken", response?.token, {
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
    });
    // ==> Redirect to profile page
    navigate("/profile");
  };

  // Logout Handler
  const logoutHandler = () => {
    // ==> Reset states to default values
    setAccessToken(null);
    setIsAuthenticated(false);
    setUser(null);
    // ==> Remove auth token as cookie
    destroyCookie(null, "accessToken");
    // ==> Redirect to login page
    navigate("/login");
  };

  useEffect(() => {
    // Fetch user profile
    const getUserProfile = async (authToken) => {
      try {
        // Call API
        const response = await axios.get(`${baseUrl}/user/get/profile`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Update user state
        setUser(response?.data?.user);

        // Update token state
        setAccessToken(authToken);

        // Update auth state
        setIsAuthenticated(true);
      } catch (error) {
        // Show error message
        toast.error(error?.response?.data?.message, {
          position: "top-right",
        });

        // Redirect to login page
        navigate("/login");
      }
    };

    // ==> If the user is already logged in, fetch the user profile
    if (token_cookie !== undefined) {
      getUserProfile(token_cookie);
    }

    // Check if the user is newly logged in as linkedin user, fetch user profile
    if (param_token) {
      setCookie(null, "accessToken", param_token, {
        maxAge: 604800,
        path: "/",
        sameSite: "lax",
      });
      getUserProfile(param_token);
      // Redirect to login page
      navigate("/profile");
    }
  }, [token_cookie, isAuthenticated, accessToken, param_token]);

  // Value to be provided by the context
  const contextValue = {
    user,
    loginHandler,
    logoutHandler,
    accessToken,
    isAuthenticated,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
