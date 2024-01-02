import { FC } from "react";

import HeaderMenu from "@components/HeaderSection/HeaderMenu/HeaderMenu";
import Logo from "@components/common/Logo/Logo";
import HeaderTouchButton from "@components/common/Buttons/PrimaryButton/PrimaryButton";
import { HeaderMenuAndButtonWrap, HeaderWrap } from "./Header.styled";

const Header: FC = () => {
  return (
    <HeaderWrap>
      <Logo />
      <HeaderMenuAndButtonWrap>
        <HeaderMenu />
        <HeaderTouchButton textContent="Get in touch" />
      </HeaderMenuAndButtonWrap>
    </HeaderWrap>
  );
};

export default Header;
