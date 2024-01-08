import { FC } from "react";

import { Picture } from "components/common/PictureStyled/Picture.styled";
import windFarmsTabl from "assets/AboutSectionImages/Values/wind-farms-tabl.webp";
import windFarmsTabl2x from "assets/AboutSectionImages/Values/wind-farms-2xtabl.webp";
import windFarmsDesk from "assets/AboutSectionImages/Values/wind-farms-desk.webp";
import windFarmsDesk2x from "assets/AboutSectionImages/Values/wind-farms-2xdesk.webp";

const WindFarmsPicture: FC = () => {
  return (
    <Picture>
      <source
        srcSet={`${windFarmsTabl} 1x, ${windFarmsTabl2x} 2x`}
        media="(min-width: 768px) and (max-width: 1279px)"
      />
      <source
        srcSet={`${windFarmsDesk} 1x, ${windFarmsDesk2x} 2x`}
        media="(min-width: 1280px)"
      />
      <img src={`${windFarmsDesk}`} alt="wind-farms" />
    </Picture>
  );
};

export default WindFarmsPicture;
