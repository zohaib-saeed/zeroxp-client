import React from 'react';
import './PostAJob.css';

function PostAJob() {
  console.log('PostAJobPage component rendered');

  return (
    <div className='post-page'>
      <h1 style={{marginTop: '1%'}}>Post A Job for free!</h1>
      <form>


          <section class="form-container">
          <div class="card">
              
          <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" placeholder="Enter job title" required />
          </div>

          <div>
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" placeholder="Enter company name" required />
          </div>

          <div>
            <label htmlFor="workplaceType">Workplace Type:</label>
            <select name="workplaceType" id="workplaceType">
              <option value="Placeholder">Select Workplace Type</option>
              <option value="Online">Online</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label htmlFor="employeeLocation">Job Location:</label>
            <input type="text" id="jobLocation" name="jobLocation" placeholder="Enter job location" required />
          </div>

          <div>
            <label htmlFor="jobType">Job Type:</label>
            <select name="jobType" id="jobType">
              <option value="Placeholder">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Temporary/Seasonal/Contract">Temporary/Seasonal/Contract</option>
              <option value="Per-Diem">Per-Diem</option>
            </select>
          </div>
              
          </div>
          <div class="card">
              
          <div>
            <label htmlFor="jobSummary">Job Summary/Description:</label>
            <textarea className="jobdescarea" id="jobSummary" name="jobSummary" placeholder="Enter job summary/description" rows="5" required></textarea>
          </div>
              
              
          </div>
          <div class="card">
              
          <div>
            <label htmlFor="skills">Skills/Certifications:</label>
            <textarea id="skills" name="skills" placeholder="Enter required skills/certifications" rows="5" required></textarea>
          </div>

          <div>
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" name="salary" placeholder="Enter salary information" />
          </div>

          
              
          </div>
          </section>
          
          <div className="submitButton">
            <input type="submit" value="Submit" class='submitInput'/>
          </div>
      </form>
    </div>
  );
}

export default PostAJob;