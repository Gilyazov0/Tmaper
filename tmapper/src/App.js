import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyStructure from "./Components/CompanyStructure";
import Survey from "./Components/Survey";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Survey/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <CompanyStructure /> */}
    </div>
  );
}

export default App;
