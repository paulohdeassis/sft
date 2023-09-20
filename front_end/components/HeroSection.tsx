import React from 'react'
import Image from 'next/image'
import { type } from 'os'

type Props ={
  phone?: string
}

export default function HeroSection({phone}:Props): JSX.Element {
  return (  
    <> 
    <div className='flex sm:flex-col-reverse lg:flex-row md:justify-center md:align-middle md:px-16 lg:py-16 xl:px-24 2xl:px-44'> 

        <div className='w-full mt-8 justify-start mr-10'>
            <h1 className='text-main-purple md:hidden lg:block text-4xl my-8 font-bold'>Next-Level Marketing Collaboration</h1>
            <p className='text-text-grey mt-4 mb-8 font-semibold leading-6 text-lg'>
                We are a dynamic alliance of marketing agencies,
                uniting partners worldwide. Our collaborative 
                creativity delivers unrivaled results directly to
                you. Each partner excels in their niche, ensuring
                comprehensive expertise for your marketing needs. 
                Together, we drive success, exceeding expectations. 
                Welcome to our limitless world of transformative outcomes.
            </p>

            <button type='button'>
          <a href={`https://api.whatsapp.com/send?phone=${phone}&text=Hi`} 
            className='bg-main-purple hover:bg-light-purple  text-white font-semibold text-bold text-base flex items-center rounded-2xl py-4 gap-4 px-8'>
            <Image src='/whatsapp-icon.svg' height={24} width={24} alt='whatsapp icon' className='self-center'/>
            <p>CLICK HERE TO WHATSAPP</p>
          </a>
        </button>
        </div>

      
        <Image src='/hero.png' alt='picture of and asian woman holding a tablet'  width={550} height={400} />
        <h1 className='text-main-purple lg:hidden text-4xl my-8 font-bold'>Next-Level Marketing Collaboration</h1>
 
    </div>
    <span className='text-8xl font-bold text-transparent z-10 border-light-purple'>GROW YOUR BUSINESS</span>
    </>
  )
}
