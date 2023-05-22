import React, {useContext} from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const currentUser = useContext(AuthContext);
  
    if (!!currentUser === null) {
        console.log("Invalid currentUser null");
        return <Navigate to="/login" />
    } else if(!!currentUser === undefined){
        console.log("Invalid currentUser Undefined");
        return <Navigate to="/login" />
    } else{
        console.log("valid");
        return <>{children}</>;
    }
};

export default PrivateRoute;
