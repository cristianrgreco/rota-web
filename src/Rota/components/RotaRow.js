import React from 'react'
import classNames from 'classnames'

export function RotaRow({ header, invert, children }) {
  const className = classNames({
    'Rota-row': true,
    'header': header,
    'invert': invert,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
}
