import { FC } from "react";

import { SocialIcon, SocialIconsWrap } from "./SocialIcons.styled";
import sprite from "assets/sprite.svg";

interface ISocialIcons {
  colorplan: "primary" | "secondary";
  space: string | number;
}

const SocialIcons: FC<ISocialIcons> = ({ colorplan, space }) => {
  return (
    <SocialIconsWrap $space={space}>
      <a href="https://www.facebook.com/" target="blank">
        <SocialIcon width={24} height={24} $colorplan={colorplan}>
          <use href={sprite + "#icon-facebook"} />
        </SocialIcon>
      </a>
      <a href="https://www.instagram.com/" target="blank">
        <SocialIcon width={24} height={24} $colorplan={colorplan}>
          <use href={sprite + "#icon-instagram"} />
        </SocialIcon>
      </a>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
