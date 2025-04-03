import React from 'react'
import logos from '../../components/json/logos.json'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';




const Logosection = () => {
    return (
        <>
            <section>
                <div className='padcontain'>
                    <div className='container'>
                        <div className='flex flex-col items-center'>
                            <h2 className='commonheadname'>Our Partners</h2>
                            <h2 className='commonheading'>Fashion Partners</h2>
                        </div>
                    </div>
                    <div className="logos container mt-[60px]">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                logos.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <NavLink to={item.to}>
                                            <div className="">
                                                <img src={item.logos} alt="" />
                                            </div>
                                        </NavLink>
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

export default Logosection