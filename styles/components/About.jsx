import Link from 'next/link'
import React from 'react'
import { Aboutimg } from '../public/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className=' w-full md:h-screen items-center py-16 flex'>
      <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
        <div className=' col-span-2'>
               <p className=' text-red-600 font-bold pl-3 tracking-widest uppercase'>About</p>
            <h1 className='py-4 pl-3 uppercase'>Who I'am </h1>
            <p className='py-2 text-gray-600 pl-2'>
            // I am not your normal developer
             </p>
             <p className='py-2 text-gray-600 pl-10 pr-10'>
            I have spent the last 12 years in the fire service working as a professional
            firefighter & paramedic. I have always had a knack for technology and working
            with computers. In 2019 I started working with HTML & CSS to make some minor 
            edits on a small business website that I was operating. What I thought was just
            a few small edits turned into a love for programming.
            Fascinated with how intricate programming can be I was quickly 
            drawn to learn more. I started learning javascript and was even
            more enthused with 
            making websites interactive. I then started freelancing for e- 
            commerce companies
            on the Shopify platform. I am now spending my time
            building projects with React JS, Firebase, and 
            learning new technologies.
          </p>  
          <p className='py-2 text-gray-600 pl-10 pr-10'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link className=' pl-10 text-red-600 font-semibold uppercase' href='https://github.com/tahasintonmoy2'>Check Out My Latest projects</Link>
        <div>
        </div >
        </div>
        <div className=' pl-10 pr-10'>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
           <div className=' h-auto w-full m-auto rounded-xl justify-center shadow-xl items-center shadow-gray-600 p-3 hover:scale-105 cursor-pointer ease-in duration-300'>
          <img className=' rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
          />
        </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
