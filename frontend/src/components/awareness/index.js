import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const AwarenessPage = () => {
  const [userData, setUserData] = useState({
    monthlyUsage: 1500, // in Liters
    monthlySavings: 300, // in Liters
    regionalAverage: 1800, // in Liters
  });

  const [impactStats, setImpactStats] = useState({
    wellsReplenished: 0,
    treesSaved: 0,
    carbonReduced: 0,
  });

  // Simulate fetching or calculating impact stats
  useEffect(() => {
    const calculateImpact = () => {
      const litersSaved = userData.monthlySavings;
      setImpactStats({
        wellsReplenished: (litersSaved / 5000).toFixed(2), // Approx liters required to replenish a well
        treesSaved: (litersSaved / 50).toFixed(0), // Approx liters needed for one tree to survive per month
        carbonReduced: (litersSaved * 0.01).toFixed(2), // Rough estimate of carbon emissions reduced per liter saved
      });
    };

    calculateImpact();
  }, [userData]);

  return (
    <>
    

      <div className="container py-5">
        <h1 className="text-center fw-bold text-primary mb-4">
          Data-Driven Awareness
        </h1>
        <p className="text-center text-muted mb-5">
          Discover how your water-saving efforts make a real-world impact and
          compare your usage with others in your region.
        </p>

        {/* Personalized Stats Section */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="fw-bold text-success">Your Monthly Usage</h5>
                <p className="display-6 fw-bold text-primary">
                  {userData.monthlyUsage} L
                </p>
                <p className="text-muted">
                  Compare with the regional average below.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="fw-bold text-success">Regional Average</h5>
                <p className="display-6 fw-bold text-primary">
                  {userData.regionalAverage} L
                </p>
                <p className="text-muted">
                  Your usage is{" "}
                  {userData.monthlyUsage < userData.regionalAverage
                    ? "below"
                    : "above"}{" "}
                  the average.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="fw-bold text-success">Your Monthly Savings</h5>
                <p className="display-6 fw-bold text-primary">
                  {userData.monthlySavings} L
                </p>
                <p className="text-muted">
                  Thanks for contributing to water conservation!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Projections Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bold mb-4">Your Impact Projections</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="fa fa-water fa-2x text-primary mb-3"></i>
                  <h5 className="fw-bold">Wells Replenished</h5>
                  <p className="display-6 fw-bold text-primary">
                    {impactStats.wellsReplenished}
                  </p>
                  <p className="text-muted">
                    Your savings could replenish dry wells in need.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="fa fa-tree fa-2x text-success mb-3"></i>
                  <h5 className="fw-bold">Trees Saved</h5>
                  <p className="display-6 fw-bold text-primary">
                    {impactStats.treesSaved}
                  </p>
                  <p className="text-muted">
                    Your efforts support tree growth and sustainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="fa fa-cloud fa-2x text-info mb-3"></i>
                  <h5 className="fw-bold">Carbon Reduced</h5>
                  <p className="display-6 fw-bold text-primary">
                    {impactStats.carbonReduced} kg
                  </p>
                  <p className="text-muted">
                    Reducing water usage cuts energy and carbon emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default AwarenessPage;
