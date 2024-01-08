import { FC } from "react";

import { Picture } from "components/common/PictureStyled/Picture.styled";
import turbineMob from "assets/AboutSectionImages/turbine-mob.webp";
import turbineMob2x from "assets/AboutSectionImages/turbine-2xmob.webp";
import turbineTabl from "assets/AboutSectionImages/turbine-tabl.webp";
import turbineTabl2x from "assets/AboutSectionImages/turbine-2xtabl.webp";
import turbineDesk from "assets/AboutSectionImages/turbine-desk.webp";
import turbineDesk2x from "assets/AboutSectionImages/turbine-2xdesk.webp";

const ImageTurbinaPicture: FC = () => {
  return (
    <Picture>
      <source
        srcSet={`${turbineMob} 1x, ${turbineMob2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${turbineTabl} 1x, ${turbineTabl2x} 2x`}
        media="(min-width: 768px) and (max-width: 1279px)"
      />
      <source
        srcSet={`${turbineDesk} 1x, ${turbineDesk2x} 2x`}
        media="(min-width: 1280px)"
      />
      <img src={`${turbineDesk}`} alt="turbine" />
    </Picture>
  );
};

export default ImageTurbinaPicture;
