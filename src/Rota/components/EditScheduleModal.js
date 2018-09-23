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
                boundary={{
                  start: { min: 0, max: (am.end || 24) - 1 },
                  end: { min: (am.start || 0) + 1, max: pm.start || 24 }
                }}
                placeholder={{ start: 8, end: 16 }}
                required={{ start: am.end !== null, end: am.start !== null }}
                onChange={am => this.setState({ am })}
              />
              <div className="PeriodFormSeparator" />
              <EditPeriodForm
                legend="Afternoon"
                period={pm}
                boundary={{
                  start: { min: am.end || 0, max: (pm.end || 24) - 1 },
                  end: { min: (pm.start || 0) + 1, max: 24 }
                }}
                placeholder={{ start: 16, end: 23 }}
                required={{ start: pm.end !== null, end: pm.start !== null }}
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

function EditPeriodForm({
  legend,
  period,
  boundary,
  required,
  placeholder,
  onChange
}) {
  return (
    <FormFieldSet legend={legend}>
      <FormRecord
        name="Start"
        type="number"
        value={period.start || ""}
        placeholder={placeholder.start}
        required={required.start}
        min={boundary.start.min}
        max={boundary.start.max}
        onChange={e => onChange({ start: +e.target.value, end: period.end })}
      />
      <FormRecord
        name="End"
        type="number"
        value={period.end || ""}
        placeholder={placeholder.end}
        required={required.end}
        min={boundary.end.min}
        max={boundary.end.max}
        onChange={e => onChange({ start: period.start, end: +e.target.value })}
      />
    </FormFieldSet>
  );
}
