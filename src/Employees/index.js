import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { Table, Row, Cell, Button } from "../components";
import { AddEmployeeModal, EditEmployeeModal } from "./components";
import { formatPhone } from "./formatter";
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
    const {
      employees,
      isAddEmployeeModalVisible,
      addEmployee,
      showAddEmployeeModal,
      hideAddEmployeeModal,
      isEditEmployeeModalVisible,
      editEmployee,
      employeeToEdit,
      showEditEmployeeModal,
      hideEditEmployeeModal,
      deleteEmployee
    } = this.props;

    return (
      <Fragment>
        {isAddEmployeeModalVisible && (
          <AddEmployeeModal
            onSubmit={employee => {
              addEmployee(employee);
              hideAddEmployeeModal();
            }}
            onClose={hideAddEmployeeModal}
          />
        )}
        {isEditEmployeeModalVisible && (
          <EditEmployeeModal
            employee={employeeToEdit}
            onSubmit={employee => {
              editEmployee(employee);
              hideEditEmployeeModal();
            }}
            onClose={hideEditEmployeeModal}
          />
        )}
        <div className="Controls">
          <Button small success onClick={showAddEmployeeModal}>
            Add
          </Button>
        </div>
        <Table>
          <Row header>
            <Cell>Name</Cell>
            <Cell>Phone</Cell>
            <Cell />
          </Row>
          {employees.map((employee, i) => (
            <Row key={i}>
              <Cell>{employee.name}</Cell>
              <Cell>{formatPhone(employee.phone)}</Cell>
              <Cell centered>
                <Button
                  small
                  info
                  onClick={() => showEditEmployeeModal(employee)}
                >
                  Edit
                </Button>
                <div className="ButtonSeparator" />
                <Button
                  small
                  danger
                  onClick={() => deleteEmployee(employee.id)}
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
