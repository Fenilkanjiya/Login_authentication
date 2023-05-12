import React from "react";

const TableForm = (props) => {
  console.log(props)

  return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {
              Object?.keys(props?.data[0]).map((key, index) => (
               <th key={index}>{key?.toUpperCase()}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((val, index) => (
            <tr key={index}>
              {
                Object.values(val)?.map((res, index) => (
                 <td key={index} onClick={props.onClick}>{res}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default TableForm;
