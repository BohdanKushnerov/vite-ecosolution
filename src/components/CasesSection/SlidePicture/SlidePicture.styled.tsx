import styled from "styled-components";

export const Image = styled.img`
  width: 320px;
  height: 168px;

  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 596px;
    height: 296px;
  }
`;