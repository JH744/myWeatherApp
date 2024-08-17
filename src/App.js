import { useEffect, useState } from "react";
import "./App.css";

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude; //위도
    let lon = position.coords.longitude; //경도
    console.log("현재위치:" + lat + lon);
    getWeatherByCurrentLocation(lat, lon);
  });
};

const getWeatherByCurrentLocation = async (lat, lon) => {
  const apiKey = process.env.REACT_APP_API_KEY; // 환경변수 api 호출
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log("data", data);
};

function App() {
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div className="App"></div>;
}

export default App;
