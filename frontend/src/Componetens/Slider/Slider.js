import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
// import {carData} from "../../Utils/Data"
// import { CardComponent } from "../CardComponent/CardComponent";
export const Slider = ()=> {

    // console.log("carData",carData);


  return (
    <div className='sliderContainer'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* {data.map((e)=>(
            <CardComponent/>
          ))} */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
