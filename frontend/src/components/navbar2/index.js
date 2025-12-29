import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; // Import Modal
import "bootstrap/dist/css/bootstrap.min.css";

function ProfessionalNavbar() {
  const [showChatbot, setShowChatbot] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/"); // Navigate to the Login path
  };

  const handleChatbotOpen = () => {
    setShowChatbot(true); // Open Chatbot modal
  };

  const handleChatbotClose = () => {
    setShowChatbot(false); // Close Chatbot modal
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#333333" }}
        className="navbar-dark py-3 shadow-sm"
      >
        <Container>
          {/* Brand Name */}
          <Navbar.Brand
            href="/"
            className="fw-bold"
            style={{ color: "#20c997", fontSize: "1.5rem" }}
          >
            WaterConserve
          </Navbar.Brand>

          {/* Mobile Menu Toggle */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Collapsible Navbar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/recommendations"
                className="text-light fw-medium"
                style={{ fontSize: "1.2rem", marginRight: "15px" }}
              >
                Recommendation System
              </Nav.Link>
              <Nav.Link
                onClick={handleChatbotOpen} // Open chatbot modal
                className="text-light fw-medium"
                style={{
                  fontSize: "1.2rem",
                  marginRight: "15px",
                  cursor: "pointer",
                }}
              >
                Chatbot
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-light fw-medium"
                style={{ fontSize: "1.2rem", marginRight: "15px" }}
              >
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              {/* Login Button */}
              <Button
                variant="outline-light"
                className="fw-bold px-4"
                style={{
                  borderColor: "#20c997",
                  color: "#20c997",
                  fontSize: "1.1rem",
                }}
                onMouseEnter={(e) =>
                  ((e.target.style.backgroundColor = "#20c997"),
                  (e.target.style.color = "#fff"))
                }
                onMouseLeave={(e) =>
                  ((e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#20c997"))
                }
                onClick={handleLoginClick} // Call the navigation handler
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Chatbot Modal */}
      <Modal show={showChatbot} onHide={handleChatbotClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Chatbot</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "500px", overflow: "hidden" }}>
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/18/00/20241218004545-OTBE4MVC.json"
            title="Chatbot"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="microphone; camera"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfessionalNavbar;
