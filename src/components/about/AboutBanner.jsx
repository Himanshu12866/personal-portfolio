import React from 'react'

const AboutBanner = () => {
   const words = [
    "K","n","o","w"," ","M","e"," ","B","e","t","t","e","r"
  ]
  return (
    <div className='flex justify-center items-center pt-48 pb-36 w-full bg-transparent'>
      <div className='text-center'>
     <h1 className='text-8xl font-bold tracking-wide'>
          { words.map((word , index) => <span data-aos="fade-up" data-aos-delay={index*50}>{word}</span>)}
        </h1>
        <p className='font-code mt-4'>Home - About</p>
      </div>
    </div>
  )
}

export default AboutBanner
