import styled from "styled-components";

import { selectTablet } from "utils/mediaQueries";

export const Button = styled.button`
  display: flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  margin: 0 auto;

  border-radius: 500px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    background: #173d33;
    border-color: #173d33;
  }

  @media ${selectTablet} {
    margin: 0;
  }
`;

export const IconWrap = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: ${({ theme }) => theme.colors.accentColor};
`;
