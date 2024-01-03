import styled from "styled-components";

export const EcoInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    display: flex;

    margin-top: 16px;
    margin-bottom: 40px;
  }
`;

export const Street = styled.p`
  margin-bottom: 8px;

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

export const AboutTitle = styled.h2`
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

export const AboutText = styled.p`
  margin-bottom: 36px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ValueList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ValueItem = styled.li`
  width: 148px;
  height: 197px;
  flex-shrink: 0;
  padding: 12px;

  background: #eaedf1;

  @media (min-width: 768px) {
    width: 159px;
  }

  @media (min-width: 1440px) {
    width: 274px;
    height: 339px;

    padding: 48px 24px;
  }
`;

export const ValueImage = styled.li`
  display: none;
  @media (min-width: 768px) {
    display: block;
    grid-column: span 2;
  }
`;

export const ValueTitleSvgWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 94px;
    margin-bottom: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ValueItemTitle = styled.h3`
  display: flex;
  flex-direction: column;

  color: #173d33;
  font-family: "Oswald";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
    line-height: 48px; /* 150% */
  }
`;

export const ValueItemText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: "Fira Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;
