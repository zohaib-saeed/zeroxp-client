import React, { useState } from 'react';
import './search.css';

function JobCard({ job, index }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const formatDateDifference = (postedDate) => {
    const posted = new Date(postedDate);
    const now = new Date();
    const differenceInTime = now - posted;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 7) {
      return `${Math.round(differenceInDays)} day(s) ago`;
    } else {
      return `${Math.round(differenceInDays / 7)} week(s) ago`;
    }
  };

  return (
    <div className="col-md-3 mb-2">
      <div className="card job-card">
        <div className="card-content">
          <div className="logo-text-container">
            <img
              src={job.logoLink}
              className="card-img-top logo-image"
              alt="Company Logo"
            />
            <div className="text-content">
              <h5 className="card-title make-bolder">{job.Company}</h5>
              <h6 className="card-title">{job.jobTitle}</h6>
              <p className="card-text">
                {job.City}, {job.State}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-apply make-bolder"
          onClick={openModal}
        >
          Apply Now
        </button>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`jobModalLabel-${index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h3 className="modal-title make-bolder" id={`jobModalLabel-${index}`}>
                    {job.jobTitle}
                  </h3>
                  <p className="modal-subtitle">
                    Published: {formatDateDifference(job.datePosted)}
                  </p>
                </div>
                <button
                  type="button"
                  className="close custom-close-button"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row mb-3 align-items-center">
                  <div className="col-auto">
                    <img
                      src={job.logoLink}
                      className="modal-company-logo"
                      alt="Company Logo"
                      style={{ maxWidth: '100px', marginRight: '10px' }} 
                    />
                  </div>
                  <div className="col-auto">
                    <h3>{job.Company}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <strong>Location:</strong> 
                    <br></br>
                  
                    {job.City}, {job.State}<br/>
                    <br>
                    </br>
                    <strong>Job Type:</strong>
                    <br></br>
                     {job.jobType}
                  </div>
                  <div className="col-md-4 custom-col-spacing custom-job-summary">
                  <strong>Role Summary:</strong>
                  <br></br>
                    {job.Description}
                  </div>
                  <div className="col-md-4 custom-col-spacing">
                    
                    <strong>Skills associated with the job listing:</strong> 
                    <br></br>
                    {job.Tags}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-app make-bolder"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;