import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button, Table, Row, Cell } from "../components";
import { fetchRota } from "./actions";
import { getWeek } from "./week";
import "./index.css";

class Rota extends PureComponent {
  componentDidMount() {
    this.props.fetchRota();
  }

  formatTime(time) {
    return time > 12 ? time - 12 : time;
  }

  formatScheduleEntryPeriod(period) {
    if (!period) {
      return "";
    } else {
      return `${this.formatTime(period.start)}-${this.formatTime(period.end)}`;
    }
  }

  render() {
    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <div className="Rota">
        <div className="Controls">
          <Button small success disabled={true}>
            Save
          </Button>
        </div>
        <Table>
          <Row header multiLine>
            <Cell />
            {week.map((weekDay, i) => (
              <Cell key={i} wide>
                <div>{weekDay.format("ddd")}</div>
                <div>{weekDay.format("DD/MM")}</div>
              </Cell>
            ))}
            <Cell />
          </Row>
          {this.props.rota.map((rotaEntry, i) => (
            <Row key={i}>
              <Cell header centered>
                {rotaEntry.name}
              </Cell>
              {rotaEntry.schedule.map((scheduleEntry, j) => (
                <Cell key={j} wide centered>
                  <div className="CellSplit">
                    <span className="CellSplitItem">
                      {this.formatScheduleEntryPeriod(scheduleEntry.am)}
                    </span>
                    <span className="CellSplitItem separator" />
                    <span className="CellSplitItem">
                      {this.formatScheduleEntryPeriod(scheduleEntry.pm)}
                    </span>
                  </div>
                </Cell>
              ))}
              <Cell />
            </Row>
          ))}
        </Table>
      </div>
    );
  }
}

export default connect(
  state => ({
    rota: state.rota.rota
  }),
  dispatch => ({
    fetchRota: () => dispatch(fetchRota())
  })
)(Rota);
