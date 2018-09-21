import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { getWeek } from "./week";
import { fetchRota } from "./actions";
import { PeriodSelector, RotaEntry, RotaHeader } from "./components";
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
          {this.props.rotas.map((rota, i) => (
            <RotaEntry key={i} rota={rota} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    rotas: state.rota.rotas,
    isPeriodSelectorEnabled: state.rota.periodSelector.enabled
  }),
  dispatch => ({
    fetchRota: rotaName => dispatch(fetchRota(rotaName))
  })
)(Rota);
