import React, { Component } from "react";
import "./EditScheduleModal.css";

import {
  Modal,
  ModalHeader,
  ModalContent,
  Button,
  Form,
  FormFieldSet,
  FormRecord,
  FormControls
} from "../../components";

export class EditScheduleModal extends Component {
  state = {
    am: {
      start: this.props.schedule.scheduleEntry.am.start,
      end: this.props.schedule.scheduleEntry.am.end
    },
    pm: {
      start: this.props.schedule.scheduleEntry.pm.start,
      end: this.props.schedule.scheduleEntry.pm.start
    }
  };

  render() {
    const { schedule, onClose, onSubmit } = this.props;
    const { am, pm } = this.state;

    return (
      <Modal>
        <ModalHeader onClose={onClose}>
          <span>Edit Schedule</span>
          <span> - </span>
          <span>
            {schedule.name} {schedule.scheduleEntry.date.format("ddd DD/MM")}
          </span>
        </ModalHeader>
        <ModalContent>
          <Form onSubmit={() => onSubmit()}>
            <div className="FormFieldSetsWrapper">
              <FormFieldSet legend="Morning">
                <FormRecord
                  name="Start"
                  type="text"
                  value={am.start}
                  onChange={e =>
                    this.setState({
                      am: { start: e.target.value, end: am.end }
                    })
                  }
                  autoFocus
                />
                <FormRecord
                  name="End"
                  type="text"
                  value={am.end}
                  onChange={e =>
                    this.setState({
                      am: { start: am.start, end: e.target.value }
                    })
                  }
                />
              </FormFieldSet>
              <div className="FormFieldSetSeparator" />
              <FormFieldSet legend="Afternoon">
                <FormRecord
                  name="Start"
                  type="text"
                  value={pm.start}
                  onChange={e =>
                    this.setState({
                      pm: { start: e.target.value, end: pm.end }
                    })
                  }
                  autoFocus
                />
                <FormRecord
                  name="End"
                  type="text"
                  value={pm.end}
                  onChange={e =>
                    this.setState({
                      pm: { start: pm.start, end: e.target.value }
                    })
                  }
                />
              </FormFieldSet>
            </div>
            <FormControls>
              <Button success>Save</Button>
            </FormControls>
          </Form>
        </ModalContent>
      </Modal>
    );
  }
}
