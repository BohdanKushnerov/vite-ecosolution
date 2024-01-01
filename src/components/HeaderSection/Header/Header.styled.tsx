import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  gap: 11px;
  width: 100%;
`;

export const HeaderMenuAndButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`;
