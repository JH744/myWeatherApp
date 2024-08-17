import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치:" + lat + lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    // const apiKey = process.env.REACT_APP_API_KEY; // 환경변수 api 호출
    const apiKey = fa6eaf0b4515b3dc584e357a0d0d68f0; // 빌드에러로 임시 하드코딩
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={apiKey}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("data", data);
    setWeather(data);
  };

  useEffect(
    () => {
      getCurrentLocation();
    }, // eslint-disable-next-line
    []
  );
  return (
    <div className="App">
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
