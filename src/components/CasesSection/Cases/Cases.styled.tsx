import styled from "styled-components";

export const CasesTitle = styled.h2`
  margin-top: 36px;
  margin-bottom: 24px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
`;

export const SliderCounterAndButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 26px;
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

  border-radius: 100px;
  border: 1px solid #173d33;
  svg {
    stroke: #173d33;
  }
`;

export const SliderButtonRigth = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 100px;
  border: 1px solid #173d33;
  svg {
    stroke: #173d33;
  }
`;

export const SwiperWrap = styled.div`
  width: 320px;
  height: 318px;
  flex-shrink: 0;

  background: #eaedf1;
`;

export const Image = styled.img`
  width: 320px;
  height: 168px;
`;

export const SlideTextContentWrap = styled.div`
  padding: 24px 12px 12px;
`;

export const SlideTitle = styled.h4`
  width: 175px;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const SlideDescription = styled.p`
  width: 175px;

  color: #173d33;
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const SlideDate = styled.p`
  color: #173d33;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
