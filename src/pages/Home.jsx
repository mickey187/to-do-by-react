import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Navlink from "../components/Navlink";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <Fragment>
      <Navbar>
        <li className="nav-item">
          <Link to="/add-task" className="nav-link d-flex">
            <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={"plus-circle"} className="m-1"/> 
            <p className="text-light m-1">Task</p>
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/today" className="nav-link d-flex">
            <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={"list-dots"} className="m-1"/> 
            <p className="text-light m-1">Today</p>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/upcoming" className="nav-link d-flex">
            <span className="d-flex align-items-center">
            <FontAwesomeIcon icon={"calendar"} className="m-1"/> 
            <p className="text-light m-1">Upcoming</p>
            </span>
          </Link>
        </li>
      </Navbar>
    </Fragment>
  );
};

export default Home;
