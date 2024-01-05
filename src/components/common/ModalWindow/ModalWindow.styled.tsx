import styled from "styled-components";

export const ModalWindowWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;
