// import CompanyStructure from "./Components/CompanyStructure";
import EmployeeProfile from "./Components/EmployeeProfile/EmployeeProfile";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Contact from "./Components/Contact/Contact";



function App() {
  return (
    <div className="App" src="./images/5065282.jpg">
      {/* <CompanyStructure /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
