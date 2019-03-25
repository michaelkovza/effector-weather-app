//@flow
import {createStore} from "effector";

export const currentCity = createStore(null);
export const inputField = createStore("");
export const cityList = createStore([]);

