import { FC } from "react";

import { ISocialIconsProps } from "interfaces/ISocialIconsProps";
import { SocialIcon, SocialIconsWrap } from "./SocialIcons.styled";
import sprite from "assets/sprite.svg";

const SocialIcons: FC<ISocialIconsProps> = ({ colorPlan, space }) => {
  return (
    <SocialIconsWrap $space={space}>
      <a href="https://www.facebook.com/" target="blank">
        <SocialIcon width={24} height={24} $colorPlan={colorPlan}>
          <use href={sprite + "#icon-facebook"} />
        </SocialIcon>
      </a>
      <a href="https://www.instagram.com/" target="blank">
        <SocialIcon width={24} height={24} $colorPlan={colorPlan}>
          <use href={sprite + "#icon-instagram"} />
        </SocialIcon>
      </a>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
