import React from "react";

const TableForm = (props) => {
  return (
    <>
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>{props.header}</tr>
          {props.body}
        </tbody>
      </table>
    </>
  );
};
export default TableForm;
