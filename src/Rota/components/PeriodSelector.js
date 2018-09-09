import React from "react";
import { connect } from "react-redux";
import "./PeriodSelector.css";

function PeriodSelector({ employee, period }) {
  return (
    <div className="PeriodSelector">
      <span>Period Selector</span>
    </div>
  );
}

export default connect(
  state => ({
    employee: state.rota.periodSelector.employee,
    period: state.rota.periodSelector.period
  }),
  dispatch => ({})
)(PeriodSelector);
