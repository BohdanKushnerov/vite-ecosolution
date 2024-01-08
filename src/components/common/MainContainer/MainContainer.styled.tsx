import styled from "styled-components";

import {
  selectBeforeTablet,
  selectDesktop,
  selectTablet,
} from "utils/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 767px) {
    /* @media ${selectBeforeTablet} { */
    min-width: 360px;
    max-width: 480px;
  }

  @media (min-width: 768px) {
    /* @media ${selectTablet} { */
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    /* @media ${selectDesktop} { */
    width: 1280px;
    padding: 0 20px;
  }
`;
