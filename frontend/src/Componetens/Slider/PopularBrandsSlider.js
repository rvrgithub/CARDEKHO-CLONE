import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../Style/Slider.css";
import { Pagination, Navigation } from "swiper";
import { PopularBrandsCard } from "../CardComponent/PopularBrandsCard";
export const PopularBrandsSlider = ({ data }) => {
  // console.log("tab", data);
  return (
    <div className="sliderContainer">
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={6}
        // loop={true}
        // loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            <PopularBrandsCard data={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
