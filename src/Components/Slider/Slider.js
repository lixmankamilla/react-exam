import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "../Slider/Slider.scss";
import { Img } from "../../Components/Slider/Img/Img";
import sliderImg1 from "../../assets/slider-img-1.jpg";
import sliderImg2 from "../../assets/slider-img-2.jpg";

const slides = [
  {
    src: sliderImg1,
    alt: "Slide 1",
    title: "Специальные предложения",
    desc: "на строительные материалы и товары для ремонта",
  },
  {
    src: sliderImg2,
    alt: "Slide 2",
    title: "Распродажа инструментов",
    desc: "«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой",
  },
];
export const Slider = () => {
  return (
    <Swiper
      modules={[EffectFade, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      effect={"fade"}
      className={"top-slider no-select"}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.src}>
            <Img src={slide.src} alt={slide.alt} />
            <div className="slider-content">
              <h2 className="slider-title">{slide.title}</h2>
              <p className="slider-desc">{slide.desc}</p>
            </div>
            <a href={"#"} className="button slider-btn">
              Подробнее
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
