import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 767px) {
    min-width: 360px;
    max-width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;
