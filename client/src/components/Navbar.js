import React from 'react'
import { NavLink } from "react-router-dom"
import '../css/navbar.css'

const Navbar = () => {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                PICT Hostel
              </a>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-NavLink active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/mess">
                      Mess
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/complaint">
                      Complaint
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/users">
                      Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/signup">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/">
                      Logout
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                                    <NavLink className="nav-NavLink" to="/dashboard">Dashboard</NavLink>
                                </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}

export default Navbar