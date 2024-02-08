import React, { useState, useEffect } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import JobCard from "./jobcard";
import { baseUrl } from "./apiConfig";

function Search({ onSearch }) {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/total-count`)
      .then((response) => {
        setTotalCount(response.data.totalCount);
      })
      .catch((error) => {
        console.error("Error fetching total count:", error);
      });
  }, []);

  const handleSearch = () => {
    const searchQuery = {
      keywords,
      location,
    };

    axios
      .get("http://localhost:8000/api/search", { params: searchQuery })
      .then((response) => {
        const responseData = response.data;
        if (responseData && responseData.length > 0) {
          setSearchKeyword(keywords);
          setSearchResults(responseData);
          setSearchPerformed(true);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control input-taller custom-input"
          placeholder="Job Title, Skill, Company, or Keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <input
          type="text"
          className="form-control input-taller custom-input"
          placeholder="Location (City, State)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-search" onClick={handleSearch}>
            <FontAwesomeIcon size="2x" icon={faSearch} className="white-icon" />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p style={{ fontSize: "20px" }}>
          <span style={{ color: "#F53259", fontWeight: "bold" }}>
            {totalCount}{" "}
          </span>
          truly entry-level jobs indexed to date with Artificial Intelligence!
        </p>
      </div>

      <br />
      <div className="mt-2">
        {searchResults.length > 0 && (
          <div className="results-info">
            <span className="results-text">
              Showing {searchResults.length} results for "{searchKeyword}"
            </span>
          </div>
        )}
      </div>
      <div className="search-results-container">
        {searchResults.length > 0 ? (
          searchResults.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="text-center mt-5">
            <p className="p1 make-bolder">
              Get started by searching with a keyword, location, or both!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
