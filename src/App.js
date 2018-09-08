import React, { Fragment } from 'react'
import './App.css'

const weekDays = [
  { name: 'Monday', date: '13/08' },
  { name: 'Tuesday', date: '14/08' },
  { name: 'Wednesday', date: '15/08' },
  { name: 'Thursday', date: '16/08' },
  { name: 'Friday', date: '17/08' },
  { name: 'Saturday', date: '18/08' },
  { name: 'Sunday', date: '19/08' }
];

const employees = [
  {
    name: 'Adam',
    schedule: [
      { am: null, pm: null },
      { am: null, pm: null },
      { am: null, pm: null },
      { am: null, pm: null },
      { am: null, pm: null },
      { am: null, pm: null },
      { am: null, pm: null },
    ]
  },
  {
    name: 'Ellias',
    schedule: [
      { am: { start: 8, end: 16 }, pm: null },
      { am: { start: 8, end: 16 }, pm: null },
      { am: null, pm: null },
      { am: null, pm: { start: 16, end: 23 } },
      { am: null, pm: { start: 16, end: 23 } },
      { am: null, pm: { start: 16, end: 23 } },
      { am: null, pm: null },
    ]
  }
]

export default function Rota () {
  return (
    <div className="Rota">
      <RotaHeader name="Kitchen" weekDays={weekDays} />
      {employees.map((employee, i) => (
        <RotaEmployee key={i} employee={employee} />
      ))}
    </div>
  )
}

function RotaHeader({ name, weekDays }) {
  return (
    <Fragment>
      <div className="Rota-row header">
        <div className="Rota-cell wide">{name}</div>
        {weekDays.map((weekDay, i) => (
          <div key={i} className="Rota-cell wide">{weekDay.name}</div>
        ))}
        <div className="Rota-cell">Total</div>
      </div>

      <div className="Rota-row header">
        <div className="Rota-cell wide">Rota</div>
        {weekDays.map((weekDay, i) => (
          <div key={i} className="Rota-cell wide">{weekDay.date}</div>
        ))}
        <div className="Rota-cell">Hours</div>
      </div>

      <div className="Rota-row header invert">
        <div className="Rota-cell wide"/>
        {weekDays.map((_, i) => (
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
  const totalHours = employee.schedule.reduce((totalHours, { am, pm }) => {
    const amHours = am ? am.end - am.start : 0;
    const pmHours = pm ? pm.end - pm.start : 0;
    return totalHours + (amHours + pmHours);
  }, 0);

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
