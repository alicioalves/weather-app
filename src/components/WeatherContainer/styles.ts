import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;

  ${media.between("medium", "large")`
    
    `}

  ${media.greaterThan("large")`
  
  `}
`;
