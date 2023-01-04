import React from 'react'
import Image from 'next/image'
import { Netflix, Property , Crypto, Twitch} from '../public/assets'
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-18 pt-36'>
        <h3 className=' text-red-600 uppercase'>Project</h3>
        <h1 className=' uppercase pb-5'>What i've build </h1>
        <div className=' grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Property Finder' 
          backgroundImg={Property} 
          projectUrl='/property'/>
          <ProjectItem title='Netflix' 
          backgroundImg={Netflix} 
          projectUrl='/netflix'/>
          <ProjectItem title='Crypto' 
          backgroundImg={Crypto} 
          projectUrl='/property'/>
          <ProjectItem title='Twitch' 
          backgroundImg={Twitch} 
          projectUrl='/property'/>
        </div>
      </div>
    </div>
  )
}

export default Project
