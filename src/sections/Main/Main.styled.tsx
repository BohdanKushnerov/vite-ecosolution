import styled from "styled-components";

import {
  selectBeforeTablet,
  selectDesktop,
  selectTablet,
} from "utils/mediaQueries";

export const Section = styled.section`
  margin-top: 222px;

  @media ${selectTablet} {
    margin-top: 240px;
  }

  @media ${selectDesktop} {
    margin-top: 264px;
  }
`;

export const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};

  @media ${selectTablet} {
    flex-direction: row;
    gap: 65px;
    padding-bottom: 26px;
  }

  @media ${selectDesktop} {
    gap: 296px;
    padding-bottom: 28px;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media ${selectBeforeTablet} {
    width: 100%;
  }

  @media ${selectTablet} {
    width: 301px;
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media ${selectDesktop} {
    width: 485px;

    font-size: 62px;
    line-height: 64px;
  }
`;

export const MainParagraphButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${selectTablet} {
    gap: 43px;
  }

  @media ${selectDesktop} {
    gap: 20px;
  }
`;

export const MainParagraph = styled.p`
  margin-top: 24px;

  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    margin-top: 0;
    width: 342px;

    text-align: start;
  }

  @media ${selectDesktop} {
    width: 363px;
  }
`;

export const EcoInfo = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 36px;

  @media ${selectTablet} {
    gap: 0;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${selectTablet} {
    flex-direction: row;
    gap: 0;
  }
`;

export const Street = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media ${selectTablet} {
    text-align: start;
  }
`;

export const Email = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media ${selectTablet} {
    margin-left: 77px;

    text-align: start;
  }

  @media ${selectDesktop} {
    margin-left: 492px;
  }
`;

export const Ecosolution = styled.p`
  display: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    display: block;
    margin-left: auto;
  }
`;
