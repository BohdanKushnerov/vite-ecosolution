import { FC } from "react";

import sprite from "assets/sprite.svg";
import {
  LogoEcosolution,
  LogoGreen,
  LogoGreenergy,
  LogoWrap,
} from "./Logo.styled";

interface ILogo {
  $scrolled?: boolean;
}

const Logo: FC<ILogo> = ({ $scrolled }) => {
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
