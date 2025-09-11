import React from 'react'

const SkillBanner = () => {
  const words = [
    "T" ,"e","c","h"," ","A","r","s","e","n","a","l"
  ]
  return (
    <div className='flex justify-center items-center pt-48 pb-36 w-full'>
      <div className='text-center'>
        <h1 className='text-8xl font-bold tracking-wide'>
          { words.map((word , index) => <span key={index} data-aos="fade-up" data-aos-delay={index*50}>{word}</span>)}
        </h1>
        <p className='font-code mt-4'>Home - Skills</p>
      </div>
    </div>
  )
}

export default SkillBanner;

