import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Contacts } from '../public/assets'
import { ToastContainer, toast } from 'react-toastify';
import {AiOutlineGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {SiFiverr} from 'react-icons/si'

const Contact =()=> {
  
   const send = ()=> toast.success('Email Send Successfull', {
    position: "top-right",
    autoClose: 5000,
    });
  const initsValues ={ name:"", email:"", messages:"" }  
  const [ formValues , setformValues] = useState(initsValues)
  const handleChange =(e)=>{
      const {name, value} = e.target;
      setformValues({ ...formValues, name:value, email:value});
      console.log( formValues);
  }

  return (
    <div id='contacts' className=' w-full lg:h-screen'>
      <div className=' max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <h3 className=' text-red-600 uppercase tracking-widest'>Contact</h3>
        <h1 className=' tracking-widest uppercase'> get in touch</h1>
        <div className=' grid lg:grid-cols-5 gap-8'>
            
            <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className=' lg:p-4 h-full'>
                    <div>
                     <Image
              src={Contacts}
              alt='/'
              className='cursor-pointer hover:scale-105 rounded-xl duration-300'
            />
            <div>
                <h2 className=' uppercase pt-5 '>mern</h2>
                <h4 className=' text-red-600 pb-5'>I'm Mern stack developer</h4>
                <h4 className=' text-red-600 pb-5'>I am available for freelance or full-time positions. contact</h4>
                <div>
                  <h4 className=' text-center'>Contact with me</h4>
                </div>
                <div className=' flex items-center justify-center max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg p-2 shadow-gray-400 hover:scale-125 text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff] cursor-pointer ease-in duration-200 mr-4'>
                   <Link href='https://www.instagram.com/tahasin_x72'>
                        <FiInstagram size={25} />                     
                   </Link>
                </div>
                <div className='rounded-full ml-7 shadow-lg shadow-gray-400 p-2 hover:scale-125 text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff] cursor-pointer ease-in duration-200 mr-4'>
                    <BsFacebook size={25}/>
                </div>
                <div className='rounded-full ml-7 shadow-lg p-2 shadow-gray-400 hover:scale-125 text-orange-500 hover:bg-gradient-to-r from-[#6116EA] to-[#709dff] cursor-pointer ease-in duration-200'>
                   <Link href=''>
                        <SiFiverr size={25}/>                               
                   </Link>
                   </div>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div className=' col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4'>
         <div className=' py-4'>
           <form>
            <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
              <div className=' flex flex-col'>
                <label className=' uppercase font-bold'>Name</label>
                <input className=' border-2 rounded-lg p-3 flex border-gray-400' type="text" placeholder='Type your name' value={ formValues.name} onChange={handleChange}/>
              </div>
              <div className=' flex flex-col'>
                <label className=' uppercase font-bold'>Email</label>
                <input className=' border-2 rounded-lg p-3 flex border-gray-400' type="text" placeholder='Type your email' value={ formValues.email} onChange={handleChange}/>
              </div>
            </div>
            <div className=' flex flex-col pb-5'>
                <label className=' uppercase font-bold'>Message</label>
                <textarea className='pl-2 pt-1 border-2 rounded-lg border-gray-400' cols="30" rows="15" value={ formValues.messages} onChange={handleChange}></textarea>
              </div>
              <div className='items-center text-center pt-3'>

              <ToastContainer/>
                <a className=' rounded-xl font-semibold w-full p-4 uppercase bg-[#131311] hover:bg-gradient-to-r from-[#6116EA]
                 to-[#709dff] text-white' href="/#about" onClick={send}>Send message</a>
              </div>
           </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
