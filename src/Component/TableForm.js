import React, { useState } from "react";

const TableForm = ({records}) => {

    console.log("data" , records)
//     const data = {
//     A: "A",
//     name: "fenil",
//     B: "B",
//     C: "C"
//   };

  const column = records && Object.keys(records[0]);

//   const ThData = () => {
//     return column && column.map((data) => {
//       return <th key={data}>{data}</th>;
//     });
//   };

//   const tdData = () => {
//     return data && data.map((data) => {
//       return (
//         <tr>
//           {column && column.map((val) => {
//             return <td>{data[val]}</td>;
//           })}
//         </tr>
//       );
//     });
//   };

//   return (
//     <>
//       <table className="table table-striped table-bordered">
//         <thead>
//           <tr>
//             {ThData()}                    
//           </tr>
//         </thead>
//         <tbody>
//           {tdData()}
//         </tbody>
//       </table>
//     </>
//   );
};

export default TableForm;
