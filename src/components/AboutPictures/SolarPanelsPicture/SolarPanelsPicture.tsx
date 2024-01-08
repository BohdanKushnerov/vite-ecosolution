import { FC } from "react";

import { Picture } from "components/common/PictureStyled/Picture.styled";
import solarPanelsTabl from "assets/AboutSectionImages/Values/solar-panels-tabl.webp";
import solarPanelsTabl2x from "assets/AboutSectionImages/Values/solar-panels-2xtabl.webp";
import solarPanelsDesk from "assets/AboutSectionImages/Values/solar-panels-desk.webp";
import solarPanelsDesk2x from "assets/AboutSectionImages/Values/solar-panels-2xdesk.webp";

const SolarPanelsPicture: FC = () => {
  return (
    <Picture>
      <source
        srcSet={`${solarPanelsTabl} 1x, ${solarPanelsTabl2x} 2x`}
        media="(min-width: 768px) and (max-width: 1279px)"
      />
      <source
        srcSet={`${solarPanelsDesk} 1x, ${solarPanelsDesk2x} 2x`}
        media="(min-width: 1280px)"
      />
      <img src={`${solarPanelsDesk}`} alt="solar-panels" />
    </Picture>
  );
};

export default SolarPanelsPicture;
