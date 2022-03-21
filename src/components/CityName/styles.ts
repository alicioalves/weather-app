import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  text-shadow: 5px 2px black;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;

  ${media.greaterThan("large")`
    font-size: 50px;
    margin: 50px;
  `}
`;
