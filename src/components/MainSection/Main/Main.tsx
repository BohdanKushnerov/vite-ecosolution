import { FC } from "react";

import SecondaryButton from "common/Buttons/SecondaryButton/SecondaryButton";
import scrollToSection from "utils/scrollToSection";
import SECTION_NAMES from "constants/sectionNames";
import {
  MainParagraph,
  SectionAndBeforeLine,
  MainTitle,
  MainParagraphButtonWrap,
  MainContentWrap,
} from "./Main.styled";

const Main: FC = () => {
  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.CASES);
  };

  return (
    <SectionAndBeforeLine id={SECTION_NAMES.MAIN}>
      <MainContentWrap>
        <MainTitle>renewable energy for any task</MainTitle>
        <MainParagraphButtonWrap>
          <MainParagraph>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainParagraph>
          <SecondaryButton
            type="button"
            textContent="Learn More"
            followTo={handleClickFollowTo}
          />
        </MainParagraphButtonWrap>
      </MainContentWrap>
    </SectionAndBeforeLine>
  );
};

export default Main;
