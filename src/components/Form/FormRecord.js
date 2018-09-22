import React from "react";
import "./FormRecord.css";

export function FormRecord({ name, type, autoFocus = false }) {
  return (
    <div className="FormRecord">
      <label className="Label" htmlFor={name}>
        {name}
      </label>
      <input className="Input" type={type} id={name} autoFocus={autoFocus} />
    </div>
  );
}
