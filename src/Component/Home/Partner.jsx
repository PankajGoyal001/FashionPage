import React, { useRef } from 'react'
import Company from "../Json/CompanyPartner.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const Partner = () => {
    const swiperRef = useRef();

    return (
        <>
            <section>
                <div className="py-20">
                    <div className="container">
                        <div className="flex flex-col gap-[60px]">
                            <div className="flex items-center flex-col">
                                <h6 className='commonhead'>Our Partners</h6>
                                <h2 className='commonheading '>Fashion Partners</h2>
                            </div>
                            <div className="">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={5}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {
                                        Company.map((items, index) => (
                                            <SwiperSlide key={index}>  
                                                <img className='max-w-[190px] w-full' src={`src/assets/Images/${items.Image}`} alt="" />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partner
