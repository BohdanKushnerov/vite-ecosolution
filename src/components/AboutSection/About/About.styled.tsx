import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;

  @media (min-width: 768px) {
    gap: 100px;
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    gap: 122px;
    margin-top: 120px;
  }
`;

export const TitleTextWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 82px;
  }
  @media (min-width: 1440px) {
    gap: 254px;
  }
`;

export const AboutTitle = styled.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 272px;

    font-size: 36px;
    line-height: 36px; 
  }

  @media (min-width: 1440px) {
    width: 365px;

    font-size: 48px;
    line-height: 48px; 
  }
`;

export const AboutText = styled.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    /* 342px + 11px */
    width: 353px;
    margin-top: 0;
    padding-left: 11px;

    border-left: 1px solid #97d28b;
  }

  @media (min-width: 1440px) {
    width: 620px;
    padding-left: 161px;
  }
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

export const ValueSubtitleSvgWrap = styled.div`
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

export const ValueItemSubtitle = styled.h3`
  display: flex;
  flex-direction: column;

  color: #173d33;
  font-family: "Oswald";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
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
