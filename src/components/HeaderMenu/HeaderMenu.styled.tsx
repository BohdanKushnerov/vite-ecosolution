import styled from "styled-components";

export const HeaderMenuButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 39px;
  width: 40px;

  border-radius: 500px;
  background: #dcefd8;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accentColor};
  }
`;
