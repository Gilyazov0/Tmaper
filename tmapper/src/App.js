import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import CompanyStructure from "./Components/CompanyStructure";
import Navbar from "./Navbar-slide/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div><CompanyStructure /></div>
    </div>
  );
}

export default App;
