import React from 'react'
import offersec from '../../components/json/offersec.json'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Offersec = () => {
    return (
        <>
            <section>
                <div className="padcontain">
                    <div className="container">
                        <div className=''>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {offersec.map((item, index) => (
                                    <SwiperSlide key={index} className=''>
                                        <div className='max-w-[780px] w-full h-[420px] bg-no-repeat bg-center relative'
                                            style={{ backgroundImage: `url(${item.image})` }}>
                                            <div className='absolute top-20 left-[30px]'>
                                                <h2 className={`font-mulish_bold text-5xl leading-[65px] ${index == 0 ? 'text-[#F6F8FA]' : 'text-[#263238]'}`}>{item.title}</h2>
                                                <div className='flex gap-[10px] mt-5 items-center'>
                                                    <h3 className={`font-mulish_medium text-xl leading-[30px] ${index == 0 ? 'text-white' : 'text-gray-darkgray'}`}>{item.start}</h3>
                                                    <h3 className={`font-mulish_semibold text-[34px] leading-[45px] ${index == 0 ? 'text-white' : 'text-[#263238]'}`}>{item.price}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Offersec