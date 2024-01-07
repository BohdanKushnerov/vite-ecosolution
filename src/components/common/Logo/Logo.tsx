import { FC } from "react";

import { ILogoProps } from "interfaces/ILogoProps";
import {
  LogoEcosolution,
  LogoGreen,
  LogoGreenergy,
  LogoWrap,
} from "./Logo.styled";
import sprite from "assets/sprite.svg";

const Logo: FC<ILogoProps> = ({ $scrolled }) => {
  return (
    <LogoWrap href="/" target="blank" $scrolled={$scrolled ?? null}>
      <svg width={31} height={18}>
        <use href={sprite + "#icon-logo"} />
      </svg>
      <LogoEcosolution>ecosolution</LogoEcosolution>
      <LogoGreenergy>
        <LogoGreen>green</LogoGreen>ergy for life
      </LogoGreenergy>
    </LogoWrap>
  );
};

export default Logo;
