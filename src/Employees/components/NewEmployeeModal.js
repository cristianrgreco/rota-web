import React from "react";
import { Modal, ModalHeader, ModalContent } from "../../components";

export function NewEmployeeModal({ onClose }) {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>Add Employee</ModalHeader>
      <ModalContent>Content</ModalContent>
    </Modal>
  );
}
