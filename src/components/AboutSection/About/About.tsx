import { FC } from "react";

import SECTION_NAMES from "constants/sectionNames";
import {
  AboutText,
  AboutTitle,
  Section,
  TitleTextWrap,
  ValueImage,
  ValueItem,
  ValueItemText,
  ValueItemSubtitle,
  ValueList,
  ValueSubtitleSvgWrap,
} from "./About.styled";
import sprite from "assets/sprite.svg";
import WindFarmsPicture from "../Pictures/WindFarmsPicture/WindFarmsPicture";
import SolarPanelsPicture from "../Pictures/SolarPanelsPicture/SolarPanelsPicture";

const About: FC = () => {
  return (
    <Section id={SECTION_NAMES.ABOUT}>
      <TitleTextWrap>
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </AboutText>
      </TitleTextWrap>

      <ValueList>
        <ValueItem>
          <ValueSubtitleSvgWrap>
            <svg width={16} height={16}>
              <use
                href={sprite + "#icon-maximize-circle"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemSubtitle>Openness</ValueItemSubtitle>
          </ValueSubtitleSvgWrap>
          <ValueItemText>
            to the world, people, new ideas and projects
          </ValueItemText>
        </ValueItem>
        <ValueItem>
          <ValueSubtitleSvgWrap>
            <svg width={16} height={16}>
              <use
                href={sprite + "#icon-global-edit"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemSubtitle>Responsibility</ValueItemSubtitle>
          </ValueSubtitleSvgWrap>
          <ValueItemText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ValueItemText>
        </ValueItem>
        {/* WindFarmsPicture */}
        <ValueImage>
          <WindFarmsPicture />;
        </ValueImage>
        {/* SolarPanelsPicture */}
        <ValueImage>
          <SolarPanelsPicture />
        </ValueImage>
        <ValueItem>
          <ValueSubtitleSvgWrap>
            <svg width={16} height={16}>
              <use
                href={sprite + "#icon-cpu-charge"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemSubtitle>Innovation</ValueItemSubtitle>
          </ValueSubtitleSvgWrap>
          <ValueItemText>
            we use the latest technology to implement non-standard solutions
          </ValueItemText>
        </ValueItem>
        <ValueItem>
          <ValueSubtitleSvgWrap>
            <svg width={16} height={16}>
              <use
                href={sprite + "#icon-ranking"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemSubtitle>Quality</ValueItemSubtitle>
          </ValueSubtitleSvgWrap>
          <ValueItemText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ValueItemText>
        </ValueItem>
      </ValueList>
    </Section>
  );
};

export default About;
