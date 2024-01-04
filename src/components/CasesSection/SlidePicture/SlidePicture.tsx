import { FC } from "react";
import { Image } from "./SlidePicture.styled";

interface ISlidePicture {
  imageSrc: string;
  imageSrc2x: string;
}

const SlidePicture: FC<ISlidePicture> = ({ imageSrc, imageSrc2x }) => {
  return (
    <picture>
      <source srcSet={`${imageSrc} 1x, ${imageSrc2x} 2x`} />
      <Image src={imageSrc} />
    </picture>
  );
};

export default SlidePicture;
