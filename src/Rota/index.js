import React, { Fragment } from 'react'
import { asyncReactor } from 'async-reactor';
import classNames from 'classnames';
import { getWeek } from './week';
import './index.css'
import { fetchEmployees } from './employees'

export default asyncReactor(async function Rota () {
  const today = new Date(2018, 7, 18)
  const week = getWeek(today);
  const employees = await fetchEmployees();

  return (
    <div className="Rota">
      <RotaHeader week={week} />
      {employees.map((employee, i) => (
        <RotaEmployee key={i} employee={employee} />
      ))}
    </div>
  )
})

function RotaHeader({ week }) {
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

function RotaEmployee({ employee }) {
  const totalHours = calculateTotalHours(employee.schedule);

  return (
    <RotaRow>
      <RotaCell header wide>{employee.name}</RotaCell>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeePeriod softBorder period={am} />
          <RotaEmployeePeriod period={pm} />
        </Fragment>
      ))}
      <RotaCell>{totalHours}</RotaCell>
    </RotaRow>
  );
}

function RotaEmployeePeriod({ period, softBorder }) {
  if (period) {
    const start = period.start > 12 ? period.start - 12: period.start;
    const end = period.end > 12 ? period.end - 12 : period.end;

    return (
      <RotaCell softBorder={softBorder}>{start}-{end}</RotaCell>
    );
  } else {
    return (
      <RotaCell softBorder={softBorder}>-</RotaCell>
    );
  }
}

function RotaRow({ header, invert, children }) {
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

function RotaCell({ wide, header, softBorder, children }) {
  const className = classNames({
    'Rota-cell': true,
    'wide': wide,
    'header': header,
    'soft-border': softBorder,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
}

function calculateTotalHours(schedule) {
  return schedule.reduce((totalHours, { am, pm }) => {
    const amHours = am ? am.end - am.start : 0;
    const pmHours = pm ? pm.end - pm.start : 0;
    return totalHours + (amHours + pmHours);
  }, 0);
}
