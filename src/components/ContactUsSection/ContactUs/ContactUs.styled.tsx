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

export const ContactUsTitle = styled.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }
`;

export const AddressFormWrap = styled.div`
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    gap: 122px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    gap: 178px;
    margin-top: 120px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 244px;

  @media (min-width: 1440px) {
    width: 469px;
  }
`;

export const PhonesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactSubtitle = styled.h3`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ConnectionLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  color: #173d33;
  text-align: justify;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.9px;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  p {
    width: 212px;

    @media (min-width: 1440px) {
      width: 434px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  &:hover {
    svg use {
      stroke: #97d28b;
    }
    color: #97d28b;
  }
`;
