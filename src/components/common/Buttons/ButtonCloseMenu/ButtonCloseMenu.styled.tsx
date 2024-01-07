import styled from "styled-components";

export const ButtonClose = styled.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  gap: 8px;

  background: transparent;
  border: none;

  cursor: pointer;
  overflow: hidden;

  svg use {
    stroke: #fff;
  }

  span {
    color: #fff;
  }

  &:hover {
    span {
      color: #97d28b;
    }

    svg use {
      stroke: #97d28b;
    }
  }

  &::before {
    content: "";

    width: 272px;
    height: 1px;

    flex-shrink: 0;
    background: #fff;
  }
`;

export const ButtonCloseContentWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonCloseText = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
