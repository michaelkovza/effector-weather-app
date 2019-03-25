import * as React from "react";
import {createComponent} from "effector-react";
import {inputField} from "../store";

export const Button = createComponent(
  inputField,
  ({addCity}, cityName) => (
    <button
      onClick={() => {
        addCity(cityName);
      }}>
      найти
    </button>
  )
);
