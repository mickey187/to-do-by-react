import React from "react";

const FormInput = ({ inputType, placeholder, id, name, onChange, onBlur, value, validationMessage }) => {
  return (
    <div className="p-3">
      <input
        id={id}
        name={name}
        type={inputType}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onChange}
        value={value}
      />
      {validationMessage && <small className="form-text text-danger ps-2">{validationMessage}</small>}

      
    </div>
  );
};

export default FormInput;
