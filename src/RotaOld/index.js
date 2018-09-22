import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { getWeek } from "./week";
import { fetchRota } from "./actions";
import { PeriodSelector, RotaEntry, RotaHeader } from "./components";
import "./index.css";
import { Button } from "../components";

class Rota extends PureComponent {
  componentDidMount() {
    this.props.fetchRota();
  }

  render() {
    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <Fragment>
        {this.props.isPeriodSelectorEnabled && <PeriodSelector />}
        <div className="Controls">
          <Button success>Save</Button>
        </div>
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
