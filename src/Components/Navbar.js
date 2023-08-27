import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Link className="navbar-brand" to="/">
                Blogs
              </Link>
            </div>
            <div className="col-md-9">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Link className="navbar-brand" to="/write-blog">
                <i class="fa-solid fa-pen-to-square"></i> Write
              </Link>
            </div>
            <div className="col-md-6">
              <i
                class="fa-regular fa-user"
                style={{
                  width: "45px",
                  height: "45px",
                  border: "1px solid black",
                  textAlign: "center",
                  lineHeight: "45px",
                  borderRadius: "15px",
                }}
              ></i>
              <i class="fa-solid fa-caret-down p-2"></i>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
