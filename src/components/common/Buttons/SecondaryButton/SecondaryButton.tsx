import { FC } from "react";

import { ISecondaryButtonProps } from "interfaces/ISecondaryButtonProps";
import { Button, IconWrap } from "./SecondaryButton.styled";
import sprite from "assets/sprite.svg";

const SecondaryButton: FC<ISecondaryButtonProps> = ({
  type,
  textContent,
  followTo,
}) => {
  return (
    <Button type={type} onClick={followTo}>
      {textContent}
      <IconWrap>
        <svg width={14} height={14}>
          <use href={sprite + "#icon-arrow-right"} />
        </svg>
      </IconWrap>
    </Button>
  );
};

export default SecondaryButton;
