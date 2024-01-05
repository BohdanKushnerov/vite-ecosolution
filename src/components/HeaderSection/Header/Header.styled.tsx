import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  /* position: relative; */
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 11px;
  width: 320px;
  padding-top: 36px;
  background: #f3f5fa;

  @media (min-width: 768px) {
    width: 709px;
  }

  @media (min-width: 1440px) {
    width: 1242px;
    padding-top: 24px;
  }
`;

export const HeaderMenuAndButtonWrap = styled.div`
  /* position: relative; */
  
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`;
