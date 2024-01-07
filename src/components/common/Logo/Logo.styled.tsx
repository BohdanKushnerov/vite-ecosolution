import styled, { IStyledComponent } from "styled-components";

import { ILogoWrapProps } from "interfaces/styled/ILogoWrapProps";

export const LogoWrap: IStyledComponent<
  "web",
  ILogoWrapProps
> = styled.a<ILogoWrapProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  & > p {
    color: ${({ $scrolled }) => $scrolled && "#97d28b"};
  }

  &:hover {
    & > p {
      color: #97d28b;
    }
  }
`;

export const LogoEcosolution = styled.p`
  color: #173d33;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
`;

export const LogoGreenergy = styled.p`
  width: 60px;

  color: #97d28b;
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

export const LogoGreen = styled.span`
  color: "#173d33";
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
`;
