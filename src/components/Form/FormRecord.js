import React from "react";
import "./FormRecord.css";

export function FormRecord({ name, type, value, onChange, autoFocus = false }) {
  return (
    <div className="FormRecord">
      <label className="Label" htmlFor={name}>
        {name}
      </label>
      <input
        className="Input"
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}
