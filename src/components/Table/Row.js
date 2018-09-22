import React from "react";
import classNames from "classnames";
import "./Row.css";

export function Row({ header = false, children }) {
  const className = classNames({
    Row: true,
    header
  });

  return <div className={className}>{children}</div>;
}
