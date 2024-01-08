import styled from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;

  @media ${selectTablet} {
    gap: 100px;
    margin-top: 100px;
  }

  @media ${selectDesktop} {
    gap: 122px;
    margin-top: 120px;
  }
`;

export const TitleTextWrap = styled.div`
  @media ${selectTablet} {
    display: flex;
    gap: 82px;
  }
  @media ${selectDesktop} {
    gap: 254px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 272px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 365px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const AboutText = styled.p`
  margin-top: 24px;

  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    /* 342px + 11px */
    width: 353px;
    margin-top: 0;
    padding-left: 11px;

    border-left: 1px solid ${({ theme }) => theme.colors.accentColor};
  }

  @media ${selectDesktop} {
    width: 620px;
    padding-left: 161px;
  }
`;

export const ValueList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${selectTablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${selectDesktop} {
    gap: 48px;
  }
`;

export const ValueItem = styled.li`
  flex-shrink: 0;
  padding: 12px;

  background: ${({ theme }) => theme.colors.secondBackgroundColor};

  @media ${selectTablet} {
    width: 159px;
  }

  @media ${selectDesktop} {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`;

export const ValueImage = styled.li`
  display: none;
  @media ${selectTablet} {
    display: block;
    grid-column: span 2;
  }
`;

export const ValueSubtitleSvgWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px; // 8
  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};

  svg use {
    stroke: ${({ theme }) => theme.colors.mainTextColor};
    fill: transparent;
  }

  @media ${selectTablet} {
    padding-bottom: 51px;
  }

  @media ${selectDesktop} {
    padding-bottom: 94px;
    margin-bottom: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ValueItemSubtitle = styled.h3`
  display: flex;
  flex-direction: column;

  font-family: "Oswald";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: 18px;
  }

  @media ${selectDesktop} {
    font-size: 30px; // 32
    line-height: 48px;
  }
`;

export const ValueItemText = styled.p`
  text-align: justify;
  font-family: "Fira Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${selectDesktop} {
    font-size: 16px;
  }
`;
