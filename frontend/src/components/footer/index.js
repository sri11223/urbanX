import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfessionalFooter = () => {
  return (
    <footer style={{ backgroundColor: "#333333", color: "#ffffff" }} className="py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{ color: "#20c997" }}>About Us</h5>
            <p className="small">
              At <strong>WaterConserve</strong>, we provide smart solutions for monitoring and conserving water. Our tools empower users to track water usage, detect anomalies, and contribute to a sustainable future.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{ color: "#20c997" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/login" className="text-decoration-none" style={{ color: "#20c997" }}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/chatbot" className="text-decoration-none" style={{ color: "#20c997" }}>
                  Chatbot
                </a>
              </li>
              <li>
                <a href="/recommendations" className="text-decoration-none" style={{ color: "#20c997" }}>
                  RecommendationSystem
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none" style={{ color: "#20c997" }}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3 text-center text-md-start">
            <h5 className="text-uppercase" style={{ color: "#20c997" }}>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-decoration-none me-3"
                style={{ color: "#20c997" }}
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-decoration-none me-3"
                style={{ color: "#20c997" }}
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-decoration-none me-3"
                style={{ color: "#20c997" }}
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-decoration-none"
                style={{ color: "#20c997" }}
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Section */}
        <div className="text-center small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} <strong>WaterConserve</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
