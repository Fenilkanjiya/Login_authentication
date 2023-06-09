import React, { useEffect, useState } from "react";
import axois from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import TableForm from "../table/TableForm";

const encounterUrl = "http://localhost:3000/data";

const Encounter = () => {
  const [encouterData, setEncounterData] = useState([]);
  const [filterDataValue, setFilterDataValue] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getEncouter();
  }, []);

  const getEncouter = async () => {
    await axois.get(encounterUrl).then((res) => {
      setEncounterData(res.data);
      setFilterDataValue(res.data);
    });
  };

  const handlerFilter = async (e) => {
    let value = e.target.value;
    let filterData = encouterData.filter(
      (element) => element.consultation_type === value
    );
    if (!value) {
      setFilterDataValue(encouterData);
    } else {
      setFilterDataValue(filterData);
    }
  };

  const handleSelect = (date) => {
    let filtred = encouterData.filter((product) => {
      let productDate = new Date(product.date_of_service);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setFilterDataValue(filtred);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  let values = [];

  filterDataValue.map((res) => {
    values.push({
      Date: new Date(res.date_of_service).toLocaleDateString(),
      Name: res.patient.address.home.full_name,
      Consultation: res.consultation_type,
      id: res.id,
    });
  });
  
  return (
    <>
      <h1>Encounters</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handlerFilter}
            >
              <option value="">consultation_type</option>
              <option value="FH Test">FH Test</option>
              <option value="Get Started - No Results ">
                Get Started - No Results
              </option>
              <option value="CDT Consultation">CDT Consultation</option>
            </select>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container">
        {values?.length > 0 && <TableForm data={values} id={filterDataValue} />}
      </section>
    </>
  );
};

export default Encounter;
