import React from 'react'
import maingirl from '../../assets/images/maingirl.png'
import lowshine from '../../assets/images/lowshine.png'
import shine from '../../assets/images/shine.png'
import play from '../../assets/svg/Play(1).svg'
import rate from '../../assets/svg/Rating.svg'
import Avatar1 from '../../assets/images/Avatar1.png'
import Avatar2 from '../../assets/images/Avatar2.png'
import Avatar3 from '../../assets/images/Avatar3.png'
import Avatar4 from '../../assets/images/Avatar4.png'
import Avatar5 from '../../assets/images/Avatar5.png'
import Buttonreuse from '../Ui/Buttonreuse'
import { Link } from 'react-router-dom'



const Banner = () => {
  return (
    <>
      <section>
        <div className='bg-[#02A77D0A]  pt-[60px] pb-10'>
          <div className='container flex gap-[210px]'>
            <div className='relative pl-10'>
              <img src={maingirl} className='max-w-none' alt="maingirl" />
              <img src={lowshine} className="absolute top-[100px] left-[547px] animate-sparkle" style={{ animationDelay: '0.5s' }} alt="Low" />
              <img src={shine} className="absolute top-[295px] left-[2px] animate-sparkle" alt="Shine" />
            </div>
            <div className='pt-[178px]'>
              <h2 className='font-mulish_semibold text-2xl leading-[35px] text-orange-lightorange'>Hurry Up Grab 40% Off</h2>
              <h2 className='relative text-8xl leading-[100px] font-mulish_medium text-gray-darkgray'>New <span className='text-orange-lightorange border-2 rounded-[50%] border-orange-lightorange'>Arrivals</span> For Summer Wear<img src={shine} className="absolute left-[662px] bottom-[-4px] animate-sparkle" alt="Shine" />
              </h2>
              <p className="relative after:bg-no-repeat after:bg-[url('/src/assets/images/lowshine.png')] after:absolute after:top-[40px] after:left-[12px] after:z-10 after:animate-sparkle  after:w-[70px] after:h-[70px] font-mulish_semibold text-gray-midgray text-2xl leading-[35px] max-w-[732px] w-full pt-[30px]">We Try Our Best Product For Shipping, Along With Tracking Info.
                We Inform Order Within 24hours In Your Email Address.</p>
              <div className='pt-[80px] flex items-center'>
                <Link to={"/arrival"}>
                  <Buttonreuse variant={"Solid"} children={"Shop Now"} />
                </Link>
                <img src={play} className='max-w-none ml-[18px] cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out' alt="play" />
                <h2 className='text-gray-highgray text-base leading-[25px] font-mulish_regular'>What On Trending?</h2>
              </div>
              <div className='flex mt-20 pt-[14px] pb-[10px] pl-5 max-w-[400px] w-full rounded-[70px] bg-white'>
                <div className='flex'>
                  <img src={Avatar1} className='max-w-none z-50' alt="Avatar1" />
                  <img src={Avatar2} className='max-w-none z-40 ml-[-25px]' alt="Avatar2" />
                  <img src={Avatar3} className='max-w-none z-30 ml-[-25px]' alt="Avatar3" />
                  <img src={Avatar4} className='max-w-none z-20 ml-[-25px]' alt="Avatar4" />
                  <img src={Avatar5} className='max-w-none z-10 ml-[-25px]' alt="Avatar5" />
                </div>
                <div className='flex flex-col gap-[6px] pl-[56px]'>
                  <div className='flex pt-[3.5px]'>
                    <img src={rate} className='max-w-none' alt="" />
                    <h2 className='text-base font-mulish_regular leading[25px] text-[#263238] pl-[10px]'>4.8 Ratings</h2>
                  </div>
                  <h2 className='text-xs font-mulish_regular leading[1.9px] text-gray-highgray'>(2,654 Reviews)</h2>
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