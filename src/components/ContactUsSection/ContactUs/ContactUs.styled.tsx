import styled from "styled-components";

export const Section = styled.section`
  margin-top: 26px;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const ContactUsTitle = styled.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
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

export const Connection = styled.p`
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
  letter-spacing: -0.8px;
`;

export const ConnectionLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #97d28b;
  }
`;
