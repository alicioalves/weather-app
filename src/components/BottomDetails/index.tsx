import React from "react";
import * as S from "./styles";

interface BottomDetailsProps {
  currentTime: string;
  windSpeed: string;
  humidityLevels: string;
}

const BottomDetails = ({
  currentTime,
  windSpeed,
  humidityLevels,
}: BottomDetailsProps) => {
  return (
    <S.Container>
      <S.Time>
        <S.Label>HORA</S.Label> {currentTime}
      </S.Time>
      <S.Wind>
        <S.Label>VENTOS</S.Label> {windSpeed}
      </S.Wind>
      <S.Humidity>
        <S.Label>UMIDADE</S.Label> {humidityLevels}
      </S.Humidity>
    </S.Container>
  );
};

export default BottomDetails;
