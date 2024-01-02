import styled from "styled-components";

export const EcoInfo = styled.div`
  /* @media (max-width: 767px) {
  } */
  margin-top: 24px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    display: flex;

    margin-top: 16px;
    margin-bottom: 40px;
  }
`;

export const Street = styled.p`
  margin-bottom: 8px;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const Email = styled.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 77px;

    text-align: start;
  }

  @media (min-width: 1440px) {
    margin-left: 492px;
  }
`;

export const Ecosolution = styled.p`
  display: none;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

// export const Picture = styled.picture`

// `;

export const AboutTitle = styled.h2`
  margin-top: 36px;
  margin-bottom: 24px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
`;

export const AboutText = styled.p`
  margin-bottom: 36px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
