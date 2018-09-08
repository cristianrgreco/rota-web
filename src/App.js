import React, { Fragment } from 'react'
import { asyncReactor } from 'async-reactor';
import { getWeek } from './week';
import './App.css'
import { fetchEmployees } from './employees'

export default asyncReactor(async function Rota () {
  const today = new Date(2018, 7, 18)
  const week = getWeek(today);
  const employees = await fetchEmployees();

  return (
    <div className="Rota">
      <RotaHeader name="Kitchen" week={week} />
      {employees.map((employee, i) => (
        <RotaEmployee key={i} employee={employee} />
      ))}
    </div>
  )
})

function RotaHeader({ name, week }) {
  return (
    <Fragment>
      <div className="Rota-row header">
        <div className="Rota-cell wide">{name}</div>
        {week.map((weekDay, i) => (
          <div key={i} className="Rota-cell wide">{weekDay.format('ddd')}</div>
        ))}
        <div className="Rota-cell">Total</div>
      </div>

      <div className="Rota-row header">
        <div className="Rota-cell wide">Rota</div>
        {week.map((weekDay, i) => (
          <div key={i} className="Rota-cell wide">{weekDay.format('DD/MM')}</div>
        ))}
        <div className="Rota-cell">Hours</div>
      </div>

      <div className="Rota-row header invert">
        <div className="Rota-cell wide"/>
        {week.map((_, i) => (
          <Fragment key={i}>
            <div className="Rota-cell">AM</div>
            <div className="Rota-cell">PM</div>
          </Fragment>
        ))}
        <div className="Rota-cell"/>
      </div>
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
    <div className="Rota-row">
      <div className="Rota-cell header wide">{employee.name}</div>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeeSchedulePeriod schedule={am} />
          <RotaEmployeeSchedulePeriod schedule={pm} />
        </Fragment>
      ))}
      <div className="Rota-cell"/>
    </div>
  );
}

function RotaEmployeeSchedulePeriod({ schedule: period }) {
  if (period) {
    const start = period.start > 12 ? period.start - 12: period.start;
    const end = period.end > 12 ? period.end - 12 : period.end;

    return (
      <div className="Rota-cell">{start}-{end}</div>
    );
  } else {
    return (
      <div className="Rota-cell">-</div>
    );
  }
}

function RotaEmployeeHours({ employee }) {
  const totalHours = calculateTotalHours(employee.schedule);

  return (
    <div className="Rota-row">
      <div className="Rota-cell wide">Hours</div>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeeHoursPeriod period={am} />
          <RotaEmployeeHoursPeriod period={pm} />
        </Fragment>
      ))}
      <div className="Rota-cell">{totalHours}</div>
    </div>
  );
}

function RotaEmployeeHoursPeriod({ period }) {
  if (period) {
    return (
      <div className="Rota-cell">{period.end - period.start}</div>
    );
  } else {
    return (
      <div className="Rota-cell">-</div>
    );
  }
}

function calculateTotalHours(schedule) {
  return schedule.reduce((totalHours, { am, pm }) => {
    const amHours = am ? am.end - am.start : 0;
    const pmHours = pm ? pm.end - pm.start : 0;
    return totalHours + (amHours + pmHours);
  }, 0);
}
