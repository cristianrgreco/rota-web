import React from "react";
import "./Modal.css";

export function Modal({ children }) {
  return (
    <div className="ModalWrapper">
      <div className="Modal">{children}</div>
    </div>
  );
}
