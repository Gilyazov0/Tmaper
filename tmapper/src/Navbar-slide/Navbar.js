import React, {useState} from 'react';
import hamburger from "./list.png";
import "./Navbar.css";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
                    <Navbar expand="md" className={`navbar ${isOpen ? 'is-open' : 'is-closed'}`}>
                <img src={hamburger} alt="hamburger" className="hamburger" onClick={toggleNavbar} />
                <Nav className="ml-auto" navbar>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/employee" className="nav-link">Employee Profil</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
            </Navbar>
            <div className={`content ${isOpen ? 'is-open' : 'is-closed'}`}>
                {/* <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/employee" element={<Employee/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>  */}
            </div>
        </BrowserRouter>
    );
}

export default Menu;

