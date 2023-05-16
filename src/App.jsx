import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navlink from "./components/Navlink";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Navigate, Route} from 'react-router-dom';
import AppRoutes from "./routes/Routes";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
    
  );
}

export default App;
