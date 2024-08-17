import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = () => {
  return (
    <div className="btn">
      <Button variant="warning">Current location</Button>
      <Button variant="warning">Paris</Button>
      <Button variant="warning">NewYork</Button>
    </div>
  );
};

export default WeatherButton;
