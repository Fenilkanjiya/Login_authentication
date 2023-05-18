import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./breadcrums.css";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rowData = location?.state?.data;

  const path = navigate(-1)

  return (  
    <div>
      <h1>
        <Link
          to={path}
          className="breadcrumb-active"
          style={{ textDecoration: "none" }}
        >
          {location.pathname.startsWith("/patientDetails")
            ? "Patients"
            : "Encounters"}
        </Link>

        <span className="breadcrumb-arrow">&gt;</span>
        <span className="breadcrumb-active">Patients Details</span>
      </h1>

      <hr />
      <div className="container">
        <h3>Email : {rowData?.patient?.email} </h3>
        <hr />
        <h3>Full Name : {rowData?.patient?.address?.home?.full_name}</h3>
        <hr />
        <h3>Date of Birth : {rowData?.patient?.dob}</h3>
        <hr />
        <h3>Gender : {rowData?.patient?.gender}</h3>
      </div>
    </div>
  );
};

export default Details;
