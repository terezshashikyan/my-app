
export type TCurrentWeather = {
  tempInF: string;
  description: string;
  icon: string;
};

type weatherInitialState = {
  city: string | undefined;
  currentWeather: TCurrentWeather;
};

export const initialState: weatherInitialState = {
  city: "Yerevan",
  currentWeather: {
    tempInF: "",
    description: "",
    icon: "",
  },
};
