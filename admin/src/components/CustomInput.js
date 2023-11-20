import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id,  name, value, onChange, onBlur } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control my-4`}
        id={i_id}
        placeholder={label}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;