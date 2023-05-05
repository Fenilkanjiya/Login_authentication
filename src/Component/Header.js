import React from "react";

const Header = () => {

  const name = localStorage.getItem("name");
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo512.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Welcome {name}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
