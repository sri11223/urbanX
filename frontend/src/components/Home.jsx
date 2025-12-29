import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./street_water_usage.json";
import ProfessionalNavbar from "./Navbar";

const Home = () => {
  const [householdId, setHouseholdId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Validate inputs
    if (!householdId || !password) {
      setError("Please enter both Household ID and Password.");
      return;
    }

    // Find the matching household
    const household = data.households.find(
      (house) => house.household_id === parseInt(householdId)
    );

    // Validate household and password
    if (household && password === `hs${household.household_id}`) {
      navigate(`/dashboard/${householdId}`);
    } else {
      setError("Invalid Household ID or Password. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <ProfessionalNavbar />

      {/* Main Content */}
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div
          className="card p-4 shadow"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h1 className="text-center text-primary mb-4">Household Water Usage</h1>
          <p className="text-center text-muted mb-4">
            Enter your Household ID and Password to view water usage insights.
          </p>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Household ID"
              value={householdId}
              onChange={(e) => setHouseholdId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            View Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
