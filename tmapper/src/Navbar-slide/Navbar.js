import React, {useState} from 'react';
import hamburger from "./list.png";
import "./Navbar.css";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import phone from "./phone.png";
import user from "./user.png";
import home from "./home.png";

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
                            <img src={home}
                                alt="home"
                                className="home"/>
                            <Link to="/" className="nav-link-home">Home</Link>
                            <img src={user}
                                alt="user"
                                className="user"/>
                            <Link to="/employee" className="nav-link-employee">
                                Employee Profile </Link>


                                <img src={user}
                                alt="user"
                                className="user"/>
                            <Link to="/employee" className="nav-link-employee">
                                CompanyStructure </Link>

                            <img src={phone}
                                alt="phone"
                                className="icon"/>
                            <Link to="/contact" className="nav-link-contact">
                                Contact
                            </Link>
                            
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
