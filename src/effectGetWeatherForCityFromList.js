import { createEffect } from "effector";
import {fetchData} from './api.js';

export const getWeatherForCityFromList = createEffect('get weatherForCityFromList')
  .use((position) => fetchData(position));

// резолвим
getWeatherForCityFromList.done.watch(({result, params}) => {
  console.log(params);
  console.log(result);
});

// реджектим
getWeatherForCityFromList.fail.watch(({error, params}) => {
  console.error(params);
  console.error(error);
});