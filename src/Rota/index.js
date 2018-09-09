import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getWeek } from './week';
import { fetchEmployees } from './actions';
import { RotaHeader, RotaEmployee } from './components';
import './index.css';

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
)(Rota);
