import { FC } from "react";
import { Button, IconWrap } from "./SecondaryButton.styled";
import sprite from "assets/sprite.svg";

interface ISecondaryButton {
  type: "button" | "submit";
  textContent: string;
  followTo?: () => void;
}

const SecondaryButton: FC<ISecondaryButton> = ({ type, textContent, followTo }) => {
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
