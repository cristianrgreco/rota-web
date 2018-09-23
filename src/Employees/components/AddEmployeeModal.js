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

export class AddEmployeeModal extends Component {
  state = {
    name: "",
    phone: ""
  };

  render() {
    const { onClose, onSubmit } = this.props;
    const { name, phone } = this.state;

    return (
      <Modal>
        <ModalHeader onClose={onClose}>Add Employee</ModalHeader>
        <ModalContent>
          <Form onSubmit={() => onSubmit({ name, phone })}>
            <FormRecord
              name="Name"
              type="text"
              value={name}
              required={true}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <FormRecord
              name="Phone"
              type="text"
              value={phone}
              required={true}
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
