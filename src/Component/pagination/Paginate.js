import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li onClick={previousPage} className="page-item">
          <a className="page-link">Prev</a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item"
            onClick={() => paginate(number)}
          >
            <a
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li onClick={nextPage} className="page-item">
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
