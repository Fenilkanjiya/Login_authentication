import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const handleFetcher = async () => {
    return fetch("http://localhost:3000/loginData")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  useEffect(() => {
    handleFetcher();
  }, []);

  function generateUniqueID() {
    let alphanumericChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniqueID = "";
    for (let i = 0; i < 32; i++) {
      let randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      uniqueID += alphanumericChars[randomIndex];
    }
    return uniqueID;
  }

  const handleSubmit = () => {
    let name1 = userData.find((o) => o.name === name);
    let pass1 = userData.find((o) => o.password === password);
    let uniqueID = generateUniqueID();
    if (name1 && pass1) {
      console.log("Login successful");
      localStorage.setItem("itemValues", uniqueID);
      localStorage.setItem("name", name1.name.toString());
      navigate("/");
    } else {
      alert("Login failed - please fill correct first");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
