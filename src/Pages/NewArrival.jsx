import React from 'react'
import BestSelling from '../components/Home/BestSelling'
import newarrivalnewpage from "../components/json/newarrivalnewpage.json";


const NewArrival = () => {
  return (<>
    <BestSelling data={newarrivalnewpage} bgNone="bg-[#FBFBFB]" />
  </>
  )
}

export default NewArrival