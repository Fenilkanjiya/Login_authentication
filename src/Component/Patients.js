import axios from "axios";
import React, { useEffect, useState } from "react";

const patientsUrl = "http://localhost:3000/data";

const Patients = () => {
  const [patientsdata, setPatientsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = patientsdata.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(patientsdata.length / recordsPerPage);
  const numbers = [...Array(numberOfPage + 1).keys()].slice(1);

  const getPatients = async () => {
    await axios.get(patientsUrl).then((res) => {
      setPatientsData(res.data);
    });
  };

  useEffect(() => {
    getPatients();
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
      <h1>Patients</h1>
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
                Referral_program
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    UCLA Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DTC_Proactive
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Outreach
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                gender
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Female
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Male
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Other
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Patient name</th>
              <th scope="col">Gender</th>
              <th scope="col">referral Program</th>
            </tr>
          </thead>
          {records.map((val) => {
            return (
              <>
                <tbody>
                  <tr key={val.id}>
                    <td>{val.patient.email}</td>
                    <td>{val.patient.address.home.full_name}</td>
                    <td>{val.patient.gender}</td>
                    <td>{val.patient.referral_program}</td>
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

export default Patients;
