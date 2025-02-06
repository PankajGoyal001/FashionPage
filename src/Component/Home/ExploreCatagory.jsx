import React from 'react'
import Button from '../Ui/Button'
import RightArrow from "../../assets/Icons/RightArrow.svg";
import ExploreData from "../Json/Explore.json";


const ExploreCatagory = () => {
    return (
        <>
            <section className='py-20'>
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
                        <div className="flex gap-[30px]">
                            {
                                ExploreData.map((items, index) => (
                                    <div key={index} className="flex items-center rounded-t-[50px]  overflow-hidden max-h-[280px] h-full max-w-[240px] w-full flex-col gap-5">
                                        <img className='hover:scale-110 ease-in-out  duration-700 ' src={`src/assets/Images/${items.Images}`} alt="images" />
                                        <h2 className='pb-5 text-xl leading-[30px] text-gray-medgray'>{items.Title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreCatagory
