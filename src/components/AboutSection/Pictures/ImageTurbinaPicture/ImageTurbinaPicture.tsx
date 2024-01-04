import { FC } from "react";

import turbineMob from "assets/AboutSectionImages/turbine-mob.webp";
import turbineMob2x from "assets/AboutSectionImages/turbine-2xmob.webp";
import turbineTabl from "assets/AboutSectionImages/turbine-tabl.webp";
import turbineTabl2x from "assets/AboutSectionImages/turbine-2xtabl.webp";
import turbineDesk from "assets/AboutSectionImages/turbine-desk.webp";
import turbineDesk2x from "assets/AboutSectionImages/turbine-2xdesk.webp";

const ImageTurbinaPicture: FC = () => {
  return (
    <picture>
      <source
        srcSet={`${turbineMob} 1x, ${turbineMob2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${turbineTabl} 1x, ${turbineTabl2x} 2x`}
        media="(min-width: 768px) and (max-width: 1439px)"
      />
      <source
        srcSet={`${turbineDesk} 1x, ${turbineDesk2x} 2x`}
        media="(min-width: 1440px)"
      />
      <img src="/src/assets/AboutSectionImages/turbine-desk.webp" />
    </picture>
  );
};

export default ImageTurbinaPicture;
