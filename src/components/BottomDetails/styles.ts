import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  background: #fdfcfc;
  margin-top: 100px;
  margin-bottom: 10px;
  height: 59px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-shadow: 1px 1px black;
  line-height: 22px;
  text-align: center;
  color: #9a9a9a;
  bottom: 0;

  ${media.between("medium", "large")`
  height: 80px;
    font-size: 20px;
  `}

  ${media.greaterThan("large")`
    font-size: 25px;
    margin-top: 100px;
  `}
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const Wind = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const Humidity = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const Label = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #c4c4c4;
`;
