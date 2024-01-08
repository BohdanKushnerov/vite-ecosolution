import styled from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";

export const Section = styled.section`
  margin-top: 36px;

  @media ${selectTablet} {
    margin-top: 100px;
  }

  @media ${selectDesktop} {
    margin-top: 120px;
  }
`;

export const ElectricityTitle = styled.h2`
  width: 286px;
  margin: 0 auto;

  text-align: center;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }

  &::after {
    display: block;
    margin: 24px auto 0;
    content: "";

    width: 1px;
    height: 87px;
    flex-shrink: 0;

    background: ${({ theme }) => theme.colors.accentColor};

    @media ${selectDesktop} {
      margin: 16px auto 17px;
    }
  }
`;

export const ElectricityCounterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  @media ${selectTablet} {
    gap: 24px;
  }

  @media ${selectDesktop} {
    margin-top: 17px;
  }
`;

export const ElectricityCounter = styled.p`
  color: ${({ theme }) => theme.colors.accentColor};
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: 100px;
    line-height: 100px;
  }

  @media ${selectDesktop} {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const KWHSpan = styled.span`
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media ${selectTablet} {
    font-size: 28px;
    line-height: 48px;
  }

  @media ${selectDesktop} {
    font-size: 48px;
  }
`;
