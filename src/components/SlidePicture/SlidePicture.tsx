import { FC } from "react";
import { Image } from "./SlidePicture.styled";
import { ISlidePictureProps } from "interfaces/ISlidePictureProps";

const SlidePicture: FC<ISlidePictureProps> = ({
  imageSrc,
  imageSrc2x,
  alt,
}) => {
  return (
    <picture>
      <source srcSet={`${imageSrc} 1x, ${imageSrc2x} 2x`} />
      <Image src={imageSrc} alt={alt} />
    </picture>
  );
};

export default SlidePicture;
