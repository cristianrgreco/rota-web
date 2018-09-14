import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import TimePicker from "rc-time-picker";
import { Button, CloseButton } from "../../components";
import { hidePeriodSelector, saveSchedule, modifySchedule } from "../actions";
import "rc-time-picker/assets/index.css";
import "./PeriodSelector.css";

function PeriodSelector({
  employee,
  employeeIndex,
  scheduleIndex,
  hasModified,
  modifySchedule,
  savePeriod,
  hidePeriodSelector
}) {
  const { date, am, pm } = employee.schedule[scheduleIndex];

  return (
    <div className="PeriodSelector-wrapper">
      <div className="PeriodSelectorHeader">
        <div className="PeriodSelectorHeader-description">
          <span>
            {employee.name} - {date.format("ddd DD/MM")}
          </span>
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
            onChange={am => modifySchedule(scheduleIndex, { date, am, pm })}
          />
          <div className="TimePicker-separator" />
          <PeriodTimePicker
            label="Afternoon"
            period={pm}
            onChange={pm => modifySchedule(scheduleIndex, { date, am, pm })}
          />
          <div className="TimePicker-separator" />
          <div className="TimePicker-separator" />
        </div>

        <Button
          disabled={
            !hasModified ||
            (am && (am.start === null) ^ (am.end === null)) ||
            (pm && (pm.start === null) ^ (pm.end === null))
          }
          onClick={() => {
            savePeriod(employeeIndex);
            hidePeriodSelector();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

function PeriodTimePicker({ label, period, onChange }) {
  const dateToHour = dateMoment => +dateMoment.format("H");

  return (
    <div className="PeriodTimePicker">
      <div className="PeriodTimePicker-label">
        <span>{label}</span>
      </div>
      <div className="PeriodTimePicker-controls">
        <CustomTimePicker
          label="Start"
          value={period ? period.start : null}
          onChange={dateMoment =>
            onChange({
              start: dateToHour(dateMoment),
              end: period ? period.end : null
            })
          }
        />
        <div className="TimePicker-separator" />
        <CustomTimePicker
          label="End"
          value={period ? period.end : null}
          onChange={dateMoment =>
            onChange({
              start: period ? period.start : null,
              end: dateToHour(dateMoment)
            })
          }
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
    employeeIndex: state.rota.periodSelector.employeeIndex,
    scheduleIndex: state.rota.periodSelector.scheduleIndex,
    hasModified: state.rota.periodSelector.hasModified
  }),
  dispatch => ({
    savePeriod: employeeIndex => dispatch(saveSchedule(employeeIndex)),
    modifySchedule: (employee, scheduleIndex, period) =>
      dispatch(modifySchedule(employee, scheduleIndex, period)),
    hidePeriodSelector: () => dispatch(hidePeriodSelector())
  })
)(PeriodSelector);
