import styled from "styled-components";

import {
  selectBeforeTablet,
  selectDesktop,
  selectTablet,
} from "utils/mediaQueries";

export const Section = styled.section`
  margin-top: 36px;

  @media ${selectTablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 100px;
  }

  @media ${selectDesktop} {
    justify-content: start;
    gap: 185px;
    margin-top: 120px;
  }
`;
export const QuestionSectionTitleNotFoundWrap = styled.div`
  @media ${selectTablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const QuestionSectionTitle = styled.h2`
  width: 100%;

  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 342px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const AllQuestionsWrap = styled.div`
  margin-top: 16px;

  @media ${selectTablet} {
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

  border-top: 1px solid ${({ theme }) => theme.colors.accentColor};

  @media ${selectTablet} {
    gap: 16px;
  }

  @media ${selectDesktop} {
    gap: 24px;
  }
`;

export const IconButton = styled.div`
  padding-top: 21px;

  svg {
    cursor: pointer;
  }

  svg use {
    stroke: ${({ theme }) => theme.colors.accentColor};
  }

  @media ${selectTablet} {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const QuestionSubTitle = styled.h3`
  width: 100%;

  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${selectTablet} {
    width: 298px;
  }

  @media ${selectDesktop} {
    width: 544px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const QuestionAnswer = styled.p`
  width: 100%;
  margin-top: 16px;

  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${selectTablet} {
    width: 298px;
  }

  @media ${selectDesktop} {
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

  @media ${selectBeforeTablet} {
    display: ${(props) => (props.id === "mobile" ? "flex" : "none")};
  }

  @media ${selectTablet} {
    display: ${(props) => (props.id === "not-mobile" ? "flex" : "none")};
    margin-top: 0px;
  }
`;

export const NotFoundQuestion = styled.p`
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${selectDesktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
