import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import CompanyStructure from "./Components/CompanyStructure";
import Navbar from "./Navbar-slide/Navbar";
import Profile from "./Profile/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      {/* <div><CompanyStructure /></div> */}
      
      <Routes>
                    {/* <Route path="/" element={<Home/>} /> */}
                    <Route path="/profile" element={<Profile/>} />
                     {/* <Route path= "/contact" element={<Contact/>} /> */}
                  <Route path="/company" element={<CompanyStructure/>}/>

                </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
