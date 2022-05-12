import React, { useEffect, useState } from "react";

const useWeather = (location) => {
  const [temp, setTemp] = useState("");

  const weatherInfoHandler = async () => {
    const api_key = "eb1a50b360956a4174702fcf42888f4a";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${api_key}`
      );
      const data = await response.json();
      const temp = data.main?.temp;
      setTemp(temp);
      //   console.log(temp);
      //   http://openweathermap.org/img/w/10d.png
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    weatherInfoHandler();
  }, []);

  return temp;
};

export default useWeather;
