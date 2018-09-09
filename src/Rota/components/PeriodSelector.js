import React from "react";
import { connect } from "react-redux";

function PeriodSelector({ employee, period }) {
  return <span />;
}

export default connect(
  state => ({
    employee: state.rota.periodSelector.employee,
    period: state.rota.periodSelector.period
  }),
  dispatch => ({})
)(PeriodSelector);
