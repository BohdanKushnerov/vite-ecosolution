import styled, { IStyledComponent } from "styled-components";

import { ISocialIconProps } from "interfaces/styled/ISocialIconProps";
import { ISocialIconsWrapProps } from "interfaces/styled/ISocialIconsWrapProps";

export const SocialIconsWrap: IStyledComponent<
  "web",
  ISocialIconsWrapProps
> = styled.div<ISocialIconsWrapProps>`
  display: flex;
  gap: ${({ $space }) => `${$space}px`};
`;

export const SocialIcon: IStyledComponent<
  "web",
  ISocialIconProps
> = styled.svg<ISocialIconProps>`
  cursor: pointer;
  stroke: ${({ $colorPlan }) =>
    $colorPlan === "primary" ? "#173d33" : "#ffffff"};
  fill: ${({ $colorPlan }) =>
    $colorPlan === "primary" ? "#173d33" : "#ffffff"};

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;
