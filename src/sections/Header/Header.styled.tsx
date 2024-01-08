import styled from "styled-components";
import {
  selectBeforeTablet,
  selectDesktop,
  selectTablet,
} from "utils/mediaQueries";

export const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 11px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.mainBackgroundColor};

  @media ${selectBeforeTablet} {
    min-width: 360px;
    max-width: 480px;
    justify-content: space-between;
    padding: 36px 20px 0;
  }

  @media ${selectTablet} {
    width: 709px;
    max-width: 709px;

    justify-content: center;
    padding: 36px 0 0;
  }

  @media ${selectDesktop} {
    width: 1240px;
    max-width: 1240px;
    padding-top: 24px;
  }
`;

export const HeaderMenuAndButtonWrap = styled.div`
  @media ${selectTablet} {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`;
