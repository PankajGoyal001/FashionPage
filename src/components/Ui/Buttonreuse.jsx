import React from 'react'
import arrowsvg from '../../assets/svg/ChevronRightFilled.svg'
import maskedarrow from '../../assets/svg/Maskedarrow.svg'


const Buttonreuse = ({ children, classname, showarrow, variant, view }) => {
    return (<>

        {
            variant === "Solid" ? (<>
                <button className={`flex items-center ${classname} gap-2 py-4 px-6 bg-orange-lightorange text-white font-mulish_semibold leading-7 rounded-lg text-xl hover:scale-105 transition-transform duration-500 ease-in-out`}>{children}
                    {showarrow && <img src={arrowsvg} alt="" />}
                </button>
            </>) : (<>
            </>)
        }

        {
            variant === "Simple" ? (<>
                <button className={`border-none py-[10px] px-4 items-center flex gap-2 `}><h2 className='text-orange-lightorange'>View All</h2><img src={maskedarrow} alt="maskedarrow " /></button>
            </>) : (<></>)
        }
    </>)
}

export default Buttonreuse