import { FC, useState } from "react";

import HeaderMenuModal from "components/HeaderMenuModal/HeaderMenuModal";
import { HeaderMenuButton } from "./HeaderMenu.styled";
import sprite from "assets/sprite.svg";

const HeaderMenu: FC = () => {
  const [isOpenHeaderMenuModal, setIsOpenHeaderMenuModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenHeaderMenuModal((prev) => !prev);
  };

  return (
    <div>
      <HeaderMenuButton onClick={handleToggleModal}>
        <svg width={16} height={16}>
          <use href={sprite + "#icon-menu"} stroke={"#292D32"} />
        </svg>
      </HeaderMenuButton>
      {isOpenHeaderMenuModal && (
        <HeaderMenuModal handleToggleModal={handleToggleModal} />
      )}
    </div>
  );
};

export default HeaderMenu;
