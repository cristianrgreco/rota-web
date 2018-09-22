import React from "react";
import classNames from "classnames";
import "./Button.css";

export function Button({
  children,
  onClick,
  success = false,
  info = false,
  danger = false,
  disabled = false
}) {
  const className = classNames({
    Button: true,
    success,
    info,
    danger
  });

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
