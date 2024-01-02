import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1440px) {
    /* width: 1242px; */
    width: 1440px;
    padding: 0 100px;
  }
`;
