import { FC, useState } from "react";

import PrimaryButton from "common/Buttons/PrimaryButton/PrimaryButton";
import scrollToSection from "utils/scrollToSection";
import SECTION_NAMES from "constants/sectionNames";
import questions from "constants/questions";
import {
  AllQuestionsWrap,
  IconButton,
  NotFoundQuestion,
  NotFoundQuestionButtonWrap,
  OneQuestionWrap,
  QuestionAnswer,
  QuestionSectionTitle,
  QuestionSectionTitleNotFoundWrap,
  QuestionTitle,
  Section,
} from "./Questions.styled";
import sprite from "assets/sprite.svg";

const Questions: FC = () => {
  const [currentAnswer, setCurrentAnswer] = useState(1);

  const handleClickAnswer = (id: number) => {
    setCurrentAnswer(id);
  };

  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.CONTACT);
  };

  return (
    <Section id={SECTION_NAMES.QUESTIONS}>
      <QuestionSectionTitleNotFoundWrap>
        <QuestionSectionTitle>Frequently Asked Questions</QuestionSectionTitle>

        <NotFoundQuestionButtonWrap id="not-mobile">
          <NotFoundQuestion>
            Didn't find the answer to your question?
          </NotFoundQuestion>
          <PrimaryButton
            textContent={"Contact Us"}
            followTo={handleClickFollowTo}
          />
        </NotFoundQuestionButtonWrap>
      </QuestionSectionTitleNotFoundWrap>

      <AllQuestionsWrap>
        {questions.map((question) => (
          <OneQuestionWrap key={question.id}>
            <IconButton onClick={() => handleClickAnswer(question.id)}>
              {currentAnswer === question.id ? (
                <svg width={16} height={16}>
                  <use href={sprite + "#icon-minus"} />
                </svg>
              ) : (
                <svg width={16} height={16}>
                  <use href={sprite + "#icon-add"} />
                </svg>
              )}
            </IconButton>
            <div>
              <QuestionTitle>{question.title}</QuestionTitle>
              {currentAnswer === question.id && (
                <QuestionAnswer>{question.answer}</QuestionAnswer>
              )}
            </div>
          </OneQuestionWrap>
        ))}
      </AllQuestionsWrap>

      <NotFoundQuestionButtonWrap id="mobile">
        <NotFoundQuestion>
          Didn't find the answer to your question?
        </NotFoundQuestion>
        <PrimaryButton
          textContent={"Contact Us"}
          followTo={handleClickFollowTo}
        />
      </NotFoundQuestionButtonWrap>
    </Section>
  );
};

export default Questions;
