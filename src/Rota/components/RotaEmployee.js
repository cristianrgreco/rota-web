import React, { Fragment } from "react";
import { RotaRow, RotaCell, RotaEmployeePeriod } from ".";

export function RotaEmployee({ employee }) {
  const totalHours = calculateTotalHours(employee.schedule);

  return (
    <RotaRow>
      <RotaCell header wide>
        {employee.name}
      </RotaCell>
      {employee.schedule.map(({ am, pm }, i) => (
        <Fragment key={i}>
          <RotaEmployeePeriod
            employee={employee}
            periodIndex={i}
            period={am}
            softBorder
          />
          <RotaEmployeePeriod employee={employee} periodIndex={i} period={pm} />
        </Fragment>
      ))}
      <RotaCell>{totalHours}</RotaCell>
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
