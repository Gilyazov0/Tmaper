import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CompanyStructure from "./Components/CompanyStructure";
import Navbar from "./Navbar-slide/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./Components/Survey";
import FormContextProvider from "./Components/FormContext";
import { ToastContainer } from "react-toastify";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div style={{ height: "100vh" }} className="App">
      <Navbar />
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/company" element={<CompanyStructure />} />
          <Route path="/home" element={<HomePage />}></Route>
          <Route
            path="/form"
            element={
              <FormContextProvider>
                <Survey />
              </FormContextProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
