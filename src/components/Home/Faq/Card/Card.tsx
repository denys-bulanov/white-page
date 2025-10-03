import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'

type CardProps = {
  src: string
  title: string
  description: string
  position: number
}

const Card = ({ src, title, description, position }: CardProps) => {
  const bgClasses = [`bg-g_faq_Card`, `bg-g_faq_Card2`, `bg-g_faq_Card3`]

  const bgClass = bgClasses[position] || bgClasses[0]

  return (
    <div
      className={`cursor-pointer rounded-2xl backdrop-blur-md 
      border border-white/20 p-5 flex flex-col justify-between flex-1
      ${bgClass}`}
    >
      <div className='flex justify-end'>
        <div className='border bg-white/10 border-white/20  rounded-xl p-2 flex items-center justify-center'>
          <Image src={src} quality={100} alt='icon' width={48} height={48} />
        </div>
      </div>

      <div className='mt-20'>
        <Head text={title} fontSize=' text-[22px] md:text-[32px]' font='font-base' />
        <p className='text-sm text-white/60 mt-2'>{description}</p>
      </div>
    </div>
  )
}

export default Card
