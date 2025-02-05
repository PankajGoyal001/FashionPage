import React, { useState } from 'react'
import ArrowDown from "../../assets/Icons/ArrowDown.svg";
import SearchIcon from "../../assets/Icons/Search.svg";
import Heart from "../../assets/Icons/Heart.svg";
import Cart from "../../assets/Icons/Cart.svg";
import Login from "../../assets/Icons/Login.svg";
import Finder from "../../assets/Icons/Findeaddress.svg";
import MenuData from "../Json/MenuLinks.json";
import { Link } from 'react-router-dom';

const Header = () => {
    const [Click, setClick] = useState(false)

    return (
        <>
            <header>
                <div className="container">
                    <div className="pt-[30px] flex flex-col pb-5 gap-[14px]">
                        <div className="flex justify-between items-center">
                            <h1 className='text-orange-lightorange text-[28px] leading-[38px] font-mulish_bold'>FashionCart <span className='text-[#02A77D]'>.</span></h1>
                            <div className="flex max-w-[1090px] w-full gap-[10px]">
                                <button onClick={() => setClick(!Click)} className="flex gap-[6px]  hover:cursor-pointer rounded-l-[6px] items-center py-[14px] px-3 max-w-[152px] w-full bg-[#F6F8FA]">
                                    <h3 className='text-[16px] leading-[22px] font-mulish_medium text-gray-medgray'>All Categories</h3>
                                    <img className={`${Click && "rotate-180"}`} src={ArrowDown} alt="" />
                                </button>
                                <input className='commontext  text-gray-lightgray  bg-[#FBFBFB] font-mulish_regular w-full outline-none' type="search" id='search' placeholder='Search Brands...' />
                                <img className='px-5 py-[14px] rounded-r-[6px] bg-[#F57E5D]' src={SearchIcon} alt="Search" />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex flex-col items-center gap-[6px]">
                                    <img className='max-w-5 w-full' src={Heart} alt="Heart" />
                                    <p className="text-sm font-mulish_medium text-gray-medgray leading-7">Wishlist</p>
                                </div>
                                <div className="flex flex-col items-center gap-[6px]">
                                    <img className='max-w-5 w-full' src={Cart} alt="Cart" />
                                    <p className="text-sm font-mulish_medium text-gray-medgray leading-7">Cart</p>
                                </div>
                                <div className="flex flex-col items-center gap-[6px]">
                                    <img className='max-w-5 w-full' src={Login} alt="Login" />
                                    <p className="text-sm font-mulish_medium text-gray-medgray leading-7">Login</p>
                                </div>
                            </div>
                        </div>
                        <span className='border-b border-Border-lightborder '></span>
                        <div className="flex items-center justify-between">
                            <ol className="max-w-[1223px] w-full flex gap-[60px]">
                                {
                                    MenuData.map((items, index) => (
                                        <Link key={index} to={"path"}>
                                            <li className='commontext text-gray-highgray font-mulish_regular'>{items.Menu}</li>
                                        </Link>
                                    ))
                                }
                            </ol>
                            <div className="flex py-[3px] gap-[6px] ">
                                <img src={Finder} alt="finder" />
                                <p className="text-gray-lightgray font-mulish_regular text-sm leading-[22px]">Find Address</p>
                            </div>
                            <div className="xl:flex items-center hidden gap-[10px]">
                                <div className="px-2 py-[6px] items-center flex">
                                    <p className="text-gray-midgray text-xs leading-[14px] font-mulish_regular">$ USD</p>
                                    <img src={ArrowDown} alt="" />
                                </div>
                                <span className='border-r h-5'></span>
                                <div className="px-2 py-[6px] items-center flex">
                                    <p className="text-gray-midgray text-xs leading-[14px] font-mulish_regular">ENG</p>
                                    <img src={ArrowDown} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
