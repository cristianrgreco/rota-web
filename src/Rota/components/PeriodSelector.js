import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import TimePicker from "rc-time-picker";
import { Button, CloseButton } from "../../components";
import { hidePeriodSelector } from "../actions";
import "rc-time-picker/assets/index.css";
import "./PeriodSelector.css";

function PeriodSelector({ employee, scheduleIndex, hidePeriodSelector }) {
  const { am, pm } = employee.schedule[scheduleIndex];
  const onTimePickerChange = dateMoment => console.log(dateMoment);
  const onSave = () => hidePeriodSelector();

  return (
    <div className="PeriodSelector-wrapper">
      <div className="PeriodSelectorHeader">
        <div className="PeriodSelectorHeader-description">
          <span>{employee.name}</span>
        </div>
        <div className="PeriodSelectorHeader-controls">
          <div className="CloseButton-wrapper">
            <CloseButton onClick={hidePeriodSelector} />
          </div>
        </div>
      </div>

      <div className="PeriodSelector">
        <div className="PeriodSelector-controls">
          <PeriodTimePicker
            label="Morning"
            period={am}
            onChange={onTimePickerChange}
          />
          <div className="TimePicker-separator" />
          <PeriodTimePicker
            label="Afternoon"
            period={pm}
            onChange={onTimePickerChange}
          />
          <div className="TimePicker-separator" />
          <div className="TimePicker-separator" />
        </div>

        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}

function PeriodTimePicker({ label, period, onChange }) {
  return (
    <div className="PeriodTimePicker">
      <div className="PeriodTimePicker-label">
        <span>{label}</span>
      </div>
      <div className="PeriodTimePicker-controls">
        <CustomTimePicker
          label="Start"
          value={period ? period.start : null}
          onChange={onChange}
        />
        <div className="TimePicker-separator" />
        <CustomTimePicker
          label="End"
          value={period ? period.end : null}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

function CustomTimePicker({ label, value, onChange }) {
  const defaultValue = value ? moment(value, "H") : null;

  return (
    <div className="TimePicker">
      <div className="TimePicker-label">{label}</div>
      <TimePicker
        className="TimePicker-picker"
        defaultValue={defaultValue}
        onChange={onChange}
        showSecond={false}
        showMinute={false}
        allowEmpty={false}
        use12Hours
        inputReadOnly
      />
    </div>
  );
}

export default connect(
  state => ({
    employee: state.rota.periodSelector.employee,
    scheduleIndex: state.rota.periodSelector.scheduleIndex
  }),
  dispatch => ({
    hidePeriodSelector: () => dispatch(hidePeriodSelector())
  })
)(PeriodSelector);
