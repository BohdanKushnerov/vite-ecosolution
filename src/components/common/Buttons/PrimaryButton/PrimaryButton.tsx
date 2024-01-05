import { FC } from "react";

import { Button } from "./PrimaryButton.styled";
import sprite from "assets/sprite.svg";

interface IPrimaryButton {
  textContent: string;
  followTo: () => void;
}

const PrimaryButton: FC<IPrimaryButton> = ({ textContent, followTo }) => {
  return (
    <Button onClick={followTo}>
      {textContent}
      <svg width={14} height={14}>
        <use href={sprite + "#icon-group-31"} />
      </svg>
    </Button>
  );
};

export default PrimaryButton;
