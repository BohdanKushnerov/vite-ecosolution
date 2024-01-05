import { FC } from "react";

import ModalWindow from "common/ModalWindow/ModalWindow";
import ButtonCloseMenu from "components/HeaderSection/ButtonCloseMenu/ButtonCloseMenu";
import ButtonMenuFollowSection from "components/HeaderSection/ButtonMenuFollowSection/ButtonMenuFollowSection";
import SocialIcons from "components/common/SocialIcons/SocialIcons";
import buttonsFollowData from "constants/buttonsFollowData";
import {
  ButtonMenuFollowSectionWrap,
  HeaderMenuModalWrap,
  ModalSocialIconsWrap,
} from "./HeaderMenuModal.styled";

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
            <ButtonMenuFollowSection
              key={button.id}
              label={button.label}
              sectionName={button.sectionName}
              handleToggleModal={handleToggleModal}
            />
          ))}
        </ButtonMenuFollowSectionWrap>
        {/* icons */}
        <ModalSocialIconsWrap>
          <SocialIcons colorplan="secondary" space={8} />
        </ModalSocialIconsWrap>
      </HeaderMenuModalWrap>
    </ModalWindow>
  );
};

export default HeaderMenuModal;
