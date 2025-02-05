import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({variant ,ChildName , className }) => {
  return (
    <>
    { variant === "solid" ? (<>
    <Link to={"/Shop"}>
        <button className={`${className} px-6 py-4 bg-orange-lightorange text-white rounded-[8px] items-center ease-in-out hover:scale-95 duration-200`}>{ChildName}</button>
    </Link>
    </>): (<>
    </>)
}
    </>
  )
}

export default Button
