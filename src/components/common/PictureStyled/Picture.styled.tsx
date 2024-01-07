import styled from "styled-components";

export const Picture = styled.picture`
  @media (max-width: 767px) {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
