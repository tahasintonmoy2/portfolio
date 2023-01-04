import Image from 'next/image'
import React from 'react'
import Girls from '../public/assets/hotgirl.jpg'
import Link from 'next/link'

const property =() => {
  return (
    <div className=' w-screen h-[30vh] lg:h-[7vh] relative'>
        <div className=' absolute bottom-9 w-full h-[30vh] lg:h-[20vh] bg-black/80 z-10'>
           <Image
              src={Girls}
              alt='/'
              className=' w-full'
            /> 
           <div className=' uppercase absolute top-[60%] max-w-[1240px] le'>
          <h2 className=' ml-[440%] pt-[600%] pb-3 text-white'>my Property</h2>
           <div className=' ml-[540%] top-28'>
           <a className=' bg-[#CC1112] ml-[440%] text-white shadow-xl shadow-gray-300 rounded-xl font-semibold w-full p-4 uppercase hover:bg-gradient-to-r from-[#CC1112] to-[#dd4747]' href='https://www.facebook.com/lovelyqueen1832'>Id</a>
           </div>
        </div>
        </div>
    </div>
  )
}

export default property
