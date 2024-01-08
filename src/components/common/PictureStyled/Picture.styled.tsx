import styled from "styled-components";

import { selectBeforeTablet } from "utils/mediaQueries";

export const Picture = styled.picture`
  @media ${selectBeforeTablet} {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
