import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { getWeek } from "./week";
import { fetchRota } from "./actions";
import { PeriodSelector, RotaEmployee, RotaHeader } from "./components";
import "./index.css";

class Rota extends PureComponent {
  componentDidMount() {
    this.props.fetchRota(this.props.match.params.rota);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.rota !== newProps.match.params.rota) {
      this.props.fetchRota(newProps.match.params.rota);
    }
  }

  render() {
    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <Fragment>
        {this.props.isPeriodSelectorEnabled && <PeriodSelector />}
        <div className="Rota">
          <RotaHeader week={week} />
          {this.props.employees.map((employee, i) => (
            <RotaEmployee key={i} employee={employee} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    employees: state.rota.employees,
    isPeriodSelectorEnabled: state.rota.periodSelector.enabled
  }),
  dispatch => ({
    fetchRota: rotaName => dispatch(fetchRota(rotaName))
  })
)(Rota);
