import React from "react";
import * as S from "./styles";

interface CityNameProps {
  cityName: string;
}

const CityName = ({ cityName }: CityNameProps) => {
  return <S.Container>{cityName}</S.Container>;
};

export default CityName;
