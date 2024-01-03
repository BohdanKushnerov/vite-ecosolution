import { FC } from "react";

import {
  ButtonFollowSection,
} from "./ButtonMenuFollowSection.styled";
import sprite from "assets/sprite.svg";

interface IButtonMenuFollowSection {
  label: string;
}

const ButtonMenuFollowSection: FC<IButtonMenuFollowSection> = ({ label }) => {
  return (
    <ButtonFollowSection>
      {label}
      <svg width={16} height={16}>
        <use xlinkHref={sprite + "#icon-arrow-right-up"} />
      </svg>
    </ButtonFollowSection>
  );
};

export default ButtonMenuFollowSection;
