import { FC } from "react";

import { IPrimaryButtonProps } from "interfaces/IPrimaryButtonProps";
import { Button } from "./PrimaryButton.styled";
import sprite from "assets/sprite.svg";

const PrimaryButton: FC<IPrimaryButtonProps> = ({ textContent, followTo }) => {
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
