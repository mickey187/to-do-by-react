import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prefix } from "@fortawesome/free-brands-svg-icons";

const Navbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("Error logging out:", error);
      // Handle error logging out
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          To-Do-By-React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto">{props.children}</ul>
          <div className="d-flex align-items-center me-5">
            <div className="dropdown show pe-5">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
              >
                <FontAwesomeIcon icon={["far", "fa-bell"]} color="red" size="lg" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right "
                style={{ left: "inherit", right: "0px" }}
              >
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </div>

            <div className="dropdown pe-5 me-1">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684231358~exp=1684231958~hmac=4c27dd1b1d26cac9eeddb6ee0ea5d64ec738dc7396d6c4ad30533b05d9ca685b"
                alt="Avatar"
                className="rounded-circle overflow-hidden"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                id="dropdownMenuButton"
                // data-bs-toggle="dropdown"
                // aria-expanded="false"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <ul
                className={` dropdown-menu${isDropdownOpen ? " show" : ""}`}
                aria-labelledby="dropdownMenuButton"
                style={{ right: "auto", left: 0 }}
              >
                <li>
                  <span className="dropdown-item-text">
                    <strong>{currentUser && currentUser.name}</strong>
                    <br />
                    {currentUser && currentUser.email}
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item btn btn-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
