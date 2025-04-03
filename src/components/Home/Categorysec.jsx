import React from 'react'
import categoryjson from '../../components/json/categorysec.json'
import { NavLink } from 'react-router-dom'
const categorysec = () => {
  return (
    <>
      <section>
        <div className="padcontain">
          <div className='container'>
            <div className='flex flex-col'>
              <h2 className='commonheadname'>Category</h2>
              <h2 className='commonheading'>Explore Category</h2>
            </div>
            <div className='categories mt-[60px] flex gap-[150px] mb-[42px]'>
              {categoryjson.map((item, index) => (
                <NavLink to={item.to} key={index}>
                  <div className='relative group'>
                    <div className='w-[390px] h-[540px] border-[#F57E5D80] border-[2px] rounded-t-[120px] '></div>
                    <img src={item.image} className='max-w-none rounded-t-[110px] absolute top-[22px] left-[20px] transition-transform duration-500 ease-in-out group-hover:scale-[1.07]' alt="categoryimage" />
                    <div className='absolute w-[450px] bg-[#263238] py-5 flex justify-center bottom-[-20px] left-[50px] rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105'><h2 className='font-mulish_semibold text-white text-[34px] leading-[45px]'>{item.name}</h2></div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default categorysec