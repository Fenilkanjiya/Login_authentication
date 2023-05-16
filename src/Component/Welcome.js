import React from "react";

const Welcome = () => {
  const token = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <>
      <h1>Welcome {token}</h1>
      {/* <button className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button> */}
    </>
  );
};

export default Welcome;
