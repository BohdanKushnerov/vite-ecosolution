import { FC, MouseEvent, ReactNode } from "react";
import { createPortal } from "react-dom";

import useCloseModal from "@hooks/useCloseModal";
import { ModalWindowWrap } from "./ModalWindow.styled";

const modalRoot = document.querySelector("#modal-root")!;

interface IModalWindowProps {
  handleToggleModal: () => void;
  children: ReactNode;
}

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

  return createPortal(
    <ModalWindowWrap
      onClick={handleBackdropClick}
      className={`absolute top-0 left-0 z-10 w-screen h-screen bg-transparent`}
    >
      {children}
    </ModalWindowWrap>,
    modalRoot
  );
};

export default ModalWindow;
