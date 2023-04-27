import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Header from "./Component/Header";
import Encounter from "./Component/Encounters";
import Patients from "./Component/Patients";
import Sidebar from "./Component/Sidebar";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/encounters" element={<Encounter />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
