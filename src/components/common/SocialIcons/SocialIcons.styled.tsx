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
  stroke: ${({ theme, $colorPlan }) =>
    $colorPlan === "primary"
      ? theme.colors.mainTextColor
      : theme.colors.whiteTextColor};
  fill: ${({ theme, $colorPlan }) =>
    $colorPlan === "primary"
      ? theme.colors.mainTextColor
      : theme.colors.whiteTextColor};

  &:hover {
    fill: ${({ theme }) => theme.colors.accentColor};
    stroke: ${({ theme }) => theme.colors.accentColor};
  }
`;
