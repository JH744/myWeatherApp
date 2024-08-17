import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherBox = ({ weather }) => {
  return (
    <div className="box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}도/230화씨</h2>
      <h3>{weather?.weather[0].main}</h3>
    </div>
  );
};

export default WeatherBox;
