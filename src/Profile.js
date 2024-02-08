import React, { useState, useContext } from "react";
import "./profile.css";
import { UserContext } from "./context/userContext";
import { useLocation } from "react-router-dom";

function Profile() {
  // ==> User userContext to access user data and logout handler
  const { user, logoutHandler } = useContext(UserContext);

  const [backgroundImage, setBackgroundImage] = useState(
    "default-image-url.jpg"
  );
  const [jobs, setJobs] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleImageUpload = (e) => {
    // Implement image upload logic here
    // For example, updating the backgroundImage state with the new image URL
  };

  const handleJobSelect = (job) => {
    // Implement logic to add a job to the selectedJobs array
  };

  return (
    <div class="container profile-container">
      <div class="row mb-3">
        <div class="card w-1000 row-clr">
          <div class="card-body ">
            <div class="row ">
              <div class="col-md-9 no-gutters">
                <h1 style={{ color: "white" }}>
                  {!!user && <strong>{user.firstName}</strong>}
                </h1>
                <h4 style={{ color: "white" }}>User Title</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <ul class="nav nav-tabs" id="profileTabs" role="tablist">
            <li class="nav-item ">
              <a
                class="nav-link active"
                id="jobs-tab"
                data-toggle="tab"
                href="#jobs"
                role="tab"
                aria-controls="jobs"
                aria-selected="true"
                style={{ color: "#F53259" }}
              >
                <strong>Bookmarked</strong>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="applied-tab"
                data-toggle="tab"
                href="#applied"
                role="tab"
                aria-controls="applied"
                aria-selected="false"
                style={{ color: "#F53259" }}
              >
                <strong>Applied</strong>
              </a>
            </li>
          </ul>
          <div class="tab-content" id="profileTabsContent">
            <div
              class="tab-pane fade show active"
              id="jobs"
              role="tabpanel"
              aria-labelledby="jobs-tab"
            >
              <br></br>

              <div class="jobs-list">
                <div class="card d-inline-block">
                  <div class="card-body">
                    <h5 class="card-title">Job Title</h5>
                    <p class="card-text">Job Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="applied"
              role="tabpanel"
              aria-labelledby="applied-tab"
            >
              <br></br>
              <div class="jobs-list">
                <div class="card d-inline-block">
                  <div class="card-body">
                    <h5 class="card-title">Applied Job Title</h5>
                    <p class="card-text">Applied Job Description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <center>
                <h5>
                  <strong>My Account</strong>
                </h5>
              </center>
              <p class="card-text">
                <strong>Date Joined:</strong>
              </p>
              <hr></hr>
              <p class="card-text">
                <strong>Jobs Bookmarked:</strong>
              </p>
              <br></br>
              <p class="card-text">
                <strong>Jobs Applied:</strong>
              </p>
              <hr></hr>
              <center>
                <button class="logout-btn" onClick={logoutHandler}>
                  Logout
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
