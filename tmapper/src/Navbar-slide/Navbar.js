import React, { useState } from "react";
import hamburger from "./list.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import phone from "./phone.png";
import user from "./user.png";
import home from "./home.png";
import company from "./company.png";

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
        className="hamburger"
        onClick={toggleNavbar}
      />

      <Navbar
        expand="md"
        className={`navbar ${isOpen ? "is-open" : "is-closed"}`}
      >
        <Nav className="link-name" navbar>
          <img src={home} alt="home" className="home" />
          <Link as={Link} to="/" className="nav-link-home">
            Home
          </Link>
          <img src={user} alt="user" className="user" />
          <Link as={Link} to="/profile" className="nav-link-employee">
            Employee Profile{" "}
          </Link>
          <img src={company} alt="company" className="company" />

          <Link as={Link} to="/company" className="nav-link-company">
            Company Structure{" "}
          </Link>

          <img src={phone} alt="phone" className="icon" />
          <Link as={Link} to="/contact" className="nav-link-contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
      <div className={`content ${isOpen ? "is-open" : "is-closed"}`}></div>
    </div>
  );
}
export default Menu;
