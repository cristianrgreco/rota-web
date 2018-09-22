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

export class EditScheduleModal extends Component {
  state = {
    am: {
      start: (this.props.schedule.scheduleEntry.am || {}).start,
      end: (this.props.schedule.scheduleEntry.am || {}).end
    },
    pm: {
      start: (this.props.schedule.scheduleEntry.pm || {}).start,
      end: (this.props.schedule.scheduleEntry.pm || {}).end
    }
  };

  render() {
    const { scheduleToEdit, onClose, onSubmit } = this.props;
    const { am, pm } = this.state;

    return (
      <Modal>
        <ModalHeader onClose={onClose}>Edit Schedule</ModalHeader>
        <ModalContent>
          <Form onSubmit={() => onSubmit()}>
            <FormRecord
              name="Name"
              type="text"
              value={null}
              onChange={e => {}}
              autoFocus
            />
            <FormRecord
              name="Phone"
              type="text"
              value={null}
              onChange={e => {}}
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
