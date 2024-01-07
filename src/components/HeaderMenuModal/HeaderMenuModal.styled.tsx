import styled from "styled-components";

export const HeaderMenuModalWrap = styled.div`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-shrink: 0;
  width: 320px;
  height: calc(100% - 72px);
  padding: 24px;

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  @media (min-width: 768px) {
    top: 42px;
    right: 30px;
    height: calc(100% - 84px);
  }

  @media (min-width: 1280px) {
    top: 30px;
    right: 100px;
    height: calc(100% - 60px);
  }
`;

export const ButtonMenuFollowSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

export const ModalSocialIconsWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
