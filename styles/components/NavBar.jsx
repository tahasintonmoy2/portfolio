
import Image from "next/image"
import Link from "next/link"
import { NavLogo} from "../public/assets"
import {AiOutlineMenu,AiOutlineClose,AiOutlineGithub} from 'react-icons/ai'
import {BsStackOverflow} from 'react-icons/bs'
import React, {useState, useEffect} from "react"
import {SiFiverr} from 'react-icons/si'
import { Typewriter } from 'react-simple-typewriter'
import About from "./About"

const NavBar = () =>{

 const [nav, setNav] = useState(false);
 const [shadow, setShadow] = useState(false);

 const handleNav = ()=>{
  setNav(!nav);
 };

  useEffect(()=>{
   const handleShadow =()=>{
      if (window.scrollY >= 90) {
        setShadow(true)
      }else{
        setShadow(false)
      }
   }
   window.addEventListener('scroll', handleShadow)
  },[])

    return (
      <div id="navbar" className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
        <Image
              src={NavLogo}
              alt='/'
              width={260}
              className='cursor-pointer'
            />
        </Link>
        <div>
          <ul  className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase font-bold'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase font-bold'>
                <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase font-bold'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase font-bold'>
              <Link href='/#project'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase font-bold'>
              <Link href='/#contacts'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu
           size={30}
          />
          </div>
        </div>
      </div>
      <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 
        'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
        <div>
            <div onClick={handleNav} className='fixed w-full items-center justify-between cursor-pointer'>
            <AiOutlineClose
              size={30}
            />
            </div>
            <div className=' flex'>
            <Image
              src={NavLogo}
              alt='/'
              width={300}
              className='cursor-pointer flex'
            />            
          </div>
        </div>
        <div className='border-b border-gray-400' >
           <p className='font-semibold uppercase text-red-600'>I'm tahasin and {''}</p> 
           <span className='text-red-600 font-semibold uppercase'>
            <Typewriter
             words={['Frontend web developer', 'backend web developer','mern stack developer', 'and create by tahasin tonmoy']}
             loop={true}
            />
           </span>
        </div>
        <div>
            <ul>
                <li onClick={()=> setNav(false)} className=' pt-4 pb-2 hover:text-[#6116EA] hover:scale-105 uppercase font-semibold'>
                    <Link href='/'>Home</Link>
                </li>
                <li onClick={()=> setNav(false)} className='pb-2 hover:text-[#6116EA] hover:scale-105 uppercase font-semibold'>
                    <Link href='/#about'>About</Link>
                </li>
                <li onClick={()=> setNav(false)} className='pb-2 hover:text-[#6116EA] hover:scale-105 uppercase font-semibold'>
                    <Link href='/#skills'>Skills</Link>
                </li>
                <li onClick={()=> setNav(false)} className='pb-2 hover:text-[#6116EA] hover:scale-105 uppercase font-semibold'>
                    <Link href='/#project'>Project</Link>
                </li>
                <li onClick={()=> setNav(false)} className='hover:text-[#6116EA] hover:scale-105 uppercase font-semibold'>
                    <Link href='/#contacts'>Contact</Link>
                </li>
            </ul>
            <div className='pt-10'>
              <p className='uppercase font-semibold text-[#6116EA]'>let's connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 hover:scale-125 cursor-pointer ease-in duration-200'>
                  <Link href='https://github.com/tahasintonmoy2'>
                <AiOutlineGithub
                size='25'
              />
              </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 hover:scale-125 cursor-pointer ease-in duration-200'>
                  <Link href='https://stackoverflow.com/users/20423066/tahasin-hossan'>
                <BsStackOverflow
                size='25'
              />
              </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 hover:scale-125 cursor-pointer ease-in duration-200'>
                  <Link href='https://www.fiverr.com/yourstonmoy'>
                <SiFiverr
                size='25'
              />
              </Link>
                </div>
              </div>
            </div>  
        </div>
        </div>
      </div>
      </div>
    )
  }

export default NavBar
