import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SlidePicture from "../SlidePicture/SlidePicture";
import useResizeWindow from "hooks/useResizeWindow";
import swiperData from "constants/swiperData";
import SECTION_NAMES from "constants/sectionNames";
import {
  CasesTitle,
  IconSlideLink,
  Section,
  SlideDate,
  SlideDescDateWrap,
  SlideDescription,
  SlideTextContentWrap,
  SlideTitle,
  SlideTitleIconWrap,
  SliderButtonLeft,
  SliderButtonRigth,
  SliderButtonsWrap,
  SliderCounter,
  SliderCounterAndButtonWrap,
  SwiperWrap,
  TitleCounterAndButtonWrap,
} from "./Cases.styled";
import sprite from "assets/sprite.svg";

const Cases: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const screen = useResizeWindow(768, 1440);

  return (
    <Section id={SECTION_NAMES.CASES}>
      <TitleCounterAndButtonWrap>
        <CasesTitle>Successful cases of our company</CasesTitle>
        <SliderCounterAndButtonWrap>
          <SliderCounter>
            {currentSlide}
            <span>/05</span>
          </SliderCounter>
          <SliderButtonsWrap>
            <SliderButtonLeft className="custom_prev">
              <svg width={36} height={36}>
                <use href={sprite + "#icon-arrow-right"} />
              </svg>
            </SliderButtonLeft>
            <SliderButtonRigth className="custom_next">
              <svg width={36} height={36}>
                <use href={sprite + "#icon-arrow-right"} />
              </svg>
            </SliderButtonRigth>
          </SliderButtonsWrap>
        </SliderCounterAndButtonWrap>
      </TitleCounterAndButtonWrap>
      {/* Swiper */}
      <SwiperWrap>
        <Swiper
          modules={[Navigation]}
          spaceBetween={screen === "desktop" ? 48 : 24}
          loop={true}
          slidesPerView={screen === "mobile" ? 1 : 2}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        >
          {swiperData.map((data) => (
            <SwiperSlide key={data.key}>
              {/* SlidePicture */}
              <SlidePicture
                imageSrc={data.imageSrc}
                imageSrc2x={data.imageSrc2x}
                alt={data.description}
              />
              <SlideTextContentWrap>
                <SlideTitleIconWrap>
                  <SlideTitle>{data.title}</SlideTitle>
                  <IconSlideLink href="/" target="blank">
                    <svg width={28} height={28}>
                      <use href={sprite + "#icon-arrow-right-up"} />
                    </svg>
                  </IconSlideLink>
                </SlideTitleIconWrap>
                <SlideDescDateWrap>
                  <SlideDescription>{data.description}</SlideDescription>
                  <SlideDate>{data.date}</SlideDate>
                </SlideDescDateWrap>
              </SlideTextContentWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
    </Section>
  );
};

export default Cases;
