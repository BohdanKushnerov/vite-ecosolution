import styled from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";

export const FooterSection = styled.footer`
  width: 100%;
  flex-shrink: 0;
  margin-top: 36px;
  padding: 24px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.accentColor};

  @media ${selectTablet} {
    width: 708px;
    margin-top: 100px;
    padding: 44px 0 40px;
  }

  @media ${selectDesktop} {
    width: 1240px;
    margin-top: 120px;
  }
`;

export const LogoIconsButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${selectTablet} {
    flex-wrap: nowrap;
  }
`;

export const IconsWrap = styled.div`
  @media (max-width: 413px) {
    margin: 24px auto 0;
    order: 1;
  }

  @media (min-width: 414px) {
    margin: auto;
  }

  @media ${selectTablet} {
    margin-left: 97px;
  }

  @media ${selectDesktop} {
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
  background: ${({ theme }) => theme.colors.accentColor};
  border: none;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    background: #173d33;

    svg use {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  @media ${selectTablet} {
    margin-left: auto;
  }
`;

export const AddressCopywrigthingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    flex-direction: row;

    & > p {
      margin-left: auto;
    }
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    flex-direction: row;
    gap: 73px;
  }

  @media ${selectDesktop} {
    gap: 487px;
  }
`;
