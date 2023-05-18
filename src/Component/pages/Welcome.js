import React from "react";

const Welcome = () => {
  const token = localStorage.getItem("name");

  return (
    <>
      <h1>Welcome {token}</h1>
    </>
  );
};

export default Welcome;
