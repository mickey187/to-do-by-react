import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.variant} btn-block`}
      onClick={props.onClick}
      onBlur={props.onBlur}
      type={props.buttonType}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
