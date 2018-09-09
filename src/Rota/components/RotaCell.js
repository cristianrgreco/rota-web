import React from 'react'
import classNames from 'classnames'

export function RotaCell({ wide, header, softBorder, onClick, children }) {
  const className = classNames({
    'Rota-cell': true,
    'wide': wide,
    'header': header,
    'soft-border': softBorder,
  });

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
