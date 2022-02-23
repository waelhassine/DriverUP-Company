import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const headerEn = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="py-2 rounded drop-shadow-6xl">
            <div
              className="h-screen bg-no-repeat bg-cover bg-center rounded-xl mx-4"
              style={{
                backgroundImage: `url(/2.jpg)`,
              }}
            >
              <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
                <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                  <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">
                    Gift Shop, Creating with Love{" "}
                  </p>

                  <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                    Create a creative Gift
                  </p>
                  <button
                    type="button"
                    className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-2 rounded drop-shadow-7xl">
            <div
              className="h-screen bg-no-repeat bg-cover rounded-xl bg-center mx-4"
              style={{
                backgroundImage: `url(/4.jpg)`,
              }}
            >
              <div className="h-screen bg-black bg-opacity-10 px-4 text-main-3">
                <div className="h-screen flex flex-col justify-center text-main-3 items-center space-y-6">
                  <p className="text-4xl text-center rounded-3xl text-white px-8 py-5 bg-main-5/80">
                    Gift Shop, Creating with Love{" "}
                  </p>

                  <p className="text-2xl font-light rounded-3xl px-8 py-3 text-white text-center bg-main-5/80">
                    Create a creative Gift
                  </p>
                  <button
                    type="button"
                    className="text-white  rounded-3xl  px-8 py-3 text-center mr-2 mb-2 bg-main-5/70"
                  >
                    Cotact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default headerEn;
