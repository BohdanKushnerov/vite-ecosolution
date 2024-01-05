import { ReactNode } from "react";

import styled, { IStyledComponent } from "styled-components";

interface ISocialIconProps {
  width: number | string;
  height: number | string;
  $colorplan: string;
  children: ReactNode;
}

interface ISocialIconsWrapProps {
  $space: string | number;
  children: ReactNode;
}

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
  stroke: ${({ $colorplan }) =>
    $colorplan === "primary" ? "#173d33" : "#ffffff"};
  fill: ${({ $colorplan }) =>
    $colorplan === "primary" ? "#173d33" : "#ffffff"};

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;
