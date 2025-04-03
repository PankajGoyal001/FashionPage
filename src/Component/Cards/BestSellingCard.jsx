import React, { useState } from 'react'

const BestSellingCard = ({Images,Heart,Offer,Title,Star,Ratng,ColorText,Price,Delete,Discount}) => {
  const [Click, setClick] = useState(false)
  return (
    <>
      <div  className="flex flex-col rounded-[14px] gap-[14px] p-[14px] items-center">
        <div className="relative max-w-[347px] w-full max-h-[364px] h-full">
          <img className='pt-[28px]  bg-[#FBFBFB] pb-[18px] px-[35px] rounded-[10px]' src={`src/assets/Images/${Images}`} alt="heroimg" />
          <p className="absolute top-[19px] left-[14px]">{Offer}</p>
          <img className='p-[9px] absolute top-[14px] right-[14px] bg-white rounded-full' src={`src/assets/Icons/${Heart}`} alt="heart" />
        </div>
        <div className="grid w-full gap-[10px] py-1">
          <div className="flex justify-between w-full items-center">
            <h2 className='text-xl leading-[30px] font-mulish_medium text-gray-medgray'>{Title}</h2>
            <div className="flex gap-1 ">
              <img src={`src/assets/Icons/${Star}`} alt="Star" />
              <p className="text-gray-lightgray">{Ratng}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-gray-medgray">{ColorText}</p>
            <div className="flex gap-[6px]"></div>
            {["#f57e5d", "#02a67d", "#d42f2f", "#d96302", "#0289d1"].map((items, index) => (
              <button key={index}
                onClick={() => setClick(items)}
                style={{ backgroundColor: items }}
                className={`max-w-[14px] w-full max-h-[14px] h-full rounded-full ${Click === items ? "border-2 p-2 bg-white border-black" : ""}`}></button>
            ))}
          </div>
          <div className="flex items-center gap-[6px]">
            <p className="text-gray-darkgray text-2xl leading-[35px] font-mulish_semibold">{Price}</p>
            <p className="text-[#B0BEC5] text-base leading-[25px] font-mulish_regular"><del>{Delete}</del></p>
            <p className="text-gray-midgray text-base leading-[25px] font-mulish_regular">{Discount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSellingCard
