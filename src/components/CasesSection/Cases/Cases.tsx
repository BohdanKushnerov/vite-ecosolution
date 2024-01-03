import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import useResizeWindow from "hooks/useResizeWindow";
import {
  CasesTitle,
  IconSlideWrap,
  Image,
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
    <section>
      <TitleCounterAndButtonWrap>
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
      </TitleCounterAndButtonWrap>
      {/*  */}
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
          <SwiperSlide>
            <picture>
              <source srcSet="/src/assets/CasesSwiperImages/lviv-region.webp 1x, /src/assets/CasesSwiperImages/lviv-region-2x.webp 2x" />
              <Image src="/src/assets/CasesSwiperImages/lviv-region.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitleIconWrap>
                <SlideTitle>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </SlideTitle>
                <IconSlideWrap>
                  <svg width={28} height={28}>
                    <use href={sprite + "#icon-arrow-right-up"} />
                  </svg>
                </IconSlideWrap>
              </SlideTitleIconWrap>
              <SlideDescDateWrap>
                <SlideDescription>
                  Wind Power for auto field irrigation
                </SlideDescription>
                <SlideDate>July 2023</SlideDate>
              </SlideDescDateWrap>
            </SlideTextContentWrap>
          </SwiperSlide>

          {/*  */}
          <SwiperSlide>
            <picture>
              <source srcSet="/src/assets/CasesSwiperImages/zhytomyr-city.webp 1x, /src/assets/CasesSwiperImages/zhytomyr-city-2x.webp 2x" />
              <Image src="/src/assets/CasesSwiperImages/zhytomyr-city.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitleIconWrap>
                <SlideTitle>
                  Zhytomyr city Private Enterprise “Bosch”
                </SlideTitle>
                <IconSlideWrap>
                  <svg width={28} height={28}>
                    <use href={sprite + "#icon-arrow-right-up"} />
                  </svg>
                </IconSlideWrap>
              </SlideTitleIconWrap>
              <SlideDescDateWrap>
                <SlideDescription>
                  Solar Panels for industrial use
                </SlideDescription>
                <SlideDate>November 2023</SlideDate>
              </SlideDescDateWrap>
            </SlideTextContentWrap>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <picture>
              <source srcSet="/src/assets/CasesSwiperImages/rivne-city.webp 1x, /src/assets/CasesSwiperImages/rivne-city-2x.webp 2x" />
              <Image src="/src/assets/CasesSwiperImages/rivne-city.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitleIconWrap>
                <SlideTitle>Rivne city Private Enterprise “Biotech”</SlideTitle>
                <IconSlideWrap>
                  <svg width={28} height={28}>
                    <use href={sprite + "#icon-arrow-right-up"} />
                  </svg>
                </IconSlideWrap>
              </SlideTitleIconWrap>
              <SlideDescDateWrap>
                <SlideDescription>Thermal modules</SlideDescription>
                <SlideDate>October 2023</SlideDate>
              </SlideDescDateWrap>
            </SlideTextContentWrap>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <picture>
              <source srcSet="/src/assets/CasesSwiperImages/kherson-city.webp 1x, /src/assets/CasesSwiperImages/kherson-city-2x.webp 2x" />
              <Image src="/src/assets/CasesSwiperImages/kherson-city.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitleIconWrap>
                <SlideTitle>
                  Kherson city Private Enterprise “HealthyFarm”
                </SlideTitle>
                <IconSlideWrap>
                  <svg width={28} height={28}>
                    <use href={sprite + "#icon-arrow-right-up"} />
                  </svg>
                </IconSlideWrap>
              </SlideTitleIconWrap>
              <SlideDescDateWrap>
                <SlideDescription>Wind power</SlideDescription>
                <SlideDate>September 2021</SlideDate>
              </SlideDescDateWrap>
            </SlideTextContentWrap>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide>
            <picture>
              <source srcSet="/src/assets/CasesSwiperImages/zaporizhia-city.webp 1x, /src/assets/CasesSwiperImages/zaporizhia-city-2x.webp 2x" />
              <Image src="/src/assets/CasesSwiperImages/zaporizhia-city.webp" />
            </picture>
            <SlideTextContentWrap>
              <SlideTitleIconWrap>
                <SlideTitle>
                  Zaporizhia city Private Enterprise “Biotech”
                </SlideTitle>
                <IconSlideWrap>
                  <svg width={28} height={28}>
                    <use href={sprite + "#icon-arrow-right-up"} />
                  </svg>
                </IconSlideWrap>
              </SlideTitleIconWrap>
              <SlideDescDateWrap>
                <SlideDescription>Mini nuclear stations</SlideDescription>
                <SlideDate>May 2021</SlideDate>
              </SlideDescDateWrap>
            </SlideTextContentWrap>
          </SwiperSlide>
        </Swiper>
      </SwiperWrap>
    </section>
  );
};

export default Cases;
