import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark shadow-lg p-3 mb-5">
        <div className="container">
          <Link className="navbar-brand logo-font" to="/">
            Book Shop Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link body-font" to="/authors">
                  Author
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link body-font" to="/publishers">
                  Publisher
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link body-font" to="/categories">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link body-font" to="/books">
                  Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
