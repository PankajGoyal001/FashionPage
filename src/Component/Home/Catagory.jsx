import React from 'react'
import CatagoryData from "../Json/CatogoryExplore.json";

const Catagory = () => {
  return (
    <>
    <section>
        <div className="py-20">
            <div className="container">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex items-start flex-col">
                        <h3 className='commonhead'>Category</h3>
                        <h1 className='commonheading'>Explore Category</h1>
                    </div>
                    <div className="flex gap-[30px]">
                        {
                            CatagoryData.map((items,index)=>(
                                <div key={index} className="relative">
                                    <div className="max-w-[390px] w-full max-h-[540px] h-full border-2 border-orange-lightorange rounded-t-[120px]"></div>
                                    <img className='rounded-t-[110px] absolute ' src={`src/assets/Images/${items.Image}`} alt="" />
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

export default Catagory
