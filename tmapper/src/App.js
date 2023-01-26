import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CompanyStructure from "./Components/CompanyStructure";
import Navbar from "./Navbar-slide/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./Components/Survey";
import FormContextProvider from "./Components/FormContext";
import { ToastContainer } from "react-toastify";
import HomePage from "./Components/HomePage";
import ClusteringPage from "../src/Components/ClusteringPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#A2D4F2" }}>
        <Navbar />

        <ToastContainer></ToastContainer>

        <Routes>
          <Route
            path="/form"
            element={
              <FormContextProvider>
                <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.679",
                  }}
                >
                  <Survey />
                </div>
              </FormContextProvider>
            }
          ></Route>
          <Route path="/company" element={<CompanyStructure />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/clusters" element={<ClusteringPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
