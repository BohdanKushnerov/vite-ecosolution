import styled from "styled-components";

export const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 11px;
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 0;
  background: #f3f5fa;

  @media (max-width: 767px) {
    min-width: 360px;
    max-width: 480px;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 709px;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    width: 1240px;
    padding-top: 24px;
  }
`;

export const HeaderMenuAndButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`;
