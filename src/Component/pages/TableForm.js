import React, { useState } from "react";
import Paginate from "../pagination/Paginate";
import { useNavigate } from "react-router-dom";

const TableForm = (props) => {
  console.log("props", props.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props?.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(props?.data?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowClick = (value) => {
    navigate(`/patientDetails/${value.id}`, { state: { data: value } });
  };

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {Object?.keys(currentPosts[0]).map((key, index) => (
            <th key={index}>{key?.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentPosts.map((val, index) => (
          <tr key={index}>
            {Object.values(val)?.map((res, index) => (
              <td key={index} onClick={() => handleRowClick(val)}>
                {res}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={props?.data?.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </table>
  );
};

export default TableForm;
