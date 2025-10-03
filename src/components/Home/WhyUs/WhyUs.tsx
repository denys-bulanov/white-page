import React from 'react'

import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import Comment from './Comment/Comment'
import Image from 'next/image'

const comments = [
  {
    avatar: '/avatar1.png',
    text: '“First dates feel relaxed instead of tense.”',
    stars: 5,
  },
  {
    avatar: '/avatar2.png',
    text: '“Fewer fights, more problem‑solving.”',
    stars: 5,
  },
  {
    avatar: '/avatar3.png',
    text: '“I can say what I need without accusations.” Results vary. Educational content only - this is not psychotherapy.',
    stars: 4,
  },
]

const WhyUs = () => {
  return (
    <section className=' px-4 md:px-0 h-full min-h-[700px] max-w-7xl mx-auto flex-1 flex flex-col overflow-hidden md:flex-row gap-10 relative z-10'>
      <div className='flex-1 flex flex-col gap-5 justify-center text-center md:text-left'>
        <div>
          <Title text='Why Us?' />
        </div>
        <Head purpleFirst text='We know what you want to ask' fontSize='text-[28px] md:text-[42px]' />
      </div>

      <div className='relative flex-[2] grid grid-cols-[repeat(2,auto)] gap-0 md:gap-4 justify-center items-center'>
        <Image src='/heartFull.svg' quality={100} alt='heart' width={270} height={270} className='absolute bottom-28 left-0' />
        <Image src='/heartFull.svg' quality={100} alt='heart' width={220} height={220} className='absolute top-48 right-20 rotate-[70deg]' />
        <div className='flex flex-col gap-4 '>
          {comments.map(item => (
            <Comment src={item.avatar} text={item.text} stars={item.stars} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
