import { FC } from "react";

import SecondaryButton from "common/Buttons/SecondaryButton/SecondaryButton";
import scrollToSection from "utils/scrollToSection";
import SECTION_NAMES from "constants/sectionNames";
import {
  MainParagraph,
  MainTitle,
  MainParagraphButtonWrap,
  MainContentWrap,
  EcoInfo,
  Street,
  Email,
  Ecosolution,
  Section,
  Address,
} from "./Main.styled";
import ImageTurbinaPicture from "../Picture/ImageTurbinaPicture/ImageTurbinaPicture";

const Main: FC = () => {
  const handleClickFollowTo = () => {
    scrollToSection(SECTION_NAMES.CASES);
  };

  return (
    <Section id={SECTION_NAMES.MAIN}>
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
      {/*  */}
      <EcoInfo>
        <Address>
          <Street>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Street>
          <Email>office@ecosolution.com</Email>
        </Address>
        <Ecosolution>ecosolution © 2023</Ecosolution>
      </EcoInfo>
      {/* ImageTurbina */}
      <ImageTurbinaPicture />
    </Section>
  );
};

export default Main;
