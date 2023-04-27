import React, { useEffect, useState } from "react";
import axois from "axios";

const encounterUrl = "http://localhost:3000/data";

const Encounter = () => {
  const [encouterData, setEncounterData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = encouterData.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(encouterData.length / recordsPerPage);
  const numbers = [...Array(numberOfPage + 1).keys()].slice(1);                       

  const getEncouter = async () => {
    await axois.get(encounterUrl).then((res) => {
      setEncounterData(res.data);
      console.log(res.data);
    });
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
  return (
    <>
      <h1>Encounters</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Consultiation_type
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    FH Test
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Get Started - No results
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CDT Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <input type="date" className="btn btn-secondary" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Date of Service</th>
              <th scope="col">Patient name</th>
              <th scope="col">Consultation type</th>
            </tr>
          </thead>
          {records.map((val) => {
            let date = new Date(val.date_of_service);
            let formatDate = date.toLocaleDateString();
            return (
              <>
                <tbody>
                  <tr key={val.id}>
                    <td>{formatDate}</td>
                    <td>{val.patient.address.home.full_name}</td>
                    <td>{val.consultation_type}</td>
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
                <a className="page-link" href="#" onClick={() => setCurrentPage(i + 1)}>
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
