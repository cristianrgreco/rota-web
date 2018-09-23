import React from "react";
import classNames from "classnames";
import "./Cell.css";

export function Cell({
  wide = false,
  header = false,
  centered = false,
  onClick,
  children
}) {
  const className = classNames({
    Cell: true,
    wide,
    header,
    hasClick: onClick,
    centered
  });

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
