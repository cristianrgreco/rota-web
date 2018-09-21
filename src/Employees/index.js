import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "./actions";
import "./index.css";

class Employees extends PureComponent {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <ul className="Employees">
        {this.props.employees.map((employee, i) => (
          <li key={i}>
            <span>
              {employee.name} {employee.phone}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({
    employees: state.employees
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
  })
)(Employees);
