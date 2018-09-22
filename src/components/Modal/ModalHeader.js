import React from "react";
import { CloseButton } from "./components";
import "./ModalHeader.css";

export function ModalHeader({ children }) {
  return (
    <div className="ModalHeader">
      <div className="ModalHeaderTitle">{children}</div>
      <div className="ModalHeaderControls">
        <CloseButton />
      </div>
    </div>
  );
}
