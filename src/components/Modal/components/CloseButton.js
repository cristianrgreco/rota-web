import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CloseButton.css";

export function CloseButton() {
  return (
    <div className="ModalHeaderButton danger">
      <FontAwesomeIcon fixedWidth={true} icon={faTimes} />
    </div>
  );
}
