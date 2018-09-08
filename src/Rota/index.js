import React, { Fragment } from 'react'
import { asyncReactor } from 'async-reactor';
import classNames from 'classnames';
import { getWeek } from './week';
import './index.css'
import { fetchEmployees } from './employees'

export default asyncReactor(async function Rota () {
  const name = 'Kitchen';
  const today = new Date(2018, 7, 18)
  const week = getWeek(today);
  const employees = await fetchEmployees();

  return (
    <div className="Rota">
      <RotaHeader name={name} week={week} />
      {employees.map((employee, i) => (
        <RotaEmployee key={i} employee={employee} />
      ))}
    </div>
  )
})

function RotaHeader({ name, week }) {
  return (
    <Fragment>
      <RotaRow header>
        <RotaCell wide>{name}</RotaCell>
        {week.map((weekDay, i) => (
          <RotaCell key={i} wide>{weekDay.format('ddd')}</RotaCell>
        ))}
        <RotaCell>Total</RotaCell>
      </RotaRow>

      <RotaRow header>
        <RotaCell wide>Rota</RotaCell>
        {week.map((weekDay, i) => (
          <RotaCell key={i} wide>{weekDay.format('DD/MM')}</RotaCell>
        ))}
        <RotaCell>Hours</RotaCell>
      </RotaRow>

      <RotaRow header invert>
        <RotaCell wide/>
        {week.map((_, i) => (
          <Fragment key={i}>
            <RotaCell>AM</RotaCell>
            <RotaCell>PM</RotaCell>
          </Fragment>
        ))}
        <RotaCell/>
      </RotaRow>
    </Fragment>
  );
}

function RotaEmployee({ employee }) {
  return (
    <Fragment>
      <RotaEmployeeSchedule employee={employee} />
      <RotaEmployeeHours employee={employee} />
    </Fragment>
  )
}

function RotaEmployeeSchedule({ employee }) {
  return (
    <RotaRow>
      <RotaCell header wide>{employee.name}</RotaCell>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeeSchedulePeriod schedule={am} />
          <RotaEmployeeSchedulePeriod schedule={pm} />
        </Fragment>
      ))}
      <RotaCell/>
    </RotaRow>
  );
}

function RotaEmployeeSchedulePeriod({ schedule: period }) {
  if (period) {
    const start = period.start > 12 ? period.start - 12: period.start;
    const end = period.end > 12 ? period.end - 12 : period.end;

    return (
      <RotaCell>{start}-{end}</RotaCell>
    );
  } else {
    return (
      <RotaCell>-</RotaCell>
    );
  }
}

function RotaEmployeeHours({ employee }) {
  const totalHours = calculateTotalHours(employee.schedule);

  return (
    <RotaRow>
      <RotaCell wide>Hours</RotaCell>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeeHoursPeriod period={am} />
          <RotaEmployeeHoursPeriod period={pm} />
        </Fragment>
      ))}
      <RotaCell>{totalHours}</RotaCell>
    </RotaRow>
  );
}

function RotaEmployeeHoursPeriod({ period }) {
  return period
    ? <RotaCell>{period.end - period.start}</RotaCell>
    : <RotaCell>-</RotaCell>
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

function RotaCell({ wide, header, children }) {
  const className = classNames({
    'Rota-cell': true,
    'wide': wide,
    'header': header,
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
