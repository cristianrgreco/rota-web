import React from "react";
import { default as BaseTimePicker } from "rc-time-picker";
import "rc-time-picker/assets/index.css";

export function TimePicker({ defaultValue, onChange }) {
  return (
    <BaseTimePicker
      defaultValue={defaultValue}
      onChange={onChange}
      showSecond={false}
      showMinute={false}
      allowEmpty={false}
      use12Hours
      inputReadOnly
    />
  );
}
