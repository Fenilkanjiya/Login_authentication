import React from "react";

const Header = () => {

  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary navbar-light">
        < div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="logo512.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          
          </a>
          <a className="navbar-brand">
            <span className="fs-3 me-3">{name}</span>
            <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
          </a>
        </div>
      </nav>

    </>
  );
};

export default Header;
