import React from "react";
import './css/Body.css'
const Body = () => {
  return (
    <div className="body-container">
      <h1>Find your dream job now</h1>
      <h3>5 lakh+ jobs for you to explore</h3>
      <section className="search-section">
        <input
          type="text"
          placeholder="Search job titles, keywords, or companies"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </section>

      <section className="job-listings">
        <h2>Featured Jobs</h2>
        <div className="job-card">
          <h3 className="job-title">Software Engineer</h3>
          <p className="company-name">Tech Innovations Inc.</p>
          <p className="location">Bangalore, India</p>
        </div>
        <div className="job-card">
          <h3 className="job-title">Marketing Manager</h3>
          <p className="company-name">Global Marketing Solutions</p>
          <p className="location">Mumbai, India</p>
        </div>
        <div className="job-card">
          <h3 className="job-title">Data Analyst</h3>
          <p className="company-name">Analytics Pro</p>
          <p className="location">Delhi, India</p>
        </div>
        {/* Add more job listings here */}
      </section>
      <h1>Gaurav Kumar</h1>
    </div>
  );
};

export default Body;
