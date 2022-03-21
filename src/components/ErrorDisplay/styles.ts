import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  text-align: center;
  width: 70%;

  ${media.greaterThan("large")`
    font-size: 20px;
    margin: 50px;
  `}
`;
