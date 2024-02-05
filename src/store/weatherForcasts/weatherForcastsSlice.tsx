import { initialState } from "./initialState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCurrentWeather } from "./initialState";

export const weatherForcastsSlice = createSlice({
  name: "weatherForcasts",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCurrentWeather: (state, action: PayloadAction<TCurrentWeather>) => {
      state.currentWeather = action.payload;
    },
  },
});

export const { setCity } = weatherForcastsSlice.actions;
