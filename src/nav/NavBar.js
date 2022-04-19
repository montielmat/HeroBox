import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid ">

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="nav-link text-white">Home</a>
        <a className="nav-link text-white">Marvel</a>
        <a className="nav-link text-white">Dc</a>
      </div>
      </div>
    </nav>
  );
};
