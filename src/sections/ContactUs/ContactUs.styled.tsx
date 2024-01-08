import styled from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";

export const Section = styled.section`
  margin-top: 36px;

  @media ${selectTablet} {
    margin-top: 100px;
  }

  @media ${selectDesktop} {
    margin-top: 120px;
  }
`;

export const ContactUsTitle = styled.h2`
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;

  @media ${selectTablet} {
    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const AddressFormWrap = styled.div`
  margin-top: 24px;

  @media ${selectTablet} {
    display: flex;
    gap: 122px;
    margin-top: 40px;
  }

  @media ${selectDesktop} {
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

  @media ${selectDesktop} {
    width: 469px;
  }
`;

export const PhonesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactSubtitle = styled.p`
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

  text-align: justify;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.9px;
  cursor: pointer;

  svg use {
    stroke: ${({ theme }) => theme.colors.mainTextColor};
    fill: transparent;
  }

  p {
    width: 212px;

    @media ${selectDesktop} {
      width: 434px;
    }
  }

  @media ${selectDesktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  &:hover {
    svg use {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
