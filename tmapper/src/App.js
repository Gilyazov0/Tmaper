import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CompanyStructure from "./Components/CompanyStructure";
import Navbar from "./Navbar-slide/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./Components/Survey";
import FormContextProvider from "./Components/FormContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <CompanyStructure />
      </div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
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
