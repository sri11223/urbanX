import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfessionalNavbar from "../Navbar";
import ProfessionalFooter from "../footer";
import "./index.css"; // Custom animations and styles

const GetStarted = () => {
  return (
    <>
      {/* Navbar */}
      <ProfessionalNavbar />

      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/R.3b58240ccdf2d49e833dca480d35e515?rik=x6ZimavPMiofuQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fNature-HD.jpg&ehk=hTzGk18xUHRl9FsnFx1%2bKBZKRpeE%2b8djAPCdcDKa5M0%3d&risl=&pid=ImgRaw&r=0')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div className="text-center" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold text-light animate-fadeInDown">
            Welcome to <span className="text-success">WaterConserve</span>
          </h1>
          <p className="lead mt-3 text-light animate-fadeInUp">
            Take the first step toward smarter water conservation and
            sustainable living.
          </p>
          <a
            href="/recommendations"
            className="btn btn-success btn-lg shadow me-3 animate-scaleOnHover"
          >
            Get Recommendations
          </a>
          <a
            href="/dashboard"
            className="btn btn-outline-light btn-lg shadow animate-scaleOnHover"
          >
            Explore Dashboard
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5 text-primary">Why Choose WaterConserve?</h2>
        <div className="row g-4">
          <FeatureCard
            icon="fa-chart-line"
            title="Smart Analytics"
            description="Track, analyze, and optimize your water usage with real-time insights."
          />
          <FeatureCard
            icon="fa-bell"
            title="Timely Alerts"
            description="Receive instant notifications for leaks, high usage, or irregular patterns."
          />
          <FeatureCard
            icon="fa-tools"
            title="Maintenance Support"
            description="Schedule and manage pipeline repairs to prevent water wastage."
          />
          <FeatureCard
            icon="fa-recycle"
            title="Sustainable Practices"
            description="Implement rainwater harvesting and eco-friendly irrigation systems."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How It Works</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 animate-fadeInLeft">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4015/4015392.png"
                alt="How It Works"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6 animate-fadeInRight">
              <ul className="list-unstyled">
                <li className="mb-4">
                  <i className="fa fa-check-circle text-success me-3"></i>
                  Sign up and connect your household or business to WaterConserve.
                </li>
                <li className="mb-4">
                  <i className="fa fa-check-circle text-success me-3"></i>
                  Monitor your water usage through our smart dashboard.
                </li>
                <li className="mb-4">
                  <i className="fa fa-check-circle text-success me-3"></i>
                  Receive recommendations and alerts tailored to your needs.
                </li>
                <li className="mb-4">
                  <i className="fa fa-check-circle text-success me-3"></i>
                  Take action and track your savings over time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-primary text-white">
        <h3 className="fw-bold mb-3">Join Thousands of Water-Conscious Users</h3>
        <p className="lead mb-4">Sign up today and start making a difference!</p>
        <a
          href="/login"
          className="btn btn-light btn-lg text-primary fw-bold shadow animate-scaleOnHover"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <ProfessionalFooter />
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="col-lg-3 col-md-6">
    <div className="card h-100 shadow-sm text-center">
      <div className="card-body">
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
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  </div>
);

export default GetStarted;
