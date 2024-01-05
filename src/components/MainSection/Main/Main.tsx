import { FC } from "react";

import SecondaryButton from "common/Buttons/SecondaryButton/SecondaryButton";
import {
  MainParagraph,
  SectionAndBeforeLine,
  MainTitle,
  MainParagraphButtonWrap,
  MainContentWrap,
} from "./Main.styled";

const Main: FC = () => {
  return (
    <SectionAndBeforeLine>
      <MainContentWrap>
        <MainTitle>renewable energy for any task</MainTitle>
        <MainParagraphButtonWrap>
          <MainParagraph>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainParagraph>
          <SecondaryButton type="button" textContent="Learn More" />
        </MainParagraphButtonWrap>
      </MainContentWrap>
    </SectionAndBeforeLine>
  );
};

export default Main;
