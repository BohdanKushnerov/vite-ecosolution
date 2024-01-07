import { FC } from "react";

import { IButtonCloseMenuProps } from "interfaces/IButtonCloseMenuProps";
import {
  ButtonClose,
  ButtonCloseContentWrap,
  ButtonCloseText,
} from "./ButtonCloseMenu.styled";
import sprite from "assets/sprite.svg";

const ButtonCloseMenu: FC<IButtonCloseMenuProps> = ({ handleToggleModal }) => {
  return (
    <ButtonClose onClick={handleToggleModal}>
      <ButtonCloseContentWrap>
        <svg width={20} height={20}>
          <use href={sprite + "#icon-close-menu"} />
        </svg>
        <ButtonCloseText>close</ButtonCloseText>
      </ButtonCloseContentWrap>
    </ButtonClose>
  );
};

export default ButtonCloseMenu;
