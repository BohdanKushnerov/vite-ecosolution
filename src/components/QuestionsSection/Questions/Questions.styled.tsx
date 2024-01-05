import styled from "styled-components";

export const Section = styled.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    justify-content: start;
    gap: 185px;
    margin-top: 120px;
  }
`;
export const QuestionSectionTitleNotFoundWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const QuestionSectionTitle = styled.h2`
  width: 320px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 342px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1440px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px; 
  }
`;

export const AllQuestionsWrap = styled.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  & > :last-child {
    padding-bottom: 0;
  }
`;

export const OneQuestionWrap = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
    gap: 24px;
  }
`;

export const IconButton = styled.div`
  padding-top: 21px;

  svg {
    cursor: pointer;
  }

  svg use {
    stroke: #97d28b;
  }

  @media (min-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const QuestionTitle = styled.h3`
  width: 296px;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    width: 298px;
  }

  @media (min-width: 1440px) {
    width: 544px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const QuestionAnswer = styled.p`
  width: 296px;
  margin-top: 16px;

  color: #173d33;
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 768px) {
    width: 298px;
  }

  @media (min-width: 1440px) {
    width: 544px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const NotFoundQuestionButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;

  @media (min-width: 768px) {
    display: ${(props) => (props.id === "not-mobile" ? "flex" : "none")};
    margin-top: 0px;
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.id === "mobile" ? "flex" : "none")};
  }
`;

export const NotFoundQuestion = styled.p`
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
