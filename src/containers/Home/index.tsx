import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../components ";
import { weatherForcastsOp, weatherForcastsSel } from "../../store/weatherForcasts";
import { AppDispatch } from "../../store";
import { useEffect } from "react";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();
    const city = useSelector(weatherForcastsSel.citySelector);
    const currentWeather = useSelector(weatherForcastsSel.currentWeatherSelector);

    useEffect(() => {
        if(city) {
        dispatch(weatherForcastsOp.setCurrentWeather(city));
        }
      }, [city]);

  return (
    <>
      <SearchInput />
      <div className="currentWeather">
        <p className="currentWeather_city">
         {city}
        </p>
        <p className="currentWeather_temp">
            {currentWeather.tempInF} F
        </p>
        <p className="currentWether_description">
            {currentWeather.description}
        </p>
        <img src= {currentWeather.icon} alt="temp" />
      </div>
    </>
  );
};

export default Home;
