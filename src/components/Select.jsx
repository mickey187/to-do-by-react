import React from "react";

const Select = ({
  id,
  name,
  onChange,
  onBlur,
  value,
  validationMessage,
  children,
}) => {
  return (
    <div className="p-3">
      <select
        id={id}
        name={name}
        className="form-control form-select"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {children}
      </select>
      {validationMessage && <small className="form-text text-danger ps-2">{validationMessage}</small>}
    </div>
  );
};

export default Select;
