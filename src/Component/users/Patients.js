import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TableForm from "../pages/TableForm";

const patientsUrl = "http://localhost:3000/data";

const Patients = () => {
  const [patientsdata, setPatientsData] = useState([]);
  const [filterDataValue, setFilterDataValue] = useState([]);
  const navigate = useNavigate();

  const getPatients = async () => {
    await axios.get(patientsUrl).then((res) => {
      setPatientsData(res.data);
      setFilterDataValue(res.data);
    });
  };

  const handlerFilter = async (e) => {
    let value = e.target.value;
    let filterData = patientsdata.filter(
      (element) => element.patient.referral_program === value
    );
    if (!value) {
      setFilterDataValue(patientsdata);
    } else {
      setFilterDataValue(filterData);
    }
  };

  const handlerFilterGender = (e) => {
    let filteredValue = e.target.value;

    let filterData = patientsdata.filter(
      (element) => element.patient.gender === filteredValue
    );
    if (!filteredValue) {
      setFilterDataValue(patientsdata);
    } else {
      setFilterDataValue(filterData);
    }
  };
  useEffect(() => {
    getPatients();
  }, []);

  const handlerRowClick = (value) => {
    navigate(`/patient/${value.id}`, { state: { data: value } });
  };

  let values = [];

  filterDataValue.forEach((res) => {
    values?.push({
      Email: res.patient.email,
      name: res.patient.address.home.full_name,
      Gender: res.patient.gender,
      Referral: res.patient.referral_program,
    });
  });

  return (
    <>
      <h1>Patients</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 me-5">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handlerFilter}
            >
              <option value="">referral_program</option>
              <option value=" UCLA Health">UCLA Health</option>
              <option value="DTC_Proactive">DTC_Proactive</option>
              <option value="outreach">outreach</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handlerFilterGender}
            >
              <option value="">gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container">
        {values?.length > 0 && <TableForm data={values} />}
      </section>
    </>
  );
};

export default Patients;