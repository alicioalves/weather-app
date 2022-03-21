import React from "react";
import BottomDetails from "../BottomDetails";
import CityName from "../CityName";
import Temperature from "../Temperature";
import WeatherDescription from "../WeatherDescription";
import WeatherIcon from "../WeatherIcon";
import * as S from "./styles";

interface WeatherContainerProps {
  imgSource: string;
  cityName: string;
  temperature: string;
  weatherDescription: string;
  currentTime: string;
  windSpeed: string;
  humidityLevels: string;
}

const WeatherContainer = ({
  imgSource,
  cityName,
  temperature,
  weatherDescription,
  currentTime,
  windSpeed,
  humidityLevels,
}: WeatherContainerProps) => {
  return (
    <S.Container>
      <WeatherIcon imgSource={imgSource} />
      <CityName cityName={cityName} />
      <Temperature temperature={temperature} />
      <WeatherDescription weatherDescription={weatherDescription} />
      <BottomDetails
        currentTime={currentTime}
        windSpeed={windSpeed}
        humidityLevels={humidityLevels}
      />
    </S.Container>
  );
};

export default WeatherContainer;
