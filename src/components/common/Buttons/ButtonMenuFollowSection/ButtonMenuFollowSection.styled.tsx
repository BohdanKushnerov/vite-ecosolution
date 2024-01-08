import styled from "styled-components";

export const ButtonFollowSection = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.whiteTextColor};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  cursor: pointer;

  svg use {
    stroke: ${({ theme }) => theme.colors.whiteTextColor};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};

    svg use {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
