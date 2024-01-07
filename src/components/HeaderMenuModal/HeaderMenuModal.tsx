import { FC } from "react";

import ModalWindow from "common/ModalWindow/ModalWindow";
import ButtonCloseMenu from "common/Buttons/ButtonCloseMenu/ButtonCloseMenu";
import ButtonMenuFollowSection from "common/Buttons/ButtonMenuFollowSection/ButtonMenuFollowSection";
import SocialIcons from "common/SocialIcons/SocialIcons";
import buttonsFollowData from "constants/buttonsFollowData";
import { IHeaderMenuModalProps } from "interfaces/IHeaderMenuModalProps";
import {
  ButtonMenuFollowSectionWrap,
  HeaderMenuModalWrap,
  ModalSocialIconsWrap,
} from "./HeaderMenuModal.styled";

const HeaderMenuModal: FC<IHeaderMenuModalProps> = ({ handleToggleModal }) => {
  return (
    <ModalWindow handleToggleModal={handleToggleModal}>
      <HeaderMenuModalWrap>
        <ButtonCloseMenu handleToggleModal={handleToggleModal} />
        <ButtonMenuFollowSectionWrap>
          {buttonsFollowData.map((button) => (
            <ButtonMenuFollowSection
              key={button.id}
              label={button.label}
              sectionName={button.sectionName}
              handleToggleModal={handleToggleModal}
            />
          ))}
        </ButtonMenuFollowSectionWrap>
        <ModalSocialIconsWrap>
          <SocialIcons colorPlan="secondary" space={8} />
        </ModalSocialIconsWrap>
      </HeaderMenuModalWrap>
    </ModalWindow>
  );
};

export default HeaderMenuModal;
