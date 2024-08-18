import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const cites = ["paris", "new york", "tokyo", "seoul"];
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치:" + lat + lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_API_KEY; // 환경변수 api 호출
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("data", data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_API_KEY; // 환경변수 api 호출
      let cityname = city;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("data", data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (city) getWeatherByCity();
    else {
      getCurrentLocation();
    }
  }, [city]);
  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <FadeLoader
            color="#e17a4a"
            height={19}
            radius={34}
            width={5}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cites={cites} city={city} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
