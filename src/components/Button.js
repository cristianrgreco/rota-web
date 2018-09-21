import React from "react";
import classNames from "classnames";
import "./Button.css";

export function Button({
  children,
  onClick,
  small = false,
  secondary = false,
  danger = false,
  disabled = false
}) {
  const className = classNames({
    Button: true,
    small,
    secondary,
    danger
  });

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
