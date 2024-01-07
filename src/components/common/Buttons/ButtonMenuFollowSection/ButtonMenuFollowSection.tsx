import { FC } from "react";

import scrollToSection from "utils/scrollToSection";
import { IButtonMenuFollowSectionProps } from "interfaces/IButtonMenuFollowSectionProps";
import { ButtonFollowSection } from "./ButtonMenuFollowSection.styled";
import sprite from "assets/sprite.svg";

const ButtonMenuFollowSection: FC<IButtonMenuFollowSectionProps> = ({
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
