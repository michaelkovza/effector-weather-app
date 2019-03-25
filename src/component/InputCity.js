import * as React from "react";
import {createComponent} from "effector-react";

import {inputField} from "../store";

export const InputCity = createComponent(
  inputField,
  ({changeInputField}, cityName) => (
    <input
      placeholder="Название города"
      onChange={e => changeInputField(e.target.value)}
      value={cityName}
      type="text"
    />
  )
);
