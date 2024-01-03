import { FC } from "react";
import {
  AboutText,
  AboutTitle,
  EcoInfo,
  Ecosolution,
  Email,
  Street,
  ValueImage,
  ValueItem,
  ValueItemText,
  ValueItemTitle,
  ValueList,
  ValueTitleSvgWrap,
} from "./About.styled";
import sprite from "assets/sprite.svg";

const About: FC = () => {
  return (
    <section>
      <EcoInfo>
        <Street>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Street>
        <Email>office@ecosolution.com</Email>
        <Ecosolution>ecosolution © 2023</Ecosolution>
      </EcoInfo>
      <picture>
        <source
          srcSet="/src/assets/AboutSectionImages/turbine-mob.webp 1x, /src/assets/AboutSectionImages/turbine-2xmob.webp 2x"
          media="(max-width: 767px)"
        />
        <source
          srcSet="/src/assets/AboutSectionImages/turbine-tabl.webp 1x, /src/assets/AboutSectionImages/turbine-2xtabl.webp 2x"
          media="(min-width: 768px) and (max-width: 1439px)"
        />
        <source
          srcSet="/src/assets/AboutSectionImages/turbine-desk.webp 1x, /src/assets/AboutSectionImages/turbine-2xdesk.webp 2x"
          media="(min-width: 1440px)"
        />
        <img src="/src/assets/AboutSectionImages/turbine-desk.webp" />
      </picture>
      <AboutTitle>Main values of our company</AboutTitle>
      <AboutText>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutText>

      <ValueList>
        <ValueItem>
          <ValueTitleSvgWrap>
            <svg width={16} height={16}>
              <use
                xlinkHref={sprite + "#icon-maximize-circle"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemTitle>Openness</ValueItemTitle>
          </ValueTitleSvgWrap>
          <ValueItemText>
            to the world, people, new ideas and projects
          </ValueItemText>
        </ValueItem>
        <ValueItem>
          <ValueTitleSvgWrap>
            <svg width={16} height={16}>
              <use
                xlinkHref={sprite + "#icon-global-edit"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemTitle>Responsibility</ValueItemTitle>
          </ValueTitleSvgWrap>
          <ValueItemText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ValueItemText>
        </ValueItem>
        <ValueImage>
          <picture>
            <source
              srcSet="/src/assets/AboutSectionImages/Values/wind-farms-tabl.webp 1x, /src/assets/AboutSectionImages/Values//wind-farms-2xtabl.webp 2x"
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcSet="/src/assets/AboutSectionImages/Values/wind-farms-desk.webp 1x, /src/assets/AboutSectionImages/Values/wind-farms-2xdesk.webp 2x"
              media="(min-width: 1440px)"
            />
            <img src="/src/assets/AboutSectionImages/Values/wind-farms-desk.webp" />
          </picture>
        </ValueImage>
        <ValueImage>
          <picture>
            <source
              srcSet="/src/assets/AboutSectionImages/Values/solar-panels-tabl.webp 1x, /src/assets/AboutSectionImages/Values/solar-panels-2xtabl.webp 2x"
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              srcSet="/src/assets/AboutSectionImages/Values/solar-panels-desk.webp 1x, /src/assets/AboutSectionImages/Values/solar-panels-2xdesk.webp 2x"
              media="(min-width: 1440px)"
            />
            <img src="/src/assets/AboutSectionImages/Values/wind-farms-desk.webp" />
          </picture>
        </ValueImage>
        <ValueItem>
          <ValueTitleSvgWrap>
            <svg width={16} height={16}>
              <use
                xlinkHref={sprite + "#icon-cpu-charge"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemTitle>Innovation</ValueItemTitle>
          </ValueTitleSvgWrap>
          <ValueItemText>
            we use the latest technology to implement non-standard solutions
          </ValueItemText>
        </ValueItem>
        <ValueItem>
          <ValueTitleSvgWrap>
            <svg width={16} height={16}>
              <use
                xlinkHref={sprite + "#icon-ranking"}
                fill="transparent"
                stroke="#173D33"
              />
            </svg>
            <ValueItemTitle>Quality</ValueItemTitle>
          </ValueTitleSvgWrap>
          <ValueItemText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ValueItemText>
        </ValueItem>
      </ValueList>
    </section>
  );
};

export default About;
