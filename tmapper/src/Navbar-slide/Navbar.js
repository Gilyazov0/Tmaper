import React, {useState} from 'react';
import hamburger from "./list.png";
import "./Navbar.css";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
            <div>
                <img src={hamburger}
                    alt="hamburger"
                    className="hamburger"
                    onClick={toggleNavbar}/>
                <Navbar expand="md"
                    className={
                        `navbar ${
                            isOpen ? 'is-open' : 'is-closed'
                        }`
                }>

                    <Nav className="link-name" navbar>
                        <Link to="/" className="nav-link-home">Home</Link>
                        <Link to="/employee" className="nav-link-employee">Employee Profil</Link>
                        <Link to="/contact" className="nav-link-contact">Contact</Link>
                    </Nav>
                </Navbar>
                <div className={
                    `content ${
                        isOpen ? 'is-open' : 'is-closed'
                    }`
                }>
                    {/* <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/employee" element={<Employee/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>  */} </div>
            </div>
        </BrowserRouter>
    );
}

export default Menu;
