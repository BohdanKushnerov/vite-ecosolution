import styled from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";

export const Image = styled.img`
  @media ${selectTablet} {
    width: 342px;
  }

  @media ${selectDesktop} {
    width: 596px;
    height: 296px;
  }
`;
