import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  text-shadow: 5px 2px black;
  line-height: 105px;
  display: flex;
  align-items: center;
  text-align: center;

  ${media.greaterThan("large")`
font-size: 90px;
  `}
`;
