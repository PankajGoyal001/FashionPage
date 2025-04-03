import React from 'react'
import Buttons from "../Ui/Button";
import Play from "../../assets/Icons/PlayIcon.svg";
import Rating from "../../assets/Icons/RatingStar.svg";


const Banner = () => {
    return (
        <>
            <section>
                <div className=" bg-[#02A77D0A] ">
                    <div className="container">
                        <div className="flex py-[60px] justify-between items-center">
                            <div className="">
                                <img src={"src/assets/Images/maingirl.png"} alt="heroImg" />
                            </div>
                            <div className="max-w-[780px] flex flex-col gap-20 w-full">
                                <div className="flex flex-col gap-20">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col">
                                            <h4 className='commonhead'>Hurry Up Grab 40% Off</h4>
                                            <h1 className='text-8xl font-mulish_medium text-gray-darkgray'>New <span className='border-2 rounded-[100%] rotate-[20%] text-orange-lightorange border-orange-lightorange'>Arrivals</span> For Summer Wear</h1>
                                        </div>
                                        <p className="text-gray-midgray  font-mulish_semibold max-w-[732px] w-full text-2xl leading-[35px]">We Try Our Best Product For Shipping, Along With Tracking Info. We Inform Order Within 24hours In Your Email Address.</p>
                                        <button />
                                    </div>
                                </div>
                                <div className="inline-flex gap-[30px] items-center">
                                    <Buttons variant={"solid"} ChildName={"Shop Now"} className={"text-xl font-mulish_semibold"} />
                                    <button className="flex gap-[10px] items-center">
                                        <img src={Play} alt="Play" />
                                        <p className="text-gray-highgray font-mulish_regular commontext">What On Trending?</p>
                                    </button>
                                </div>
                                <div className="max-w-[386px] w-full bg-white py-3 px-5 rounded-[70px] flex gap-6">
                                    <div className="flex items-center ">
                                    <img className='z-50' src="src/assets/Icons/Avatar1.svg" alt="Avatar1" />
                                    <img className='z-40 ml-[-20px]' src="src/assets/Icons/Avatar2.svg" alt="Avatar2" />
                                    <img className='z-30 ml-[-20px]' src="src/assets/Icons/Avatar3.svg" alt="Avatar3" />
                                    <img className='z-20 ml-[-20px]' src="src/assets/Icons/Avatar4.svg" alt="Avatar4" />
                                    <img className='z-10 ml-[-20px]' src="src/assets/Icons/Avatar5.svg" alt="Avatar5" />
                                    </div>
                                    <div className="flex gap-[10px] items-center">
                                        <img className='max-w-[90px] w-full ' src={Rating} alt="Rating"/>
                                        <p className="font-mulish_regular commontext text-gray-darkGreen">4.8 Ratings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
