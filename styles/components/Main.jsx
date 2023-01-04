import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsStackOverflow, BsFacebook } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'
import { Typewriter } from 'react-simple-typewriter'
import { IconButton, Tooltip } from '@mui/material'
import Link from 'next/link'

const Main=() =>{
  return (
    <div id='main' className='w-full h-screen text-center pt-64'>
        <div className='max-w-[1240px] w-full h-full mx-auto justify-center items-center'>
            <div>
             <h2 className=' uppercase font-bold'>Hi I'am tahasin tonmoy and {''}</h2>
            <h2>
                  <span className=' text-red-600 uppercase font-bold'>
                <Typewriter
                
                words={['Frontend web developer', 'backend web developer','mern stack developer', 'Mobile app developer', 'and create by tahasin tonmoy']}
                loop={true}
                // deleteSpeed={50}
                // delaySpeed={1000}
                />
             </span>
            </h2>
             <br />
             <div className=' flex items-center justify-center max-w-[330px] m-auto py-4'>
                <div className='rounded-full text-orange-500 shadow-lg p-2 hover:scale-125 ease-in duration-200 mr-4'>
                    <Link href='https://github.com/tahasintonmoy2'>
                        <Tooltip title='View Github'>
                            <IconButton className='text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff]'>
                           <AiOutlineGithub/>                                
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
                <div className='rounded-full text-orange-500 shadow-lg p-2 hover:scale-125 cursor-pointer ease-in duration-200 mr-4'>
                   <Link href='https://stackoverflow.com/users/20423066/tahasin-hossan'>
                    <Tooltip title='any questions on StackOverflow'>
                        <IconButton className='text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff]'>
                        <BsStackOverflow/>
                        </IconButton>
                    </Tooltip>                     
                   </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 hover:scale-125 text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff] cursor-pointer ease-in duration-200 mr-4'>
                    <BsFacebook size={25}/>
                </div>
                <div className='rounded-full text-orange-500 shadow-lg p-2 hover:scale-125 cursor-pointer ease-in duration-200'>
                   <Link href=''>
                     <Tooltip title='Connect on fiverr'>
                        <IconButton className=' text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff]'>
                        <SiFiverr size={25}/>                               
                        </IconButton>
                    </Tooltip>
                   </Link>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Main