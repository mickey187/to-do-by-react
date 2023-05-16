import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

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
            <div className="d-flex align-items-center">
            <div className="dropdown">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684231358~exp=1684231958~hmac=4c27dd1b1d26cac9eeddb6ee0ea5d64ec738dc7396d6c4ad30533b05d9ca685b"
              alt="Avatar"
              className="rounded-circle overflow-hidden"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu dropdown-menu-end show">
                <span className="dropdown-item-text">
                  <strong>{currentUser.name}</strong>
                  <br />
                  {currentUser.email}
                </span>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
