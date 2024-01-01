import styled from "styled-components";

export const SocialIconsWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const SocialIcon = styled.svg`
  cursor: pointer;
  fill: #ffffff;
  stroke: #ffffff;

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;
