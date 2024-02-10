import React  from "react";
import './inputfield.css'

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="formcontrol"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;