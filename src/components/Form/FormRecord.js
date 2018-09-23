import React from "react";
import { Input, Label } from ".";
import "./FormRecord.css";

export function FormRecord({
  name,
  type,
  value,
  placeholder,
  min,
  max,
  onChange
}) {
  return (
    <div className="FormRecord">
      <Label name={name}>{name}</Label>
      <Input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
}
