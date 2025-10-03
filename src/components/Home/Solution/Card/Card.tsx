import React from 'react'
import Image from 'next/image'

type CartType = {
  src: string
  text: string
}

const Card = ({ text, src }: CartType) => {
  return (
    <div className='cursor-pointer flex flex-1  h-[300px]  md:h-auto w-auto flex-col bg-white/10 backdrop-blur-md border border-colors-purpleSoft/70 rounded-2xl overflow-hidden '>
      <div className='relative w-full  h-[260px]'>
        <Image src={src} quality={100} alt='cart' fill className='object-cover' />
      </div>
      <div className='flex-1 flex items-center justify-center px-4 py-3'>
        <p className='text-sm  text-white/60'>{text}</p>
      </div>
    </div>
  )
}

export default Card
