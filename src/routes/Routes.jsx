import { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const currentUser = useContext(AuthContext);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={!currentUser ? <Login /> : <Navigate to="/home" />}
      ></Route>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
};

export default AppRoutes;
