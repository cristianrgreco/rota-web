import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { Table, Row, Cell, Button } from "../components";
import { EditEmployeeModal, NewEmployeeModal } from "./components";
import "./index.css";

import {
  fetchEmployees,
  addEmployee,
  showAddEmployeeModal,
  hideAddEmployeeModal,
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
        {this.props.isAddEmployeeModalVisible && (
          <NewEmployeeModal
            onSubmit={employee => {
              this.props.addEmployee(employee);
              this.props.hideAddEmployeeModal();
            }}
            onClose={this.props.hideAddEmployeeModal}
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
          <Button small success onClick={this.props.showAddEmployeeModal}>
            Add
          </Button>
        </div>
        <Table>
          <Row header>
            <Cell>Name</Cell>
            <Cell>Phone</Cell>
            <Cell />
          </Row>
          {this.props.employees.map((employee, i) => (
            <Row key={i}>
              <Cell>{employee.name}</Cell>
              <Cell>{employee.phone}</Cell>
              <Cell centered>
                <Button
                  small
                  info
                  onClick={() => this.props.showEditEmployeeModal(employee)}
                >
                  Edit
                </Button>
                <div className="ButtonSeparator" />
                <Button
                  small
                  danger
                  onClick={() => this.props.deleteEmployee(employee.id)}
                >
                  Delete
                </Button>
              </Cell>
            </Row>
          ))}
        </Table>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    employees: state.employees.employees,
    employeeToEdit: state.employees.employeeToEdit,
    isAddEmployeeModalVisible: state.employees.isAddEmployeeModalVisible,
    isEditEmployeeModalVisible: state.employees.isEditEmployeeModalVisible
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
    addEmployee: employee => dispatch(addEmployee(employee)),
    showAddEmployeeModal: () => dispatch(showAddEmployeeModal()),
    hideAddEmployeeModal: () => dispatch(hideAddEmployeeModal()),
    editEmployee: employee => dispatch(editEmployee(employee)),
    showEditEmployeeModal: employee =>
      dispatch(showEditEmployeeModal(employee)),
    hideEditEmployeeModal: () => dispatch(hideEditEmployeeModal()),
    deleteEmployee: employeeId => dispatch(deleteEmployee(employeeId))
  })
)(Employees);
