import * as React from "react";
import {createComponent} from "effector-react";
import {currentCity} from "../store";

export const CurrentCity = createComponent(
  currentCity,
  (_, city) => {
    if (!city) {
      return (
        <p>Loading...</p>
      )
    }

    const {
      city: {
        current: {
          temp_c,
          condition: {
            icon,
            text
          }
        },
        location: {
          name,
          region
        }
      }
    } = city;

    return (
      <div className='current-city'>
        <h1>{name} <br/> {region}</h1>
        <img src={icon} alt={text}/>
        <p>temperature: <strong>{temp_c}</strong></p>
      </div>
    )
  }

);
