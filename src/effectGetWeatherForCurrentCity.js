import { createEffect } from "effector";
import {fetchData} from './api.js';

export const getWeatherForCurrentCity = createEffect('get weatherForCurrentCity')
  .use((position) => fetchData(position));

// резолвим
getWeatherForCurrentCity.done.watch(({result, params}) => {
  console.log(params);
  console.log(result);
});

// реджектим
getWeatherForCurrentCity.fail.watch(({error, params}) => {
  console.error(params);
  console.error(error);
});