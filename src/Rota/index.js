import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { EditScheduleModal } from "./components";
import { Button, Table, Row, Cell } from "../components";
import { formatSchedulePeriod } from "./formatter";
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

  calculateTotalHours(rotaEntry) {
    return rotaEntry.schedule.reduce((totalHours, { am, pm }) => {
      const amHours = (am.end || 0) - (am.start || 0);
      const pmHours = (pm.end || 0) - (pm.start || 0);
      return totalHours + (amHours + pmHours);
    }, 0);
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
                        {formatSchedulePeriod(scheduleEntry.am)}
                      </span>
                      <span className="CellSplitItem separator" />
                      <span className="CellSplitItem">
                        {formatSchedulePeriod(scheduleEntry.pm)}
                      </span>
                    </div>
                  </Cell>
                ))}
                <Cell centered>{this.calculateTotalHours(rotaEntry)}</Cell>
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
