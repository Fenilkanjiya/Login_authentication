import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Header from "./Component/Header";
import Encounter from "./Component/Encounters";
import Patients from "./Component/Patients";
import Sidebar from "./Component/Sidebar";
import Welcome from "./Component/Welcome";
import Details from "./Component/Details";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const items = localStorage.getItem("itemValues");
    if (items) {
      setLogin(true);
    }
  }, [login]);
  return (
    <div className="App">
      {login === false ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/encounters" element={<Encounter />} />
                <Route path="/Encounter/:id" element={<Details />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/patient/:id" element={<Details />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
