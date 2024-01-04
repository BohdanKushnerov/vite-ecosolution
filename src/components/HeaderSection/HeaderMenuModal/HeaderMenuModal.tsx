import { FC } from "react";

import ModalWindow from "components/common/ModalWindow/ModalWindow";
import ButtonCloseMenu from "components/HeaderSection/ButtonCloseMenu/ButtonCloseMenu";
import ButtonMenuFollowSection from "components/HeaderSection/ButtonMenuFollowSection/ButtonMenuFollowSection";
import { ButtonMenuFollowSectionWrap, HeaderMenuModalWrap } from "./HeaderMenuModal.styled";
import SocialIcons from "components/common/SocialIcons/SocialIcons";

const buttonsFollowData = [
  { id: 1, label: "Main" },
  { id: 2, label: "About" },
  { id: 3, label: "Cases" },
  { id: 4, label: "FAQ" },
  { id: 5, label: "Contact" },
];

interface IHeaderMenuModal {
  handleToggleModal: () => void;
}

const HeaderMenuModal: FC<IHeaderMenuModal> = ({ handleToggleModal }) => {
  return (
    <ModalWindow handleToggleModal={handleToggleModal}>
      <HeaderMenuModalWrap>
        <ButtonCloseMenu handleToggleModal={handleToggleModal} />
        <ButtonMenuFollowSectionWrap>
          {buttonsFollowData.map((button) => (
            <ButtonMenuFollowSection key={button.id} label={button.label} />
          ))}
        </ButtonMenuFollowSectionWrap>
        <SocialIcons />
      </HeaderMenuModalWrap>
    </ModalWindow>
  );
};

export default HeaderMenuModal;
