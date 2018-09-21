import React, { Fragment } from "react";
import { RotaRow, RotaCell, RotaEmployeePeriod } from ".";

export function RotaEntry({ rota }) {
  const totalHours = calculateTotalHours(rota.schedule);

  return (
    <RotaRow>
      <RotaCell header wide>
        {rota.name}
      </RotaCell>
      {rota.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeePeriod
            employee={rota}
            scheduleIndex={i}
            period={am}
            softBorder
          />
          <RotaEmployeePeriod employee={rota} scheduleIndex={i} period={pm} />
        </Fragment>
      ))}
      <RotaCell header>{totalHours}</RotaCell>
    </RotaRow>
  );
}

function calculateTotalHours(schedule) {
  return schedule.reduce((totalHours, { am, pm }) => {
    const amHours = am ? am.end - am.start : 0;
    const pmHours = pm ? pm.end - pm.start : 0;

    return totalHours + (amHours + pmHours);
  }, 0);
}
