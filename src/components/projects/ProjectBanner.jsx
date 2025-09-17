import React from 'react'
const ProjectBanner = () => {
  const words = [
    "C","r","a" , "f","t","e","d"," ","W","i","t","h"," " , "C" , "o" , "d" , "e"
  ]
  return (
    <div className='flex justify-center items-center pt-48 pb-36 w-full'>
      <div className='text-center'>
        <h1 className='text-8xl font-bold tracking-wide'>
          { words.map((word , index) => <span data-aos="fade-up" data-aos-delay={index*50}>{word}</span>)}
        </h1>
       
      </div>
    </div>
  )
}

export default ProjectBanner;

// Crafted with Code