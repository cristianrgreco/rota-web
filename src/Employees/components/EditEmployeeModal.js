import React, { Component } from "react";

import {
  Modal,
  ModalHeader,
  ModalContent,
  Button,
  Form,
  FormRecord,
  FormControls
} from "../../components";

export class EditEmployeeModal extends Component {
  state = {
    name: this.props.employee.name,
    phone: this.props.employee.phone
  };

  render() {
    const { employee, onClose, onSubmit } = this.props;
    const { name, phone } = this.state;

    return (
      <Modal>
        <ModalHeader onClose={onClose}>Edit Employee</ModalHeader>
        <ModalContent>
          <Form onSubmit={() => onSubmit({ ...employee, name, phone })}>
            <FormRecord
              name="Name"
              type="text"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <FormRecord
              name="Phone"
              type="text"
              value={phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />
            <FormControls>
              <Button success>Save</Button>
            </FormControls>
          </Form>
        </ModalContent>
      </Modal>
    );
  }
}
