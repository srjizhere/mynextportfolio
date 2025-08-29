import React from 'react'
import { FaCodepen, FaReact } from 'react-icons/fa'
import ResumeCard from './ResumeCard'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%]
        mx-auto grid grid-cols-1
         xl-grid-cols-2 gap-10'>
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold
                 text-white'>
                    My work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard Icon={FaCodepen} role='Full-Stack Developer'/> 
                    <ResumeCard Icon={FaReact} role='Front-End Developer'/> 
                    <ResumeCard Icon={BsDatabase} role='Backend-Stack Developer'/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume