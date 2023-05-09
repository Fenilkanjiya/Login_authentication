import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const rowData = location.state?.data;

  return (
    <div>
      <h1>{location.pathname} / Patients Details</h1>
      <hr />
      <div className="container">
        <h3>Email : {rowData?.patient.email} </h3>
        <hr />
        <h3>Full Name : {rowData?.patient.address.home.full_name}</h3>
        <hr />
        <h3>Date of Birth : {rowData?.patient.dob}</h3>
        <hr />
        <h3>Gender : {rowData?.patient.gender}</h3>
      </div>
    </div>
  );
};

export default Details;
