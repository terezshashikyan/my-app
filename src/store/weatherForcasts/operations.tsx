import axios from "axios";
import { AppDispatch } from "..";
import { TCurrentWeather } from "./initialState";
import { weatherForcastsSlice } from "./weatherForcastsSlice";

const setCity = (city: string) => {
  const { setCity } = weatherForcastsSlice.actions;
  return (dispatch: AppDispatch) => {
    dispatch(setCity(city));
  };
};

const setCurrentWeather = (city: string) => {
  const { setCurrentWeather } = weatherForcastsSlice.actions;
  return async (dispatch: AppDispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=b91b902754eb103e2eb07f131a74628f`
      )
      .then((response) =>
        dispatch(
          setCurrentWeather({
            description: response.data.weather[0].description,
            tempInF: response.data.main.temp,
            icon: response.data.weather[0].icon,
          })
        )
      )
      .catch((error) => {
        console.log(error);
          dispatch(
            setCurrentWeather({ description: "", tempInF: "", icon: "" })
          );
      });
  };
};

export const weatherForcastsOp = {
  setCity,
  setCurrentWeather,
};
