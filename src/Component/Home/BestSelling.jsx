import React from 'react'
import Button from '../Ui/Button'
import RightArrow from "../../assets/Icons/RightArrow.svg";
import SellingData from "../Json/BestSelling.json";

const BestSelling = () => {
    return (
        <>
            <section className=''>
                <div className="container">
                    <div className="flex flex-col gap-[60px]">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col ">
                                <h3 className='commonhead'>Products</h3>
                                <h1 className='commonheading'>Best Selling Products</h1>
                            </div>
                            <div className="flex px-4 py-[10px] hover:cursor-pointer gap-2">
                                <Button variant={"Simple"} ChildName={"View All"} className={"text-base font-mulish_semibold"} />
                                <img className='ease-in-out hover:scale-90 duration-200' src={RightArrow} alt="RightArrow" />
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-4 gap-[30px]">
                                {
                                    SellingData.map((items, index) => (
                                        <div key={index} className="flex flex-col rounded-[14px] gap-[14px] p-[14px] items-center">
                                            <div className="relative max-w-[347px] w-full max-h-[364px] h-full">
                                                <img className='pt-[28px]  bg-[#FBFBFB] pb-[18px] px-[35px] rounded-[10px]' src={`src/assets/Images/${items.Images}`} alt="" />
                                                <p className="absolute top-[19px] left-[14px]">{items.Offer}</p>
                                                <img className='p-[9px] absolute top-[14px] right-[14px] bg-white rounded-full' src={`src/assets/Icons/${items.Heart}`} alt="" />
                                            </div>
                                            <div className="flex flex-col gap-[10px] py-1">
                                                <div className="flex justify-between items-center">
                                                    <h2 className='text-xl leading-[30px] font-mulish_medium'>{items.Title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSelling
