import { FC } from "react";

import HeaderMenu from "components/HeaderMenu/HeaderMenu";
import Logo from "common/Logo/Logo";
import PrimaryButton from "common/Buttons/PrimaryButton/PrimaryButton";
import useResizeWindow from "hooks/useResizeWindow";
import useScroll from "hooks/useScroll";
import scrollToSection from "utils/scrollToSection";
import SECTION_NAMES from "constants/sectionNames";
import { HeaderMenuAndButtonWrap, AppHeader } from "./Header.styled";

const Header: FC = () => {
  const screen = useResizeWindow(768, 1440);
  const scrolled = useScroll();

  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.CONTACT);
  };

  return (
    <AppHeader>
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
    </AppHeader>
  );
};

export default Header;
