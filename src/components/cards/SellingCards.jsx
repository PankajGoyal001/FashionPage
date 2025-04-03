import React, { useState } from 'react'

const SellingCards = ({ showRating, image, title, heartsvg, coloredtag, star, rated, price, discountprice, offpercent, selectcolors, colors, featurefalse, coloroftag }) => {


    const [like, setlike] = useState(false);

    const [selectedColor, setSelectedColor] = useState(false);




    return (
        <>
            <div className={`${featurefalse ? "!p-0" : ""} p-[14px] bg-white rounded-[14px] overflow-hidden ${!colors && "!p-0"}`}>
                <div className={`${featurefalse ? "h-[480px]" : ""} ${!colors && "mb-0 px-[14px] rounded-t-[30px] overflow-hidden h-[336px] "} relative group max-w-[375px] w-full bg-[#FBFBFB] flex items-center justify-center rounded-[10px] mb-[14px] h-[364px]`} >
                    <img src={image} alt={title} />
                    <button className='absolute bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity
                                    duration-500 ease-in-out py-4 px-[94px] rounded-lg bg-orange-lightorange'><h2 className='font-mulish_semibold text-xl leading-7 text-white'>Add To Cart</h2></button>
                    {
                        coloredtag &&
                        <h2 style={{ backgroundColor: coloroftag }} className={`absolute top-[19px] left-[14px]  py-1 px-3  rounded-[18px] font-mulish_regular text-[13px] leading-[18px] text-white`}>{coloredtag}</h2>
                    }
                    <div className={`absolute p-[9px] rounded-full top-[14px] right-[14px] transition-transform duration-300 ease-in-out    hover:scale-[1.07] cursor-pointer ${like ? 'bg-orange-lightorange' : 'bg-white'}`} onClick={() => setlike(!like)}><img src={heartsvg} alt="like" />
                    </div>
                </div>
                <div className={`flex flex-col gap-[10px] py-1 ${!colors && 'items-center gap-[6px] py-[6px] mt-[10px]'}`}>
                    <div className={`flex justify-between items-center ${!colors && "flex-col gap-[6px]"}`}>
                        <h2 className='font-mulish_medium text-xl leading-[30px] text-gray-medgray'>{title}</h2>
                        {showRating && (
                            <div className="flex gap-1">
                                <img src={star} alt="star" />
                                <h3 className="font-mulish_regular text-base leading-[25px] text-gray-lightgray">{rated}</h3>
                            </div>
                        )}
                    </div>
                    {
                        colors && (<>
                            <div className="flex gap-2 items-center">
                                <h2 className="font-mulish_regular text-sm leading-[22px] text-gray-lightgray">{selectcolors}</h2>

                                <div className='flex gap-[6px]'>
                                    {colors?.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`w-[20px] h-[20px] rounded-full border-2 ${selectedColor === item ? 'border-black' : 'border-none'
                                                } p-[2px] bg-white flex items-center justify-center`}
                                            onClick={() => setSelectedColor(item)}
                                        >
                                            <span
                                                className="w-[14px] h-[14px] rounded-full"
                                                style={{ backgroundColor: item }}
                                            ></span>
                                        </button>

                                    ))}
                                </div>

                            </div>
                        </>)
                    }
                    <div className={`flex gap-[6px] items-center`}>
                        <h2 className='font-mulish_semibold text-2xl leading-[35px] text-gray-darkgray'>{price}</h2>
                        <h3 className='font-mulish_regular line-through text-base leading-[25px] text-[#B0BEC5] '>{discountprice}</h3>
                        <h3 className='font-mulish_regular text-base leading-[25px] text-gray-midgray'>{offpercent}</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SellingCards