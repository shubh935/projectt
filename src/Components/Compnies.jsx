import React from "react";
import "./css/Compnies.css"; // Import your custom CSS file

const Companies = () => {
  // Sample company data (replace with your actual data)
  const companies = [
    {
      id: 1,
      name: "Acme Corp",
      logo: "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "Beta Industries",
      logo: "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Gamma Solutions",
      logo: "https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?semt=ais_hybrid&w=740",
    },
    { id: 4, name: "Delta Systems", logo: "delta-logo.png" },
    { id: 5, name: "Epsilon Group", logo: "epsilon-logo.png" },
    { id: 6, name: "Zeta Technologies", logo: "zeta-logo.png" },
    // Add more companies as needed
  ];

  return (
    <div className="companies-section">
      <h2 className="companies-title">Our Esteemed Partners</h2>
      <div className="companies-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-item">
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="company-logo"
            />
            <h3 className="company-name">{company.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
