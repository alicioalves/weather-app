import React from "react";
import * as S from "./styles";

interface TemperatureProps {
  temperature: string;
}

const Temperature = ({ temperature }: TemperatureProps) => {
  return <S.Container>{temperature}</S.Container>;
};

export default Temperature;
