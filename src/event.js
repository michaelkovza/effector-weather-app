//@flow

import {createEvent} from "effector";

export const addCity = createEvent("add city");
export const deleteCity = createEvent('delete city');
export const changeInputField = createEvent("change inputField");
export const setCurrentPosition = createEvent('set currentPosition');
