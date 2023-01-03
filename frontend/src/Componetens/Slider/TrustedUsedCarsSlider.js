import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { CardComponent } from "../CardComponent/CardComponent";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Style/Slider.css";
import { useSelector } from "react-redux";
// import required modules
import { Pagination, Navigation } from "swiper";
import { CardComponent } from "../CardComponent/CardComponent";
export const TrusedUsedCarsSlider = ({ data }) => {
  const tab = useSelector((store) => store?.AppReducer?.cars?.trustedUsedCars);
  const tabData = tab?.data?.[data];
  console.log("skider", tabData);
  console.log("tab", tab);
  console.log("tabSlider", data);
  return (
    <div className="sliderContainer">
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        slidesPerGroup={1}
        // loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {tabData?.map((e, i) => (
          <SwiperSlide key={i}>
            <CardComponent data={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
