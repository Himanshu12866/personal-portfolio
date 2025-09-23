import React from 'react'

const ContactBanner = () => {
   const words = [
    "C","o","n","t","a","c","t"," ","M","e"
  ]
  return (
    <div className='flex justify-center items-center pt-48 pb-36 w-full bg-transparent'>
      <div className='text-center'>
    <h1 className='lg:text-8xl md:text-6xl text-4xl font-bold tracking-wide'>
          { words.map((word , index) => <span data-aos="fade-up" data-aos-delay={index*50}>{word}</span>)}
        </h1>
      
      </div>
    </div>
  )
}

export default ContactBanner
