import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ 'borderRadius': '0'}}>
      <h5 className="card-header">{props.cardHeader}</h5>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};

export default Card;



