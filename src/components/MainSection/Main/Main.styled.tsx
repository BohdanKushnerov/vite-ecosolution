import styled from "styled-components";

export const Section = styled.section`
  margin-top: 222px;

  @media (min-width: 768px) {
    margin-top: 240px;
  }

  @media (min-width: 1440px) {
    margin-top: 264px;
  }
`;

export const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 65px;
    padding-bottom: 26px;
  }

  @media (min-width: 1440px) {
    gap: 296px;
    padding-bottom: 28px;
  }
`;

export const MainTitle = styled.h1`
  width: 320px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media (min-width: 1440px) {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`;

export const MainParagraphButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 43px;
  }

  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const MainParagraph = styled.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 342px;

    text-align: start;
  }

  @media (min-width: 1440px) {
    width: 363px;
  }
`;

export const EcoInfo = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    gap: 0;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Street = styled.p`
  /* margin-bottom: 8px; */

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const Email = styled.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 77px;

    text-align: start;
  }

  @media (min-width: 1440px) {
    margin-left: 492px;
  }
`;

export const Ecosolution = styled.p`
  display: none;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;
