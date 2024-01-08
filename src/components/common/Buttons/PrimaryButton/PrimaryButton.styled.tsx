import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 140px;

  border-radius: 500px;
  background: ${({ theme }) => theme.colors.accentColor};
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  cursor: pointer;

  svg use {
    fill: #173d33;
    stroke: #173d33;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    background: #173d33;
    svg use {
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
