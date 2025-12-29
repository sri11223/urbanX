import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfessionalFooter from "../footer";
import ProfessionalNavbar from "../Navbar";
import "./index.css"; // Import custom CSS for animations
import AwarenessPage from "../awareness";
import { Modal, Button } from "react-bootstrap";

const Statistic = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Show modal when the page loads
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Success Stories Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success Stories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="fw-bold">Maple City Water-Saving Initiative</h5>
          <p>
            Maple City reduced its water consumption by 25% through community
            awareness programs and the installation of rainwater harvesting
            systems. Together, the residents saved over 1 million liters of
            water in just one year.
          </p>
          <hr />
          <h5 className="fw-bold">Smart Water Monitoring in Pine Town</h5>
          <p>
            Using IoT-based water monitoring devices, Pine Town identified and
            fixed leaks in 2,000 households, saving an estimated 500,000 liters
            of water.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Navbar */}
      <ProfessionalNavbar />

      {/* Main Content */}
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center g-5">
          {/* Text Section */}
          <div className="col-lg-6 animate-fadeInLeft">
            <div className="mb-4">
              <span className="badge bg-success text-uppercase px-3 py-2 mb-3 animate-bounce">
                Save Water, Secure Future
              </span>
              <h2 className="display-5 fw-bold text-dark">
                Together we can{" "}
                <span className="text-primary">conserve water</span> and make a
                difference
              </h2>
              <p className="lead text-muted">
                With water scarcity on the rise, every drop counts. Join our
                mission to save water through smart monitoring and data-driven
                solutions.
              </p>
            </div>
            <a
              href="/login"
              className="btn btn-primary btn-lg text-uppercase me-2 animate-scaleOnHover"
            >
              Explore Dashboard
            </a>
            <a
              href="/about"
              className="btn btn-outline-primary btn-lg text-uppercase animate-scaleOnHover"
            >
              Learn More
            </a>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center animate-fadeInRight">
            <div className="position-relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/dknw280mr/image/upload/v1734485379/a7641a3b-a067-4839-82c0-3c70a57a571a_xx4ph5.jpg"
                alt="Water Conservation"
                className="img-fluid rounded shadow-lg animate-zoomIn"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="row g-4 mt-5 text-center">
          <ImpactCard
            icon="fa-globe"
            title="Total Water Saved"
            value="1.2 Million Liters"
            description="Across all our engaged communities and households."
          />
          <ImpactCard
            icon="fa-users"
            title="Households Engaged"
            value="15,000+"
            description="Empowering families to adopt water-saving practices."
          />
          <ImpactCard
            icon="fa-tools"
            title="Pipelines Monitored"
            value="3,500+"
            description="Ensuring efficient water supply with advanced monitoring."
          />
        </div>

        {/* Seasonal Insights Section */}
        <div className="row g-4 mt-5">
          <h3 className="text-center fw-bold mb-4 animate-fadeInDown">
            Seasonal Water Insights
          </h3>
          <SeasonalInsightsCard
            season="Summer"
            tips="Reduce lawn watering and car washing to save up to 50 liters daily."
            image="https://th.bing.com/th/id/OIP.QTR_3KgIdIuN2-Fi23BNlAHaEo?w=288&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
          <SeasonalInsightsCard
            season="Monsoon"
            tips="Harvest rainwater to reduce dependency on supply."
            image="https://static.toiimg.com/photo/64465753/.jpg"
          />
          <SeasonalInsightsCard
            season="Winter"
            tips="Minimize outdoor water usage to prevent freezing pipes."
            image="https://th.bing.com/th/id/OIP.4m459frk9RfVA3Ew-RbujwHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </div>
        <AwarenessPage />

        {/* Call to Action Section */}
        <div className="text-center mt-5 animate-pulse">
          <h3 className="fw-bold text-dark mb-3">Join Our Mission</h3>
          <p className="lead text-muted">
            Together, we can make a difference in conserving water for future
            generations.
          </p>
          <a
            href="/get-started"
            className="btn btn-success btn-lg text-uppercase shadow"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <ProfessionalFooter />
    </>
  );
};

// Impact Card Component
const ImpactCard = ({ icon, title, value, description }) => (
  <div className="col-lg-4 col-md-6 animate-fadeInUp">
    <div
      className="card h-100 shadow-sm text-center"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      <div className="card-body animate-hoverShadow">
        <div
          className="icon-circle bg-primary text-white mb-4 mx-auto"
          style={{
            width: "60px",
            height: "60px",
            lineHeight: "60px",
            borderRadius: "50%",
            fontSize: "24px",
          }}
        >
          <i className={`fa ${icon}`}></i>
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="display-6 fw-bold text-primary">{value}</p>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  </div>
);

// Seasonal Insights Card Component
const SeasonalInsightsCard = ({ season, tips, image }) => (
  <div className="col-lg-4 col-md-6 animate-zoomIn">
    <div className="card shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={`${season} Insights`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{season} Tips</h5>
        <p className="card-text text-muted">{tips}</p>
      </div>
    </div>
  </div>
);

export default Statistic;
