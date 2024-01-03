import { FC } from "react";

import { SocialIcon, SocialIconsWrap } from "./SocialIcons.styled";
import sprite from "assets/sprite.svg";

const SocialIcons: FC = () => {
  return (
    <SocialIconsWrap>
      <SocialIcon width={24} height={24}>
        <use href={sprite + "#icon-facebook"} />
      </SocialIcon>
      <SocialIcon width={24} height={24}>
        <use href={sprite + "#icon-instagram"} />
      </SocialIcon>
    </SocialIconsWrap>
  );
};

export default SocialIcons;
