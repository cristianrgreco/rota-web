import React from "react";
import { connect } from "react-redux";
import { RotaCell } from ".";
import { showPeriodSelector } from "../actions";

export default connect(
  null,
  dispatch => ({
    showPeriodSelector: () => dispatch(showPeriodSelector())
  })
)(RotaEmployeePeriod);

function RotaEmployeePeriod({ period, softBorder, showPeriodSelector }) {
  return period ? (
    <RotaCell onClick={showPeriodSelector} softBorder={softBorder}>
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
