import React, { useState } from 'react';
import arrow from '../../assets/svg/keyboardarrow.svg'
import search from '../../assets/svg/search.svg'
import heart from '../../assets/svg/heart.svg'
import bucket from '../../assets/svg/bucket.svg'
import login from '../../assets/svg/login.svg'
import menulinks from '../../components/json/menu.json'
import locationfinder from '../../assets/svg/MyLocationOutlined.svg'
import { Link } from 'react-router-dom';
// import currencyback from '../../components/json/currency.json'


const Header = () => {
  const [rotate, newrotate] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [lang, setLanguage] = useState(false);
  // currencyback.map((item,index)=>(
  //   item.USD
  // ))
  return (
    <>
    
      <header>
        <div className='container pt-[30px] pb-[30px] flex flex-col gap-[14px]'>
          <div className='flex items-center justify-between'>
            <Link to={"/"}>
              <h1 className='text-orange-lightorange font-mulish_bold text-[28px] leading-[38px]'>FashionCarts<span className='text-[#02A77D]'>.</span></h1>
            </Link>
            <div className='flex max-w-[1090px] w-full'>
              <div onClick={() => newrotate(!rotate)} className='flex max-w-[152px] w-full gap-[6px] py-[13px] px-3 bg-[#F6F8FA] rounded-l-md group hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer'>
                <h2 className='text-base text-gray-medgray leading-[22px] font-mulish_medium'>All Categories</h2>
                <button className={`h-[18px] w-[18px] flex items-center justify-center pt-[2px] transition-all duration-200 ${rotate && 'rotate-180'}`}><img src={arrow} alt="" /></button>
              </div>
              <input type="text" placeholder='Search Brands...' className='text-gray-lightgray  bg-[#FBFBFB] px-[10px] text-[16px] font-mulish_regular leading-[25px] w-full outline-none' />
              <button className='bg-orange-lightorange px-5 rounded-r-md hover:scale-110 transition-transform duration-500 ease-in-out'><img src={search} alt="search" className='max-w-none' /></button>
            </div>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-[6px] items-center p-[2px] cursor-pointer group'>
                <img src={heart} className='max-w-5  group-hover:scale-110 transition-transform duration-500 ease-in-out' alt="heart" />
                <h2 className='font-mulish_medium text-gray-medgray text-sm'>Wishlist</h2>
              </div>
              <div className='flex flex-col gap-[6px] items-center content-center p-[2px] cursor-pointer group'>
                <img src={bucket} className='max-w-5 group-hover:scale-110 transition-transform duration-500 ease-in-out' alt="bucket" />
                <h2 className='font-mulish_medium text-gray-medgray text-sm'>Cart</h2>
              </div>
              <div className='flex flex-col gap-[6px] items-center content-center p-[2px] cursor-pointer group'>
                <img src={login} className='max-w-5 group-hover:scale-110 transition-transform duration-500 ease-in-out' alt="login" />
                <h2 className='font-mulish_medium text-gray-medgray text-sm'>Login</h2>
              </div>
            </div>
          </div>
          <span className='border border-[#ECEFF1] max-w-[1590px] w-full inline-block'></span>
          <div className='flex justify-between'>
            <ul className='inline-flex gap-[60px] font-mulish_regular text-base leading-[25px] text-gray-highgray py-[3px]'>
              {menulinks?.length &&
                menulinks &&
                menulinks?.map((items, index) => (
                  <li className='cursor-pointer hover:text-orange-lightorange hover:border-l hover:border-orange-lightorange hover-pl-[2px] transition-all duration-100 ease-in-out' key={index}>{items.name}</li>
                ))}
            </ul>
            <div className='flex items-center gap-10'>
              <button className='flex py gap-[6px] cursor-pointer px-[2px] py-[2px]'>
                <img src={locationfinder} alt="locationfinder" />
                <h2 className='font-mulish_regular text-sm leading-[22px] text-gray-lightgray'>Find Address</h2>
              </button>
              <div className='flex items-center gap-[10px]'>
                <button onClick={() => setCurrency(!currency)} className='flex items-center py-[6px] px-2 max-w-[76px] w-full'>
                  <h2 className='font-mulish_regular text-xs leading-[14px] text-gray-midgray pr-[5px]'>$ USD</h2>
                  <img src={arrow} className={`py-[6px] px-[4.5px] transition-all duration-200 ${currency && 'rotate-180'}`} alt="arrow" />
                </button>

                {/* <span className='border border-[#CFD8DC] h-5'></span> */}
                <button onClick={() => setLanguage(!lang)} className='flex items-center py-[6px] px-2'>
                  <h2 className='font-mulish_regular text-xs leading-[14px] text-gray-midgray pr-[16px]'>ENG</h2>
                  <img src={arrow} className={`py-[6px] px-[4.5px] transition-all duration-200 ${lang && 'rotate-180'}`} alt="arrow" />
                </button>
              </div>
            </div>
          </div >
        </div >
      </header >
    </>
  );
};

export default Header