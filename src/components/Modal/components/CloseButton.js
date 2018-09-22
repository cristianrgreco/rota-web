import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CloseButton.css";

export function CloseButton({ onClick = () => {} }) {
  return (
    <div className="ModalHeaderButton danger" onClick={onClick}>
      <FontAwesomeIcon fixedWidth={true} icon={faTimes} />
    </div>
  );
}
