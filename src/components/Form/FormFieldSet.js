import React from "react";
import "./FormFieldSet.css";

export function FormFieldSet({ legend, children }) {
  return (
    <fieldset className="FormFieldSet">
      <legend className="FormFieldSetLegend">{legend}</legend>
      {children}
    </fieldset>
  );
}
