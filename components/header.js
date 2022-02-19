import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center rounded-xl mx-2"
            style={{
              backgroundImage: `url(/2.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
              <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">სასაჩუქრე კომპანია, ვქმნით სიყვარულით </p>
                
                <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                  აჩუქე კრეატიული საჩუქარი
                </p>
                <button
                  type="button"
                  className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                >
                  დაგვიკავშირდით
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover rounded-xl bg-center mx-2"
            style={{
              backgroundImage: `url(/4.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
              <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">სასაჩუქრე კომპანია, ვქმნით სიყვარულით </p>
                
                <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                  აჩუქე კრეატიული საჩუქარი
                </p>
                <button
                  type="button"
                  className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                >
                  დაგვიკავშირდით
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
