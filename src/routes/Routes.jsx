import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
// import { AuthContext } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  // const currentUser = useContext(AuthContext);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<PrivateRoute>
          <Home />
        </PrivateRoute>}
      ></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-task"
        element={
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
