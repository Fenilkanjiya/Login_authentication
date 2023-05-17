import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./../breadcrums.css";

const Details = () => {
  const location = useLocation();
  const rowData = location?.state?.data;

  const path = location.pathname.startsWith("/encounter")
    ? "/encounters"
    : "/patients";

  return (
    <div>
      <h1>
        <Link
          to={path}
          className="breadcrumb-active"
          style={{ textDecoration: "none" }}
        >
          {location.pathname.startsWith("/encounter")
            ? "Encounters"
            : "Patients"}
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <span className="breadcrumb-active">Patients Details</span>
      </h1>

      <hr />
      <div className="container">
        <h3>Email : {rowData?.Email} </h3>
        <hr />
        <h3>Full Name : {rowData?.patient?.address?.home?.full_name}</h3>
        <hr />
        <h3>Date of Birth : {rowData?.patient?.dob}</h3>
        <hr />
        <h3>Gender : {rowData?.Gender}</h3>
      </div>
    </div>
  );
};

export default Details;
