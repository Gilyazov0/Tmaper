import { Route, Router, Routes } from "react-router-dom";
import CompanyStructure from "./Components/CompanyStructure";
import Survey from "./Components/Survey";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form" element={<Survey/>}></Route>
        </Routes>
      </Router>
      <CompanyStructure />
    </div>
  );
}

export default App;
