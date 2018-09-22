import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { Button } from "../components";
import { NewEmployeeModal } from "./components";
import "./index.css";

import {
  fetchEmployees,
  showNewEmployeeModal,
  hideNewEmployeeModal
} from "./actions";

class Employees extends PureComponent {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <Fragment>
        {this.props.isNewEmployeeModalVisible && (
          <NewEmployeeModal onClose={this.props.hideNewEmployeeModal} />
        )}
        <div className="Controls">
          <Button small success onClick={this.props.showNewEmployeeModal}>
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
    employees: state.employees.employees,
    isNewEmployeeModalVisible: state.employees.isNewEmployeeModalVisible
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
    showNewEmployeeModal: () => dispatch(showNewEmployeeModal()),
    hideNewEmployeeModal: () => dispatch(hideNewEmployeeModal())
  })
)(Employees);
