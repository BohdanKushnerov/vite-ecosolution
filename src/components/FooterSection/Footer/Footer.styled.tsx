import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 320px;
  flex-shrink: 0;
  margin-top: 36px;
  padding: 24px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    width: 708px;
    margin-top: 100px;
    padding: 44px 0 40px;
  }

  @media (min-width: 1440px) {
    width: 1240px;
    margin-top: 120px;
  }
`;

export const LogoIconsButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const IconsWrap = styled.div`
  @media (max-width: 767px) {
    margin: 24px auto 0;
    order: 1;
  }

  @media (min-width: 768px) {
    margin-left: 97px;
  }

  @media (min-width: 1440px) {
    margin-left: 512px;
  }
`;

export const ButtonUp = styled.button`
  display: inline-flex;
  padding: 8px;
  margin-left: 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: rotate(-90deg);
  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: #97d28b;
  border: none;
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

  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export const AddressCopywrigthingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    flex-direction: row;

    & > p {
      margin-left: auto;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 73px;
  }

  @media (min-width: 1440px) {
    gap: 487px;
  }
`;
