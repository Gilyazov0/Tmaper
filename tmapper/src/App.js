import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyStructure from "./Components/CompanyStructure";
import Survey from "./Components/Survey";
import FormContextProvider from "./Components/FormContext";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
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
      {/* <CompanyStructure /> */}
    </div>
  );
}

export default App;
