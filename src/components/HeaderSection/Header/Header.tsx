import { FC } from "react";

import HeaderMenu from "components/HeaderSection/HeaderMenu/HeaderMenu";
import Logo from "components/common/Logo/Logo";
import PrimaryButton from "components/common/Buttons/PrimaryButton/PrimaryButton";
import useResizeWindow from "hooks/useResizeWindow";
import { HeaderMenuAndButtonWrap, HeaderWrap } from "./Header.styled";

const Header: FC = () => {
  const screen = useResizeWindow(768, 1440);

  return (
    <HeaderWrap>
      <Logo />
      <HeaderMenuAndButtonWrap>
        <HeaderMenu />
        {screen !== "mobile" && <PrimaryButton textContent="Get in touch" />}
      </HeaderMenuAndButtonWrap>
    </HeaderWrap>
  );
};

export default Header;
