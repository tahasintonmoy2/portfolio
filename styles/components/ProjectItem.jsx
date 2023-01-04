import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectItem({title, backgroundImg , projectUrl}) {
  return (
    <div className=' relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#6116EA] to-[#709dff]'>
          <Image
              src={backgroundImg}
              alt='/'
              className='cursor-pointer rounded-xl group-hover:opacity-10'
            />
            <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
             <h2 className=' text-white'>{title}</h2>
             <h3 className=' text-white items-center text-center pt-3 pb-3'>React JS</h3>
             <Link  href={projectUrl}>
                <p className=' items-center text-center py-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View More</p>
             </Link>
            </div> 
         </div>
  )
}

export default ProjectItem
