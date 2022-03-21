import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 20px;
  top: 20px;
  text-transform: capitalize;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-shadow: 2px 2px black;
  line-height: 22px;
  text-align: center;
  color: #fdfdfd;

  ${media.greaterThan("large")`
    font-size: 25px;
  `}
`;
