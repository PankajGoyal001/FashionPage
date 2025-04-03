import React from 'react'
import grabupto from '../../components/json/grabupto.json'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Grab = () => {
    return (
        <>
            <section>
                <div className='padcontain'>
                    <div className='container'>
                        <div className=''>
                            <Swiper
                                slidesPerView={1.3}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    grabupto.map((item, index) => (
                                        <SwiperSlide key={index} className=''>
                                            <div
                                                className="relative max-w-[1185px] w-full h-[440px] bg-no-repeat bg-center rounded-lg shadow-lg"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            >
                                                <div className='absolute top-[128px] right-[149px]'>
                                                    <h2 className='text-2xl font-mulish_semibold text-orange-lightorange leading-[35px]'>Grab Upto 50% Off</h2>
                                                    <h2 className='font-mulish_bold text-5xl leading-[65px] mt-5 max-w-[496px] text-gray-darkgray'>Bigest Sale On Men's
                                                        Wear Fashion</h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Grab