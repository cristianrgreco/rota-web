import React, { Fragment } from 'react'
import { RotaRow, RotaCell } from '.'

export function RotaHeader({ week }) {
  return (
    <Fragment>
      <RotaRow header invert>
        <RotaCell wide/>
        {week.map((weekDay, i) => (
          <RotaCell key={i} wide>
            <div>{weekDay.format('ddd')}</div>
            <div>{weekDay.format('DD/MM')}</div>
          </RotaCell>
        ))}
        <RotaCell/>
      </RotaRow>
    </Fragment>
  );
}
