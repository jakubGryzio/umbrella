import { useReducer } from "react";
import WeatherContext from "./weather-context";

const defaultWeather = {
  temperature: undefined,
};

const weatherReducer = (state, action) => {
  if (action.type === "CHANGE_WEATHER") {
    if (state.temperature !== action.temperature) {
      return {
        temperature: action.temperature,
      };
    }
    return {
      temperature: state.temperature,
    };
  }
  return defaultWeather;
};

const WeatherProvider = (props) => {
  const [weatherState, dispatchWeatherAction] = useReducer(
    weatherReducer,
    defaultWeather
  );

  const changeWeatherInfo = (value) => {
    dispatchWeatherAction({ type: "CHANGE_WEATHER", temperature: value });
  };

  const weatherContext = {
    temperature: weatherState.temperature?.toFixed(),
    changeWeather: changeWeatherInfo,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
