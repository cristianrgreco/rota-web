import React from "react";
import './CloseButton.css';

export function CloseButton({ onClick }) {
  return <div className="CloseButton" onClick={onClick} />;
}
