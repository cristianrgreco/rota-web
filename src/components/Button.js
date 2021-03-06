import React from "react";
import classNames from "classnames";
import "./Button.css";

export function Button({
  children,
  onClick,
  type = "submit",
  small = false,
  success = false,
  info = false,
  danger = false,
  disabled = false
}) {
  const className = classNames({
    Button: true,
    small,
    success,
    info,
    danger
  });

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
