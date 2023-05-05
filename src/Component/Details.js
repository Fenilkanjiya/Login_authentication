import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import  useParams  }from "react-router-dom";
import Patients from './Patients';

const Details = (props) => {
 
  const location = useLocation();
  // const { id } = useParams();
  const rowData = location.state?.data;
  // const
  // console.log(rowData);
 
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
        <ht />
      </div>
    </div>
  );
};

export default Details;
