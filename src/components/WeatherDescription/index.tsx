import React from "react";
import * as S from "./styles";

interface WeatherDescritpionProps {
  weatherDescription: string;
}

const WeatherDescription = ({
  weatherDescription,
}: WeatherDescritpionProps) => {
  return <S.Container>{weatherDescription}</S.Container>;
};

export default WeatherDescription;
