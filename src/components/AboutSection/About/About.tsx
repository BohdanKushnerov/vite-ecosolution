import { FC } from "react";
import {
  AboutText,
  AboutTitle,
  EcoInfo,
  Ecosolution,
  Email,
  Street,
} from "./About.styled";

const About: FC = () => {
  return (
    <div>
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

      <div>
        <div>
          <h3>Openness</h3>
          <p>to the world, people, new ideas and projects</p>
        </div>
        <div>
          <h3>Responsibility</h3>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <div>
          <h3>Innovation</h3>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>
        <div>
          <h3>Quality</h3>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
