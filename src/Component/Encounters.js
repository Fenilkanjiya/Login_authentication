import React, { useEffect, useState } from "react";
import axois from "axios";
// import Details from "./Details";
import { Link, useNavigate } from "react-router-dom";

const encounterUrl = "http://localhost:3000/data";

const Encounter = () => {
  const [encouterData, setEncounterData] = useState([]);
  const [filterDataValue, setFilterDataValue] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filterDataValue.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(filterDataValue.length / recordsPerPage);
  const numbers = [...Array(numberOfPage + 1).keys()].slice(1);

  const navigate = useNavigate();

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

    // setFilterDataValue(filterData);
    if (!value) {
      setFilterDataValue(encouterData);
    } else {
      setFilterDataValue(filterData);
    }
  };
  useEffect(() => {
    getEncouter();
  }, []);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowClick = (value) => {
    navigate(`/encounter/${value.id}`, { state: { data: value } });
  };

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
              // defaultValue={encouterData}
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
            <input type="date" className="btn btn-primary me-3" />
            <input type="date" className="btn btn-primary"/>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Date of Service</th>
              <th scope="col">Patient name</th>
              <th scope="col">Consultation type</th>
            </tr>
          </thead>

          {records.map((value) => {
            let date = new Date(value.date_of_service);
            let formatDate = date.toLocaleDateString();
            return (
              <>
                <tbody>
                  <tr key={value.id} onClick={() => handleRowClick(value)}>
                    <td>
                      {/* <Link
                        to={{
                          pathname: `/encounters/${value.id}`,
                          state: { email: value.consultation_type },
                        }}
                      > */}
                      {formatDate}
                      {/* </Link> */}
                    </td>
                    <td>{value.patient.address.home.full_name}</td>
                    <td>{value.consultation_type}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {n}
                </a>
              </li>
            ))}

            <li className="page-item">
              <a className="page-link" href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Encounter;
