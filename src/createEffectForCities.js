import { createEffect } from "effector";
import {fetchData} from './api.js';

export const createEffectForCities = (name) => {
  const effect = createEffect(name)
    .use((position) => fetchData(position));

// резолвим
  effect.done.watch(({result, params}) => {
    console.log(params);
    console.log(result);
  });

// реджектим
  effect.fail.watch(({error, params}) => {
    console.error(params);
    console.error(error);
  });

  return effect;
};