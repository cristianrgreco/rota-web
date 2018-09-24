import React, { Fragment } from "react";
import "./CellSplit.css";

export function CellSplit({ children }) {
  return (
    <div className="CellSplit">
      {children.map((child, i) => (
        <Fragment key={i}>
          <div className="CellSplitItem">{child}</div>
          {!isLastChild(i, children) && <div className="CellSplitSeparator" />}
        </Fragment>
      ))}
    </div>
  );
}

function isLastChild(i, children) {
  return i === children.length - 1;
}
