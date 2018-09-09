import React from "react";
import { connect } from "react-redux";
import moment from 'moment';
import TimePicker from "rc-time-picker";
import { Button, CloseButton } from "../../components";
import { hidePeriodSelector } from "../actions";
import "rc-time-picker/assets/index.css";
import "./PeriodSelector.css";

function PeriodSelector({ employee, scheduleIndex, hidePeriodSelector }) {
  const { am, pm } = employee.schedule[scheduleIndex];

  return (
    <div className="PeriodSelector-wrapper">
      <div className="PeriodSelectorHeader">
        <div className="PeriodSelectorHeader-description">
          <span>{employee.name}</span>
        </div>
        <div className="PeriodSelectorHeader-controls">
          <CloseButton onClick={hidePeriodSelector} />
        </div>
      </div>

      <div className="PeriodSelector">
        <CustomTimePicker label="Morning start:" value={am ? am.start : null} />
        <CustomTimePicker label="Morning end:" value={am ? am.end : null} />
        <div className="TimePicker-separator" />
        <CustomTimePicker label="Evening start:" value={pm ? pm.start : null} />
        <CustomTimePicker label="Evening end:" value={pm ? pm.end : null} />
        <div className="TimePicker-separator" />
        <Button>Save</Button>
      </div>
    </div>
  );
}

function PeriodTimePicker({ period }) {
  return (
    <div className="PeriodTimePicker">
      <CustomTimePicker label="Morning start:" value={period ? period.start : null} />
      <CustomTimePicker label="Morning end:" value={period ? period.end : null} />
    </div>
  )
}

function CustomTimePicker({ label, value }) {
  const defaultValue = value ? moment(value, 'H') : null;

  return (
    <div className="TimePicker">
      <span className="TimePicker-label">{label}</span>
      <TimePicker
        className="TimePicker-picker"
        defaultValue={defaultValue}
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
