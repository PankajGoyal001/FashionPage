import React, { useRef } from 'react'
import BestOfferData from "../Json/BestOffer.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const BestOffer = () => {
    const swiperRef = useRef();

    return (
        <>
            <section className='py-20'>
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            BestOfferData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{ backgroundImage: `url(${items.Images})` }} className="max-w-[780px] w-full h-[420px] bg-no-repeat bg-cover ">
                                        <div className="flex flex-col gap-5 max-w-[490px] w-full pl-[30px] pt-20">
                                            <h2 className='text-5xl leading-[65px] font-mulish_bold text-[#F6F8FA]'>{items.Title}</h2>
                                            <div className="flex items-center gap-[10px]">
                                            <h6 className='text-xl leading-[30px] font-mulish_medium text-white'>{items.Start}</h6>
                                            <p className="text-[34px] leading-[45px] font-mulish_semibold text-white">{items.Price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default BestOffer
