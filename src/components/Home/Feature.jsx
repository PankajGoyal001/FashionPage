import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SellingCards from '../cards/SellingCards';
import data from '../../components/json/feature.json';
import leftarrow from '../../assets/svg/leftarrow.svg'


const Feature = () => {
    const swiperRef = useRef();

    return (
        <section>
            <div className="padcontain">
                <div className="container">
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <h2 className='commonheadname'>Featured</h2>
                            <h2 className='commonheading'>Featured Products</h2>
                        </div>
                        <div className='flex items-end'>
                            <button onClick={() => swiperRef.current?.slidePrev()}><img src={leftarrow} alt='leftarrow' /></button>
                            <button className='rotate-180' onClick={() => swiperRef.current?.slideNext()}><img src={leftarrow} alt='rightarrow' /></button>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <Swiper
                            modules={[]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}

                            loop={true}
                            spaceBetween={20}
                            slidesPerView={4}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <SellingCards
                                        image={item.image}
                                        title={item.title}
                                        heartsvg={item.heartsvg}
                                        coloredtag={item.coloredtag}
                                        coloroftag={item.coloroftag}
                                        selectcolors={item.selectcolors}
                                        colors={item.colors}
                                        price={item.price}
                                        discountprice={item.discountprice}
                                        offpercent={item.offpercent}
                                        featurefalse={item.featurefalse}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
