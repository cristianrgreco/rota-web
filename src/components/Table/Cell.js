import React from "react";
import classNames from "classnames";
import "./Cell.css";

export function Cell({
  wide = false,
  header = false,
  centered = false,
  children
}) {
  const className = classNames({
    Cell: true,
    wide,
    header,
    centered
  });

  return <div className={className}>{children}</div>;
}
