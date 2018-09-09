import React from "react";
import { connect } from "react-redux";
import { RotaCell } from ".";
import { showPeriodSelector } from "../actions";

function RotaEmployeePeriod({
  employee,
  period,
  softBorder,
  showPeriodSelector
}) {
  return period ? (
    <RotaCell
      onClick={() => showPeriodSelector(employee, period)}
      softBorder={softBorder}
    >
      {formatTime(period.start)}-{formatTime(period.end)}
    </RotaCell>
  ) : (
    <RotaCell onClick={showPeriodSelector} softBorder={softBorder}>
      -
    </RotaCell>
  );
}

function formatTime(time) {
  return time > 12 ? time - 12 : time;
}

export default connect(
  null,
  dispatch => ({
    showPeriodSelector: (employee, period) =>
      dispatch(showPeriodSelector(employee, period))
  })
)(RotaEmployeePeriod);
