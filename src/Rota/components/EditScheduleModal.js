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
      end: this.props.schedule.scheduleEntry.pm.end
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
          <span>{schedule.name}</span>
          <span> </span>
          <span>{schedule.scheduleEntry.date.format("ddd DD/MM")}</span>
        </ModalHeader>
        <ModalContent>
          <Form
            onSubmit={() =>
              onSubmit({
                ...schedule,
                scheduleEntry: { ...schedule.scheduleEntry, am, pm }
              })
            }
          >
            <div className="FormFieldSetsWrapper">
              <EditPeriodForm
                legend="Morning"
                period={am}
                onChange={am => this.setState({ am })}
              />
              <div className="PeriodFormSeparator" />
              <EditPeriodForm
                legend="Afternoon"
                period={pm}
                onChange={pm => this.setState({ pm })}
              />
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

function EditPeriodForm({ legend, period, onChange }) {
  return (
    <FormFieldSet legend={legend}>
      <FormRecord
        name="Start"
        type="text"
        value={period.start || ""}
        onChange={e => onChange({ start: +e.target.value, end: period.end })}
      />
      <FormRecord
        name="End"
        type="text"
        value={period.end || ""}
        onChange={e => onChange({ start: period.start, end: +e.target.value })}
      />
    </FormFieldSet>
  );
}
