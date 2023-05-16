import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Navlink from "../components/Navlink";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Navbar>
        <li className="nav-item">
          <Link to="/home" className="nav-link d-flex">
            Home
          </Link>
        </li>
      </Navbar>
    </Fragment>
  );
};

export default Home;
