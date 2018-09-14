import React from "react";
import { connect } from "react-redux";
import { RotaCell } from ".";
import { showPeriodSelector } from "../actions";

function RotaEmployeePeriod({
  employee,
  employeeIndex,
  scheduleIndex,
  period,
  softBorder,
  showPeriodSelector
}) {
  return (
    <RotaCell
      softBorder={softBorder}
      onClick={() => showPeriodSelector(employee, employeeIndex, scheduleIndex)}
    >
      {period ? `${formatTime(period.start)}-${formatTime(period.end)}` : "-"}
    </RotaCell>
  );
}

function formatTime(time) {
  return time > 12 ? time - 12 : time;
}

export default connect(
  null,
  dispatch => ({
    showPeriodSelector: (employee, employeeIndex, scheduleIndex) =>
      dispatch(showPeriodSelector(employee, employeeIndex, scheduleIndex))
  })
)(RotaEmployeePeriod);
