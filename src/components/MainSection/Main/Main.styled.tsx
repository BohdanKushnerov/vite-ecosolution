import styled from "styled-components";

export const MainContentWrap = styled.div`
  margin-top: 146px;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SectionAndBeforeLine = styled.section`
  &::after {
    content: "";
    display: block;
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    margin-top: 24px;

    background: #97d28b;

    @media (min-width: 768px) {
      margin-top: 26px;
    }
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 24px;
  width: 320px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 100% */
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }

  @media (min-width: 1440px) {
    width: 485px;

    font-size: 64px;
    line-height: 64px; /* 100% */
  }
`;

export const MainParagraph = styled.p`
  margin-bottom: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    width: 342px;
    margin-bottom: 43px;

    text-align: start;
  }

  @media (min-width: 1440px) {
    width: 363px;
    margin-bottom: 20px;
  }
`;

export const MainParagraphButtonWrap = styled.div`
  @media (min-width: 768px) {
    margin-left: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 296px;
  }
`;
