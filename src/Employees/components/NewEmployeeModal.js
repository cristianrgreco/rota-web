import React from "react";

import {
  Modal,
  ModalHeader,
  ModalContent,
  Button,
  Form,
  FormRecord,
  FormControls
} from "../../components";

export function NewEmployeeModal({ onSubmit, onClose }) {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>Add Employee</ModalHeader>
      <ModalContent>
        <Form onSubmit={onSubmit}>
          <FormRecord name="Name" type="text" autoFocus />
          <FormRecord name="Phone" type="text" />
          <FormControls>
            <Button success>Save</Button>
          </FormControls>
        </Form>
      </ModalContent>
    </Modal>
  );
}
