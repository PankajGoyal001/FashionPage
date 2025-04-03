import {React,useState} from 'react'
import shopmap from '../../components/json/footershopping.json'
import helpmap from '../../components/json/footerhelp.json'
import companymap from '../../components/json/footercompany.json'
import popularmap from '../../components/json/footerpopular.json'
import contactmap from '../../components/json/footercontact.json'
import paymentoption from '../../components/json/payment.json'
import arrow from '../../assets/svg/keyboardarrow.svg'



const Footer = () => {

  const [rotate, newrotate] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [lang, setLanguage] = useState(false);

  return (
    <>
      <footer className='bg-[#263238]'>
        <div className='pt-20 pb-[30px]'>
          <div className='container'>
            <div className='flex gap-[30px]'>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Shopping</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    shopmap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Help Desk</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    helpmap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[240px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Company</h2>
                <div className='flex flex-col gap-[14px]'>
                  {
                    companymap.map((item, index) => (
                      <h2 key={index} className='py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer'>{item.name}</h2>
                    ))
                  }
                </div>
              </div>
              <div className='max-w-[375px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Popular Searches</h2>
                <div className="grid grid-cols-2 gap-y-[14px] gap-x-[10px]">
                  {popularmap.map((item, index) => (
                    <h2 key={index} className="py-[3px] text-[#CFD8DC] font-mulish_regular text-base leading-[25px] cursor-pointer" >  {item.name}
                    </h2>
                  ))}
                </div>
              </div>
              <div className='max-w-[375px] w-full'>
                <h2 className='mb-5 text-white font-mulish_medium text-xl leading-[30px]'>Contact Us</h2>
                <div className='flex flex-col gap-[17px]'>
                  {
                    contactmap.map((item, index) => (
                      <div key={index} className='text-[#CFD8DC] font-mulish_regular flex flex-col gap-1 cursor-pointer'>
                        <div className='flex gap-2'>
                          <img className='py-[3px]' src={item.image} alt={item.name} />
                          <h2 className='text-sm leading-[22px]'>{item.name}</h2>
                        </div>
                        <h2 className='text-base leading-[25px] max-w-[262px] w-full'>{item.title}</h2>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <span className='mt-[60px] mb-[30px] w-full max-w-full border border-gray-lightgray block'></span>
            <div className='flex items-center '>
              <h2 className='max-w-[375px] w-full font-mulish_regular text-sm leading-[22px] text-[#B0BEC5]'>© Copyright 2022 Madbrains. All Rights Are reserved.</h2>
              <div className='max-w-[840px] w-full flex justify-center gap-3'>
                {
                  paymentoption.map((item, index) => (
                    <img key={index} src={item.image} alt="PayOptions" />
                  ))
                }
              </div>
              <div className='flex items-center gap-5 max-w-[375px] w-full justify-end'>
                <button onClick={() => setCurrency(!currency)} className='flex items-center py-[6px] px-2 border border-gray-midgray rounded-[4px]'>
                  <h2 className='font-mulish_regular text-xs leading-[14px] text-gray-midgray'>$ USD</h2>
                  <img src={arrow} className={`py-[6px] px-[4.5px] transition-all duration-200 ${currency && 'rotate-180'}`} alt="arrow" />
                </button>
                <button onClick={() => setLanguage(!lang)} className='flex items-center py-[6px] px-2 border border-gray-midgray rounded-[4px]'>
                  <h2 className='font-mulish_regular text-xs leading-[14px] text-gray-midgray'>ENG</h2>
                  <img src={arrow} className={`py-[6px] px-[4.5px] transition-all duration-200 ${lang && 'rotate-180'}`} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer