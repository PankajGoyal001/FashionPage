import React, { useState } from 'react'
// import SellingCards from '../json/Selling.json'
import Selling from '../cards/SellingCards'
import Buttonreuse from '../Ui/Buttonreuse'
import CountdownTimer from '../Ui/CountdownTimer'

const BestSelling = ({ heading, data, headname, bgNone, view , timer }) => {
    return (
        <>
            <section className={`${bgNone ? bgNone : "bg-[#F57E5D0A]"} `}>
                <div className='padcontain'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <h2 className='commonheadname'>{headname}</h2>
                                <h2 className='commonheading'>{heading}</h2>
                            </div>
                            {view &&
                                <Buttonreuse variant={"Simple"} children={"Shop Now"} />
                            }
                            <div className={`${timer ? "block" : "hidden"} flex gap-[14px] items-center`}>
                                <h2 className='font-mulish_regular text-base leading-[25px] text-gray-highgray'>Deals Ends In :</h2>
                                <CountdownTimer targetDate="2025-03-01" />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-[30px] mt-[60px]'>

                            {data.map((item, index) => (
                                <Selling
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    heartsvg={item.heartsvg}
                                    coloredtag={item.coloredtag}
                                    coloroftag={item.coloroftag}
                                    star={item.star}
                                    selectcolors={item.selectcolors}
                                    colors={item.colors}
                                    rated={item.rated}
                                    price={item.price}
                                    discountprice={item.discountprice}
                                    offpercent={item.offpercent}
                                    showRating={true}
                                    
                                />

                            ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSelling