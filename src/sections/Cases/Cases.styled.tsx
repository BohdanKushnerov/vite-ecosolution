import styled from "styled-components";

import {
  selectBeforeTablet,
  selectDesktop,
  selectTablet,
} from "utils/mediaQueries";

export const Section = styled.section`
  margin-top: 36px;

  @media ${selectTablet} {
    margin-top: 100px;
  }

  @media ${selectDesktop} {
    margin-top: 120px;
  }
`;

export const TitleCounterAndButtonWrap = styled.div`
  @media ${selectTablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const CasesTitle = styled.h2`
  width: 100%;

  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 276px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const SliderCounterAndButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 24px;

  @media ${selectTablet} {
    margin-top: 0;
    padding-left: 9px;

    border-left: 1px solid ${({ theme }) => theme.colors.accentColor};
  }

  @media ${selectDesktop} {
    padding-left: 161px;
  }
`;

export const SliderCounter = styled.p`
  text-align: justify;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;

  span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const SliderButtonsWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const SliderButtonLeft = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  rotate: 180deg;
  cursor: pointer;

  border-radius: 100px;
  border: 1px solid #173d33;

  svg {
    stroke: #173d33;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor};

    svg {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const SliderButtonRigth = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;

  border-radius: 100px;
  border: 1px solid #173d33;

  svg {
    stroke: #173d33;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor};

    svg {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const SwiperWrap = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 24px;

  @media ${selectTablet} {
    margin-top: 38px;
  }

  @media ${selectDesktop} {
    margin-top: 120px;
  }
`;

export const SlideTextContentWrap = styled.div`
  padding: 24px 12px 12px;

  background: ${({ theme }) => theme.colors.secondBackgroundColor};

  @media ${selectDesktop} {
    padding: 48px 36px;
  }
`;

export const SlideTitleIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;

  @media ${selectBeforeTablet} {
    gap: 61px;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};
`;

export const SlideTitle = styled.h4`
  width: 100%;

  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${selectTablet} {
    width: 194px;
    height: 72px;

    font-size: 20px;
    letter-spacing: -0.85px;
  }

  @media ${selectDesktop} {
    width: 357px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const IconSlideLink = styled.a`
  display: inline-flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 100px;
  background: ${({ theme }) => theme.colors.accentColor};
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    background: #173d33;

    svg use {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const SlideDescDateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

export const SlideDescription = styled.p`
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media ${selectTablet} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${selectDesktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const SlideDate = styled.p`
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media ${selectTablet} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${selectDesktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
