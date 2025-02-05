import React from 'react'

const Catagory = () => {
  return (
    <>
    <section>
        <div className="py-20">
            <div className="container">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex items-start flex-col">
                        <h3 className='commonheadname'>Category</h3>
                        <h1 className='commonheading'>Explore Category</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-[30px] ">
                        <div className="bg-[url('src/assets/Images/catagorybg.png')] pt-5 pl-5 bg-cover bg-no-repeat">
                            <img className='rounded-t-[120px]' src="src/assets/Images/categorypic1.png" alt="" />
                        </div>
                        <div className="bg-[url('src/assets/Images/catagorybg.png')] pt-5 pl-5 bg-cover bg-no-repeat">
                            <img className='rounded-t-[120px]' src="src/assets/Images/categorypic2.png" alt="" />
                        </div>
                        <div className="bg-[url('src/assets/Images/catagorybg.png')] pt-5 pl-5 bg-cover bg-no-repeat">
                            <img className='rounded-t-[120px]' src="src/assets/Images/categorypic3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Catagory
