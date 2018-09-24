import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { EditScheduleModal } from "./components";
import { Button, Table, Row, Cell, CellSplit } from "../components";
import { calculateTotalRotaEntryHours } from "./calculator";
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

  render() {
    const {
      rota,
      isEditScheduleModalVisible,
      editSchedule,
      scheduleToEdit,
      showEditScheduleModal,
      hideEditScheduleModal,
      hasMadeChanges,
      saveRota
    } = this.props;

    const today = new Date(2018, 7, 18);
    const week = getWeek(today);

    return (
      <Fragment>
        {isEditScheduleModalVisible && (
          <EditScheduleModal
            schedule={scheduleToEdit}
            onSubmit={schedule => {
              editSchedule(schedule);
              hideEditScheduleModal();
            }}
            onClose={hideEditScheduleModal}
          />
        )}
        <div className="Rota">
          <div className="Controls">
            <Button small success disabled={!hasMadeChanges} onClick={saveRota}>
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
            {rota.map((rotaEntry, i) => (
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
                      showEditScheduleModal(
                        rotaEntry.id,
                        rotaEntry.name,
                        scheduleEntry
                      )
                    }
                  >
                    <CellSplit>
                      {formatSchedulePeriod(scheduleEntry.am)}
                      {formatSchedulePeriod(scheduleEntry.pm)}
                    </CellSplit>
                  </Cell>
                ))}
                <Cell header centered>
                  {calculateTotalRotaEntryHours(rotaEntry)}
                </Cell>
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
