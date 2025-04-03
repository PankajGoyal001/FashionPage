import React from 'react'
import Button from '../Ui/Button'
import RightArrow from "../../assets/Icons/RightArrow.svg";
import SellingData from "../Json/BestSelling.json";
import BestSellingCard from "../Cards/BestSellingCard";

const BestSelling = () => {

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
                        <div>
                            <div className="grid grid-cols-4 gap-[30px]">
                                {
                                    SellingData.map((items, index) => (
                                        <BestSellingCard key={index}
                                        Images={items.Images}
                                        Title={items.Title}
                                        Offer={items.Offer}
                                        Price={items.Price}
                                        Delete={items.Delete}
                                        Discount={items.Discount}
                                        Star={items.Star}
                                        ColorText={items.ColorText}
                                        Ratng={items.Ratng}
                                        Heart={items.Heart}
                                        
                                        /> 
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
