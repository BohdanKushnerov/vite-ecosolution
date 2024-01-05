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
      <SocialIcon width={24} height={24} $colorplan={colorplan}>
        <use href={sprite + "#icon-facebook"} />
      </SocialIcon>
      <SocialIcon width={24} height={24} $colorplan={colorplan}>
        <use href={sprite + "#icon-instagram"} />
      </SocialIcon>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
