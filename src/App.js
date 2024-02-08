import React from "react";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import PostAJob from "./PostAJob.js";
import InterviewInsights from "./interviewinsights.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar.js";
import Login from "./auth/Login.js";
import SignUp from "./auth/SignUp.js";
import Profile from "./Profile.js";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext.js";
import ProtectedRoute from "./auth/ProtectedRoute.js";
import { baseUrl } from "./apiConfig.js";

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post-job" element={<PostAJob />} />
          <Route path="/interviewinsights" element={<InterviewInsights />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
