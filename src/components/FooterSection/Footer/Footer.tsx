import { FC } from "react";

import Logo from "common/Logo/Logo";
import SocialIcons from "common/SocialIcons/SocialIcons";
import {
  Address,
  AddressCopywrigthingWrap,
  ButtonUp,
  IconsWrap,
  LogoIconsButtonWrap,
  FooterSection,
} from "./Footer.styled";
import sprite from "assets/sprite.svg";
import scrollToSection from "utils/scrollToSection";
import SECTION_NAMES from "constants/sectionNames";

const Footer: FC = () => {
  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.MAIN);
  };

  return (
    <FooterSection>
      <LogoIconsButtonWrap>
        <Logo />
        <IconsWrap>
          <SocialIcons colorplan="primary" space={8} />
        </IconsWrap>
        <ButtonUp onClick={handleClickFollowTo}>
          <svg width={16} height={16}>
            <use href={sprite + "#icon-arrow-right"} />
          </svg>
        </ButtonUp>
      </LogoIconsButtonWrap>

      <AddressCopywrigthingWrap>
        <Address>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
        </Address>
        <p>ecosolution © 2023</p>
      </AddressCopywrigthingWrap>
    </FooterSection>
  );
};

export default Footer;
