import { FC } from "react";
import sprite from "@assets/sprite.svg";
import { Button } from "./PrimaryButton.styled";

const PrimaryButton: FC = () => {
  return (
      <Button>
        Get in touch
        <svg width={14} height={14}>
          <use href={sprite + "#icon-group-31"} />
        </svg>
      </Button>
  );
};

export default PrimaryButton;
