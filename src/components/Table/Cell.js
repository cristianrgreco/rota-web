import React from "react";
import classNames from "classnames";
import "./Cell.css";

export function Cell({ centered = false, children }) {
  const className = classNames({
    Cell: true,
    centered
  });

  return <div className={className}>{children}</div>;
}
