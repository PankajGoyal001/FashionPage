import React from 'react'
import budgetdeals from '../../components/json/budgetdeals.json'

const Budgetdeals = () => {
    return (
        <>
            <section>
                <div className='padcontain'>
                    <div className='container'>
                        <div className='flex flex-col'>
                            <h2 className='commonheadname'>Budget</h2>
                            <h2 className='commonheading'>Best Deals In Budget</h2>
                        </div>
                        <div className='flex gap-[26px] mt-[60px]'>
                            {budgetdeals.map((item, index) => (
                                <div key={index} className='rounded-[14px] overflow-hidden group relative flex justify-center cursor-pointer'>
                                    <img className='transition-transform duration-300 group-hover:scale-105 ease-in-out' src={item.image} alt={item.title} />
                                    <div className=' bg-white py-[10px] absolute top-[363px] h-[97px] max-w-[335px] w-full rounded-md text-center transition-transform duration-300 group-hover:scale-105 ease-in-out'>
                                        <h2 className='text-gray-medgray text-xl leading-[30px] font-mulish_medium'>{item.title}</h2>
                                        <h2 className='font-mulish_semibold text-[34px] leading-[45px] text-gray-darkgray'>{item.percent}</h2>
                                    </div>
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

export default Budgetdeals