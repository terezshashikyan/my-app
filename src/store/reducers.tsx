import { combineReducers } from "@reduxjs/toolkit";
import { weatherForcastsSlice } from "./weatherForcasts";

export const reducers = () =>
  combineReducers({
    weatherForcasts: weatherForcastsSlice.reducer,
  });
