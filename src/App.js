import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/authentication/Login";
import Header from "./Component/pages/Header";
import Encounter from "./Component/users/Encounters";
import Patients from "./Component/users/Patients";
import Sidebar from "./Component/pages/Sidebar";
import Welcome from "./Component/pages/Welcome";
import Details from "./Component/details/Details";
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
                <Route path="/patients" element={<Patients />} />
                <Route path="/patientDetails/:id" element={<Details />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
