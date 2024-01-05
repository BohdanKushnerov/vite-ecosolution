import styled from "styled-components";

export const Section = styled.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const ElectricityTitle = styled.h2`
  width: 286px;
  margin: 0 auto;

  color: #173d33;
  text-align: center;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1440px) {
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

    background: #97d28b;

    @media (min-width: 1440px) {
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

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 17px;
  }
`;

export const ElectricityCounter = styled.p`
  color: #97d28b;
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media (min-width: 1440px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const KWHSpan = styled.span`
  color: #173d33;
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`;
