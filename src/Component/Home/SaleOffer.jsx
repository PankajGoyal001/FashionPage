import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SaleOfferData from "../Json/SaleOffer.json";

const SaleOffer = () => {
  const swiperRef = useRef();

  return (
    <>
      <section>
        <div className="py-20">
          <div className="container">
            <Swiper
              spaceBetween={30}
              slidesPerView={1.3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {
                SaleOfferData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <div style={{ backgroundImage: `url(${items.Images})` }} className=" max-w-[1185px] w-full relative h-[440px]">
                      <div className="py-[128px] max-w-[580px] w-full gap-5 flex absolute right-[65px] flex-col">
                        <h3 className='commonhead'>{items.Title}</h3>
                        <h1 className='text-5xl leading-[65px] font-mulish_bold'>{items.Head}</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default SaleOffer
