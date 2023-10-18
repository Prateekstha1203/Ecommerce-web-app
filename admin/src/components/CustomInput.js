import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id,  name, value, onChnge, onBlr } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control `}
        id={i_id}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChnge}
        onBlur={onBlr}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;