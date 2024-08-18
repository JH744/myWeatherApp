import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}도/{Math.round(weather?.main.temp * 1.8 + 32)}화씨
      </h2>
      <h3>{weather?.weather[0].main}</h3>
    </div>
  );
};

export default WeatherBox;
