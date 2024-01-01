import styled from "styled-components";

export const HeaderMenuModalWrap = styled.div`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-shrink: 0;
  width: 320px;
  height: calc(100% - 36px);
  padding: 24px;

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  @media (min-width: 768px) {
    top: 42px;
    right: 30px;
    height: calc(100% - 42px);
  }

  @media (min-width: 1440px) {
    top: 30px;
    right: 100px;
    height: calc(100% - 30px);
  }
`;

export const ButtonMenuFollowSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;
