import * as React from "react";

import {cityList, inputField, currentCity} from "./store";
import {addCity, deleteCity, changeInputField} from "./event";
import { createEffectForCities } from "./createEffectForCities";

import {Button} from "./component/Button";
import {InputCity} from "./component/InputCity";
import {CityList} from "./component/CityList";
import {CurrentCity} from './component/CurrentCity';

const getWeatherForCurrentCity = createEffectForCities('get weather for current city');
const getWeatherForCityFromList = createEffectForCities('get weather for city from list');

export class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      getWeatherForCurrentCity(`${position.coords.latitude},${position.coords.longitude}`);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <CurrentCity />
          <InputCity changeInputField={changeInputField} />
          <Button addCity={addCity} />
        </div>
        <CityList handleDeleteCity={deleteCity } getWeatherForCityFromList={ getWeatherForCityFromList } />
      </React.Fragment>
    );
  }
}

currentCity
  .on(getWeatherForCurrentCity.done, (state, {result: city}) => {
    return Object.assign({}, state, {
      city
    })
  });

cityList
  .on(addCity, (state, city) => [...state, { name: city }])
  .on(deleteCity, (state, cityToDelete) => ( state.filter(city => city.name !== cityToDelete)))
  .on(getWeatherForCityFromList.done, (state, {result: forecastForCity}) => {
    return state.map(item => {
      if(item.name.toLowerCase() !== forecastForCity.location.name.toLowerCase()) {
        return item;
      }

      return Object.assign({}, item, forecastForCity.current);
    })
  });


inputField
  .on(changeInputField, (state, payload) => payload)
  .reset(addCity);
