import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";

const weatherForcastsSelector = (state: RootState) => state.weatherForcasts;

const citySelector = createSelector(
  [weatherForcastsSelector],
  (weatherForcasts) => weatherForcasts.city
);

const currentWeatherSelector = createSelector(
  [weatherForcastsSelector],
  (weatherForcasts) => weatherForcasts.currentWeather
);
export const weatherForcastsSel = { citySelector, currentWeatherSelector };
