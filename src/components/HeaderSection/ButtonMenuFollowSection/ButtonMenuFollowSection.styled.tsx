import styled from "styled-components";

export const ButtonFollowSection = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  background: transparent;
  border: none;
  color: #FFFFFF;
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  cursor: pointer;

  svg use {
    stroke: #FFFFFF;
  }

  &:hover {
    color: #97d28b;

    svg use {
      stroke: #97D28B;
    }
  }
`;

export const ButtonFollowSectionIcon = styled.svg`
  /* use {
    fill: "transparent";
    stroke: "#FFFFFF";
  } */
`;
