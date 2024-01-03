import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  CasesTitle,
  Image,
  SlideDate,
  SlideDescription,
  SlideTextContentWrap,
  SlideTitle,
  SliderButtonLeft,
  SliderButtonRigth,
  SliderButtonsWrap,
  SliderCounter,
  SliderCounterAndButtonWrap,
  SwiperWrap,
} from "./Cases.styled";
import sprite from "assets/sprite.svg";

const Cases: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section>
      <div>
        <CasesTitle>Successful cases of our company</CasesTitle>
        {/*  */}
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
      </div>
      {/*  */}
      <SwiperWrap>
        <Swiper
          modules={[Navigation]}
          // spaceBetween={50}
          loop={true}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        >
          <SwiperSlide>
            <picture>
              <source
                srcSet="/src/assets/CasesSwiperImages/lviv-region.webp 1x, /src/assets/CasesSwiperImages/lviv-region-2x.webp 2x"
              />
              <Image src="/src/assets/CasesSwiperImages/lviv-region.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitle>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </SlideTitle>
              <SlideDescription>
                Wind Power for auto field irrigation
              </SlideDescription>
              <SlideDate>July 2023</SlideDate>
            </SlideTextContentWrap>
          </SwiperSlide>

          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
        </Swiper>
      </SwiperWrap>
    </section>
  );
};

export default Cases;
