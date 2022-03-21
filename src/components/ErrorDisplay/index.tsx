import React from "react";
import * as S from "./styles";

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return <S.Container>{error}</S.Container>;
};

export default ErrorDisplay;
