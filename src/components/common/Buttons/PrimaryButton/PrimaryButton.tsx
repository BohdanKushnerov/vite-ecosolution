import { FC } from "react";

import { Button } from "./PrimaryButton.styled";
import sprite from "@assets/sprite.svg";

interface IPrimaryButton {
  textContent: string;
}

const PrimaryButton: FC<IPrimaryButton> = ({ textContent }) => {
  return (
    <Button>
      {textContent}
      <svg width={14} height={14}>
        <use href={sprite + "#icon-group-31"} />
      </svg>
    </Button>
  );
};

export default PrimaryButton;
