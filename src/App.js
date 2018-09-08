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
    name: 'ADAM',
    schedule: {
      '13/08': { AM: null, PM: null },
      '14/08': { AM: null, PM: null },
      '15/08': { AM: null, PM: null },
      '16/08': { AM: null, PM: null },
      '17/08': { AM: null, PM: null },
      '18/08': { AM: null, PM: null },
      '19/08': { AM: null, PM: null },
    }
  },
  {
    name: 'ELLIAS',
    schedule: {
      '13/08': { AM: { start: 8, end: 16 }, PM: null },
      '14/08': { AM: { start: 8, end: 16 }, PM: null },
      '15/08': { AM: null, PM: null },
      '16/08': { AM: null, PM: { start: 16, end: 23 } },
      '17/08': { AM: null, PM: { start: 16, end: 23 } },
      '18/08': { AM: null, PM: { start: 16, end: 23 } },
      '19/08': { AM: null, PM: null },
    }
  }
]

export default function App () {
  return (
    <div className="Rota">
      <RotaHeader name="Kitchen" weekDays={weekDays} />
      {employees.map(employee => (
        <RotaEmployee employee={employee} />
      ))}
    </div>
  )
}

function RotaHeader({ name, weekDays }) {
  return (
    <Fragment>
      <div className="Rota-row header">
        <div className="Rota-cell wide">{name}</div>
        {weekDays.map(weekDay => (
          <div className="Rota-cell wide">{weekDay.name}</div>
        ))}
        <div className="Rota-cell">Total</div>
      </div>

      <div className="Rota-row header">
        <div className="Rota-cell wide">Rota</div>
        {weekDays.map(weekDay => (
          <div className="Rota-cell wide">{weekDay.date}</div>
        ))}
        <div className="Rota-cell">Hours</div>
      </div>

      <div className="Rota-row header invert">
        <div className="Rota-cell wide"/>
        {weekDays.map(() => (
          <Fragment>
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
    <div className="Rota-row">
      <div className="Rota-cell header wide">{employee.name}</div>
      {Object.values(employee.schedule).map(({ AM, PM }) => (
        <Fragment>
          <RotaEmployeeSchedule schedule={AM} />
          <RotaEmployeeSchedule schedule={PM} />
        </Fragment>
      ))}
      <div className="Rota-cell">0</div>
    </div>
  )
}

function RotaEmployeeSchedule({ schedule }) {
  if (schedule) {
    const start = schedule.start > 12 ? schedule.start - 12: schedule.start;
    const end = schedule.end > 12 ? schedule.end - 12 : schedule.end;

    return (
      <div className="Rota-cell">{start}-{end}</div>
    );
  } else {
    return (
      <div className="Rota-cell">-</div>
    );
  }
}
