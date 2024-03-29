import { FC, MouseEvent } from "react";

import useCloseModal from "hooks/useCloseModal";
import { IModalWindowProps } from "interfaces/IModalWindowProps";
import { ModalWindowWrap } from "./ModalWindow.styled";

const ModalWindow: FC<IModalWindowProps> = ({
  handleToggleModal,
  children,
}) => {
  useCloseModal(handleToggleModal);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggleModal();
    }
  };

  return (
    <ModalWindowWrap
      onClick={handleBackdropClick}
      className={`absolute top-0 left-0 z-10 w-screen h-screen bg-transparent`}
    >
      {children}
    </ModalWindowWrap>
  );
};

export default ModalWindow;
