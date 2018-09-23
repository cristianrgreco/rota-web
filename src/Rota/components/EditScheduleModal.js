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
                  start: { min: 0, max: am.end - 1 },
                  end: { min: am.start + 1, max: pm.start }
                }}
                placeholder={{ start: 8, end: 16 }}
                onChange={am => this.setState({ am })}
              />
              <div className="PeriodFormSeparator" />
              <EditPeriodForm
                legend="Afternoon"
                period={pm}
                boundary={{
                  start: { min: am.end, max: pm.end - 1 },
                  end: { min: pm.start + 1, max: 24 }
                }}
                placeholder={{ start: 16, end: 23 }}
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

function EditPeriodForm({ legend, period, boundary, placeholder, onChange }) {
  return (
    <FormFieldSet legend={legend}>
      <FormRecord
        name="Start"
        type="number"
        value={period.start || ""}
        placeholder={placeholder.start}
        min={boundary.start.min}
        max={boundary.start.max}
        onChange={e => onChange({ start: +e.target.value, end: period.end })}
      />
      <FormRecord
        name="End"
        type="number"
        value={period.end || ""}
        placeholder={placeholder.end}
        min={boundary.end.min}
        max={boundary.end.max}
        onChange={e => onChange({ start: period.start, end: +e.target.value })}
      />
    </FormFieldSet>
  );
}
