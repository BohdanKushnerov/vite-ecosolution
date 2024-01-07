import styled from "styled-components";

export const Section = styled.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const TitleCounterAndButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const CasesTitle = styled.h2`
  width: 100%;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 276px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1280px) {
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

  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 9px;

    border-left: 1px solid #97d28b;
  }

  @media (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const SliderCounter = styled.p`
  color: #173d33;

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
    border-color: #97d28b;

    svg {
      stroke: #97d28b;
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
    border-color: #97d28b;

    svg {
      stroke: #97d28b;
    }
  }
`;

export const SwiperWrap = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 38px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const SlideTextContentWrap = styled.div`
  padding: 24px 12px 12px;

  background: #eaedf1;

  @media (min-width: 1280px) {
    padding: 48px 36px;
  }
`;

export const SlideTitleIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;

  @media (max-width: 767px) {
    gap: 61px;
  }

  border-bottom: 1px solid #97d28b;
`;

export const SlideTitle = styled.h4`
  width: 100%;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    width: 194px;
    height: 72px;

    font-size: 20px;
    letter-spacing: -0.85px;
  }

  @media (min-width: 1280px) {
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
  background: #97d28b;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    background: #173d33;

    svg use {
      stroke: #97d28b;
    }
  }
`;

export const SlideDescDateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

export const SlideDescription = styled.p`
  color: #173d33;
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const SlideDate = styled.p`
  color: #173d33;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
