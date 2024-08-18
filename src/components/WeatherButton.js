import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cites, setCity, city }) => {
  console.log("cites:" + cites);
  return (
    <div className="btn">
      <Button
        variant="warning"
        size={city == "" ? "lg" : ""}
        onClick={() => {
          setCity("");
        }}
      >
        Current location
      </Button>
      {cites.map(
        // map return 필요. 현재는 생략됨.
        (item, index) => (
          <Button
            key={index}
            variant="warning"
            size={city == item ? "lg" : ""}
            onClick={() => {
              // 온클릭안에 익명함수를 쓰는 이유 : 매개변수를 전달하는 함수사용위해
              setCity(item);
            }}
          >
            {item}
          </Button>
        )
      )}
    </div>
  );
};

export default WeatherButton;
