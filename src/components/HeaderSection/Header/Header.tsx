import { FC } from "react";

import Logo from "common/Logo/Logo";
import PrimaryButton from "common/Buttons/PrimaryButton/PrimaryButton";
import HeaderMenu from "components/HeaderSection/HeaderMenu/HeaderMenu";
import useResizeWindow from "hooks/useResizeWindow";
import { HeaderMenuAndButtonWrap, HeaderWrap } from "./Header.styled";
import useScroll from "hooks/useScroll";
import SECTION_NAMES from "constants/sectionNames";
import scrollToSection from "utils/scrollToSection";

const Header: FC = () => {
  const screen = useResizeWindow(768, 1440);
  const scrolled = useScroll();

  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.CONTACT);
  };

  return (
    <HeaderWrap>
      <Logo $scrolled={scrolled} />
      <HeaderMenuAndButtonWrap>
        <HeaderMenu />
        {screen !== "mobile" && (
          <PrimaryButton
            textContent="Get in touch"
            followTo={handleClickFollowTo}
          />
        )}
      </HeaderMenuAndButtonWrap>
    </HeaderWrap>
  );
};

export default Header;
