import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const loginUrl = "http://localhost:3000/login";

const Welcome = () => {
  // const [user, setUser] = useState();
  const navigate = useNavigate();

  const token = localStorage.getItem("name");

  // useEffect(() => {

  //   if (!token) {
  //     navigate("/");
  //   } else {
  //     fetch(loginUrl, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setUser(data))
  //       .then((error) => console.log(error));
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    // localStorage.removeItem('name');
    // navigate("/login");
    window.location.reload(false);

  };
  return (
    <>
      <h1>Welcome {token}</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button>
    </>
  );
};

export default Welcome;
