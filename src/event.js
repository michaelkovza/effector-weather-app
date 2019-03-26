//@flow

import {createEvent} from "effector";

export const addCity = createEvent("add city");
export const deleteCity = createEvent('delete city');
export const changeInputField = createEvent("change input field");
export const setCurrentPosition = createEvent('set current position');
