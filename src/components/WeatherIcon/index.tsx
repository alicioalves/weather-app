import React from "react";
import * as S from "./styles";

interface WeatherIconProps {
  imgSource: string;
}

const WeatherIcon = ({ imgSource }: WeatherIconProps) => {
  return (
    <S.Container>
      {" "}
      <img
        src={imgSource}
        alt="Imagem that describes current weather in selected city"
      />
    </S.Container>
  );
};

export default WeatherIcon;
