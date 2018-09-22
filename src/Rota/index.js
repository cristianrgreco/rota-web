import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { EditScheduleModal } from "./components";
import { Button, Table, Row, Cell } from "../components";
import { getWeek } from "./week";
import "./index.css";

import {
  fetchRota,
  saveRota,
  editSchedule,
  showEditScheduleModal,
  hideEditScheduleModal
} from "./actions";

class Rota extends PureComponent {
  componentDidMount() {
    this.props.fetchRota();
  }

  formatTime(time) {
    return time > 12 ? time - 12 : time;
  }

  formatScheduleEntryPeriod(period) {
    if (!period.start || !period.end) {
      return "";
    } else {
      return `${this.formatTime(period.start)}-${this.formatTime(period.end)}`;
    }
  }

  render() {
    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <Fragment>
        {this.props.isEditScheduleModalVisible && (
          <EditScheduleModal
            schedule={this.props.scheduleToEdit}
            onSubmit={schedule => {
              this.props.editSchedule(schedule);
              this.props.hideEditScheduleModal();
            }}
            onClose={this.props.hideEditScheduleModal}
          />
        )}
        <div className="Rota">
          <div className="Controls">
            <Button
              small
              success
              disabled={!this.props.hasMadeChanges}
              onClick={this.props.saveRota}
            >
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
                  <Cell
                    key={j}
                    wide
                    centered
                    onClick={() =>
                      this.props.showEditScheduleModal(
                        rotaEntry.id,
                        rotaEntry.name,
                        scheduleEntry
                      )
                    }
                  >
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
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    rota: state.rota.rota,
    hasMadeChanges: state.rota.hasMadeChanges,
    scheduleToEdit: state.rota.scheduleToEdit,
    isEditScheduleModalVisible: state.rota.isEditScheduleModalVisible
  }),
  dispatch => ({
    fetchRota: () => dispatch(fetchRota()),
    saveRota: rota => dispatch(saveRota(rota)),
    editSchedule: ({ rotaId, scheduleEntry }) =>
      dispatch(editSchedule(rotaId, scheduleEntry)),
    showEditScheduleModal: (rotaId, name, scheduleEntry) =>
      dispatch(showEditScheduleModal(rotaId, name, scheduleEntry)),
    hideEditScheduleModal: () => dispatch(hideEditScheduleModal())
  })
)(Rota);
