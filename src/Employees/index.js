import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { Button } from "../components";
import { EditEmployeeModal, NewEmployeeModal } from "./components";
import "./index.css";

import {
  fetchEmployees,
  saveNewEmployee,
  showNewEmployeeModal,
  hideNewEmployeeModal,
  editEmployee,
  showEditEmployeeModal,
  hideEditEmployeeModal,
  deleteEmployee
} from "./actions";

class Employees extends PureComponent {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <Fragment>
        {this.props.isNewEmployeeModalVisible && (
          <NewEmployeeModal
            onSubmit={employee => {
              this.props.saveNewEmployee(employee);
              this.props.hideNewEmployeeModal();
            }}
            onClose={this.props.hideNewEmployeeModal}
          />
        )}
        {this.props.isEditEmployeeModalVisible && (
          <EditEmployeeModal
            employee={this.props.employeeToEdit}
            onSubmit={employee => {
              this.props.editEmployee(employee);
              this.props.hideEditEmployeeModal();
            }}
            onClose={this.props.hideEditEmployeeModal}
          />
        )}
        <div className="Controls">
          <Button success onClick={this.props.showNewEmployeeModal}>
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
                <Button
                  info
                  onClick={() => this.props.showEditEmployeeModal(employee)}
                >
                  Edit
                </Button>
                <div className="ButtonSeparator" />
                <Button
                  danger
                  onClick={() => this.props.deleteEmployee(employee.id)}
                >
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
    employeeToEdit: state.employees.employeeToEdit,
    isNewEmployeeModalVisible: state.employees.isNewEmployeeModalVisible,
    isEditEmployeeModalVisible: state.employees.isEditEmployeeModalVisible
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
    saveNewEmployee: employee => dispatch(saveNewEmployee(employee)),
    showNewEmployeeModal: () => dispatch(showNewEmployeeModal()),
    hideNewEmployeeModal: () => dispatch(hideNewEmployeeModal()),
    editEmployee: employee => dispatch(editEmployee(employee)),
    showEditEmployeeModal: employee =>
      dispatch(showEditEmployeeModal(employee)),
    hideEditEmployeeModal: () => dispatch(hideEditEmployeeModal()),
    deleteEmployee: employeeId => dispatch(deleteEmployee(employeeId))
  })
)(Employees);
