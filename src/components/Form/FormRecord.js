import React from "react";
import { Input, Label } from ".";
import "./FormRecord.css";

export function FormRecord({ name, type, value, onChange, autoFocus = false }) {
  return (
    <div className="FormRecord">
      <Label name={name}>{name}</Label>
      <Input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}
