import reactSelect from "react-select";
import styled from "styled-components";
import media from "styled-media-query";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 100%;
  background-color: #202124;
  color: #fdfdfd;

  ${media.greaterThan("large")`
  gap: 10px;
  `}
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  margin-top: 50px;
  color: #2c2c2c;
`;

export const CustomSelect = styled(reactSelect)`
  width: 100%;

  & .Select__indicator-separator,
  .Select__dropdown-indicator {
    display: none;
  }

  .Select__value-container {
    background: #f7f7f7;
    border-radius: 5px;
    padding: 10px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #c4c4c4;
  }

  .Select__control {
    border: none;
    width: 100%;

    ${media.between("medium", "large")`
    width: 100%;
    `}
  }

  .Select__menu {
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    text-align: left;
  }

  .Select__indicators {
    background: #f7f7f7;
  }
`;

export const Icon = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10%;
  top: 6.6%;
  color: #dadada;

  ${media.between("medium", "large")`
    right: 10%;
    top: 6.6%;
    `}

  ${media.greaterThan("large")`
      right: 9%
    `}
`;
