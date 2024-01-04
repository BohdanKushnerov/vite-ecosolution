import { FC } from "react";

import { SocialIcon, SocialIconsWrap } from "./SocialIconsContact.styled";
import sprite from "assets/sprite.svg";

const SocialIconsContact: FC = () => {
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

export default SocialIconsContact;
