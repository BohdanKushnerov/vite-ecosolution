import { FC } from "react";

import scrollToSection from "utils/scrollToSection";
import { ButtonFollowSection } from "./ButtonMenuFollowSection.styled";
import sprite from "assets/sprite.svg";

interface IButtonMenuFollowSection {
  label: string;
  sectionName: string;
  handleToggleModal: () => void;
}

const ButtonMenuFollowSection: FC<IButtonMenuFollowSection> = ({
  label,
  sectionName,
  handleToggleModal,
}) => {
  const handleClickScrollToSection = () => {
    scrollToSection(sectionName);
    handleToggleModal();
  };

  return (
    <ButtonFollowSection onClick={handleClickScrollToSection}>
      {label}
      <svg width={16} height={16}>
        <use xlinkHref={sprite + "#icon-arrow-right-up"} />
      </svg>
    </ButtonFollowSection>
  );
};

export default ButtonMenuFollowSection;
