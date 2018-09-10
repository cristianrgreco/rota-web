import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CloseButton.css";

export function CloseButton({ onClick }) {
  return (
    <div className="CloseButton" onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
}
