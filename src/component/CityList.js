import * as React from "react";
import {createComponent} from "effector-react";
import {cityList} from "../store";
import {CityItem} from "./CityItem";

export const CityList = createComponent(cityList, ({handleDeleteCity, getWeatherForCityFromList}, cityList) => {

  return (
    <ul>
      {cityList.map(city => <CityItem getWeatherForCityFromList={ getWeatherForCityFromList } onDeleteCity={ handleDeleteCity } key={city.name} city={ city }/>)}
    </ul>
  );
});
