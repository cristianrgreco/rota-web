import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getWeek } from './week';
import './index.css'
import { fetchEmployees } from './actions'

class Rota extends PureComponent {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <div className="Rota">
        <RotaHeader week={week} />
        {this.props.employees.map((employee, i) => (
          <RotaEmployee key={i} employee={employee} />
        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    employees: state.rota.employees,
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
  })
)(Rota)

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
  const onClick = () => console.log('CLICKIE');

  if (period) {
    const { start, end } = formatPeriod(period);
    return (
      <RotaCell onClick={onClick} softBorder={softBorder}>{start}-{end}</RotaCell>
    );
  } else {
    return (
      <RotaCell onClick={onClick} softBorder={softBorder}>-</RotaCell>
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

function RotaCell({ wide, header, softBorder, onClick, children }) {
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

function formatPeriod(period) {
  const start = period.start > 12 ? period.start - 12: period.start;
  const end = period.end > 12 ? period.end - 12 : period.end;
  return { start, end };
}

function calculateTotalHours(schedule) {
  return schedule.reduce((totalHours, { am, pm }) => {
    const amHours = am ? am.end - am.start : 0;
    const pmHours = pm ? pm.end - pm.start : 0;
    return totalHours + (amHours + pmHours);
  }, 0);
}
