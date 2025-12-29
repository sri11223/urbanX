import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"; // Custom CSS for animations and responsiveness
import ProfessionalNavbar from "../Navbar";
import ProfessionalFooter from "../footer";

const About = () => {
  return (
    <>
      <ProfessionalNavbar />

      {/* Hero Section */}
      <header className="about-hero-section">
        <div className="container text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1 className="display-4 fw-bold animate-fadeInDown">
              About <span className="">WaterConserve</span>
            </h1>
            <p className="lead mt-3 animate-fadeInUp">
              Empowering communities to conserve water through smart solutions
              and innovative technology.
            </p>
          </div>
        </div>
      </header>

      <main className="container py-5">
        {/* Mission and Vision */}
        <section className="row align-items-center mb-5">
          <div className="col-lg-6 animate-fadeInLeft">
            <img
              src="https://res.cloudinary.com/dknw280mr/image/upload/v1734485379/a7641a3b-a067-4839-82c0-3c70a57a571a_xx4ph5.jpg"
              alt="Mission Vision"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-6 animate-fadeInRight">
            <h2 className="fw-bold">Our Mission & Vision</h2>
            <p className="text-muted mt-3">
              At <span className="text-success fw-bold">WaterConserve</span>, we
              aim to tackle the global water crisis by combining technology,
              community engagement, and innovative solutions. Our vision is a
              future where every drop of water is used wisely, and communities
              thrive with sustainable practices.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3">
                <i className="fa fa-check-circle text-success me-2"></i> Promote
                sustainable water usage practices.
              </li>
              <li className="mb-3">
                <i className="fa fa-check-circle text-success me-2"></i> Provide
                data-driven insights for households and cities.
              </li>
              <li>
                <i className="fa fa-check-circle text-success me-2"></i>{" "}
                Innovate through AI and IoT for water conservation.
              </li>
            </ul>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="text-center py-5 bg-light rounded shadow animate-fadeInUp">
          <h2 className="fw-bold mb-4">Our Global Impact</h2>
          <div className="row">
            <ImpactStat
              icon="fa-globe"
              title="Total Water Saved"
              value="1.5 Million Liters"
            />
            <ImpactStat
              icon="fa-users"
              title="Households Engaged"
              value="20,000+"
            />
            <ImpactStat
              icon="fa-tools"
              title="Pipelines Monitored"
              value="4,200+"
            />
            <ImpactStat
              icon="fa-leaf"
              title="Rainwater Harvesting Systems"
              value="1,000+"
            />
          </div>
        </section>

        {/* Our Process Flow */}
        <section className="py-5">
          <h2 className="text-center fw-bold mb-4 animate-fadeInDown">
            Our Process Flow
          </h2>
          <div className="row g-4">
            <ProcessStep
              step="1"
              title="Data Collection"
              description="We gather real-time water usage data using IoT-enabled devices and advanced sensors."
              icon="fa-database"
            />
            <ProcessStep
              step="2"
              title="Analysis & Insights"
              description="Our AI-powered algorithms analyze data to identify wastage patterns and optimization opportunities."
              icon="fa-chart-line"
            />
            <ProcessStep
              step="3"
              title="Community Engagement"
              description="We work with communities to implement water-saving practices through workshops and resources."
              icon="fa-users"
            />
            <ProcessStep
              step="4"
              title="Sustainable Implementation"
              description="Using actionable insights, we design and implement rainwater harvesting and pipeline management solutions."
              icon="fa-tools"
            />
            <ProcessStep
              step="5"
              title="Monitoring & Feedback"
              description="Our platform continuously monitors usage and provides feedback to ensure sustainable practices are maintained."
              icon="fa-check-circle"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-5 animate-pulse">
          <h3 className="fw-bold text-dark mb-3">Join Us in Our Mission</h3>
          <p className="lead text-muted">
            Together, we can conserve water and build a sustainable future.
          </p>
          <a
            href="/get-involved"
            className="btn btn-success btn-lg text-uppercase shadow"
          >
            Get Involved
          </a>
        </section>
      </main>

      <ProfessionalFooter />
    </>
  );
};

// Impact Statistics Card Component
const ImpactStat = ({ icon, title, value }) => (
  <div className="col-md-3 animate-scaleOnHover">
    <div className="card shadow-sm text-center py-4">
      <div className="icon-circle bg-primary text-white mb-3 mx-auto">
        <i className={`fa ${icon}`} style={{ fontSize: "24px" }}></i>
      </div>
      <h5 className="fw-bold">{title}</h5>
      <p className="display-6 fw-bold text-primary">{value}</p>
    </div>
  </div>
);

// Process Flow Step Component
const ProcessStep = ({ step, title, description, icon }) => (
  <div className="col-lg-4 col-md-6 animate-fadeInUp">
    <div className="card shadow-sm text-center">
      <div
        className="icon-circle bg-success text-white mb-3 mx-auto"
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
      <div className="card-body">
        <h5 className="fw-bold">
          Step {step}: {title}
        </h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  </div>
);

export default About;
