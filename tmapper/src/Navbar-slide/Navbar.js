import React, { useState } from "react";
import hamburger from "./list.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import phone from "./phone.png";
import user from "./user.png";
import home from "./home.png";
import company from "./company.png";
import "./Navbar.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <img
        src={hamburger}
        alt="hamburger"
        className={isOpen ? "hamburger" : "hamburger change-color"}
        onClick={toggleNavbar}
      />

      <Navbar
        expand="md"
        className={`navbar ${isOpen ? "is-open" : "is-closed"}`}
        style={{ position: "fixed" }}
      >
        <Nav className="link-name">
          <div className="nav-link-home">
            <img src={home} alt="home" className="nav-icon" />
            <Link as={Link} to="/" className="nav-label">
              Home
            </Link>
          </div>

          <div className="nav-link-user">
            <img src={user} alt="user" className="nav-icon" />
            <Link as={Link} to="/form" className="nav-label">
              Survey
            </Link>
          </div>

          <div className="nav-link-company">
            <img src={company} alt="company" className="nav-icon" />
            <Link as={Link} to="/company" className="nav-label">
              Company Structure
            </Link>
          </div>

          <div className="nav-link-contact">
            <img src={phone} alt="phone" className="nav-icon" />
            <Link as={Link} to="/contact" className="nav-label">
              Contact
            </Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Menu;
