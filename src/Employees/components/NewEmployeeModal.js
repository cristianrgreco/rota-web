import React from "react";
import { Modal, ModalHeader, ModalContent, Button } from "../../components";

export function NewEmployeeModal({ onClose }) {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>Add Employee</ModalHeader>
      <ModalContent>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
          <div>
            <Button success>Save</Button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  );
}
