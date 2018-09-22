import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "./actions";
import { Button } from "../components";
import { NewEmployeeModal } from "./components";
import "./index.css";

class Employees extends PureComponent {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <Fragment>
        <NewEmployeeModal />
        <div className="Controls">
          <Button small success>
            Add
          </Button>
        </div>
        <div className="Employees">
          <div className="EmployeeRow header invert">
            <div className="EmployeeCell">Name</div>
            <div className="EmployeeCell">Phone</div>
            <div className="EmployeeCell" />
          </div>
          {this.props.employees.map((employee, i) => (
            <div key={i} className="EmployeeRow">
              <div className="EmployeeCell">{employee.name}</div>
              <div className="EmployeeCell">{employee.phone}</div>
              <div className="EmployeeCell centered">
                <Button small info>
                  Edit
                </Button>
                <div className="ButtonSeparator" />
                <Button small danger>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
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
