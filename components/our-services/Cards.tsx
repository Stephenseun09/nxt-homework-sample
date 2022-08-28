import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import CardItem from "./CardItem";
import ArrowLeft from "../ui/svg/ArrowLeft";
import ArrowRight from "../ui/svg/ArrowRight";
import useSwiperRef from "../../hooks/useSwiperRef";
import { ourServicesData } from "../../constants";

const Cards = () => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  // ------------ Swiper options --------
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const breakpoints = {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  // ------------ Swiper options --------

  const { cardData } = ourServicesData;

  return (
    <div className="relative ">
      <Swiper
        spaceBetween={30}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        breakpoints={breakpoints}
        navigation={{
          prevEl,
          nextEl,
        }}
        className="swiper"
      >
        {/*---------------------------*/}
        {/*---- Navigation Button ----*/}
        {/*---------------------------*/}
        <div className="hidden absolute -top-20  md:right-0 md:flex justify-center md:justify-end items-end space-x-6 z-50">
          <button ref={prevElRef} className=" bg-primary rounded-lg p-2">
            <ArrowLeft className="w-4 h-4 text-primary-blue" />
          </button>
          <button ref={nextElRef} className="bg-primary rounded-lg p-2">
            <ArrowRight className="w-4 h-4 text-primary-blue" />
          </button>
        </div>
        {/*---------------------------*/}
        {/*---- Navigation Button ----*/}
        {/*---------------------------*/}

        {/*-------------------*/}
        {/*---- Card Item ----*/}
        {/*-------------------*/}
        {cardData.map((cardItem, index) => {
          return (
            <SwiperSlide key={index}>
              <CardItem {...cardItem} />
            </SwiperSlide>
          );
        })}
        {/*-------------------*/}
        {/*---- Card Item ----*/}
        {/*-------------------*/}

        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default Cards;
