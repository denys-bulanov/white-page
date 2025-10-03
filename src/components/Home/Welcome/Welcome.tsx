import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Header from '@/src/shared/Header/Header'
import Button from '@/src/shared/Button/Button'
import MessageWrap from '@/src/shared/Message/MessageWrap'
import { useRouter } from 'next/navigation'

type MessageType = {
  author: string
  text: string
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const Welcome = () => {
  const messages1: MessageType[] = [
    {
      author: 'Camila Baby',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate,',
      corner: 'bottom-left',
    },
    {
      author: 'Simon',
      text: 'Jorem ipsum dolor sit amet,',
      corner: 'bottom-right',
    },
  ]
  const messages2: MessageType[] = [
    {
      author: 'Simon',
      text: 'Jorem ipsum dolor sit amet,',
      corner: 'bottom-right',
    },
    {
      author: 'Camila Baby',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate,',
      corner: 'bottom-left',
    },
  ]
  const messages3: MessageType[] = [
    {
      author: 'Camila Baby',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate,',
      corner: 'bottom-left',
    },
    {
      author: 'Simon',
      text: 'Jorem ipsum dolor sit amet,',
      corner: 'bottom-right',
    },
    {
      author: 'Camila Baby',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate,',
      corner: 'bottom-left',
    },
  ]
  const router = useRouter()

  return (
    <div className='relative min-h-screen overflow-hidden flex flex-col'>
      <Header />
      <section className='mt-[93px] max-w-7xl mx-auto flex-1 flex flex-col md:flex-row gap-10 relative z-10'>
        <div className='flex-1 flex px-4 md:px-0 flex-col justify-start text-left  md:justify-center  '>
          <Head purpleFirst text='relationships.' purpleText='Understand women better. Build healthy' fontSize='text-[40px] md:text-[56px]' />
          <div className='mt-5 mb-10'>
            <Paragraph text='Practical, ethical courses for men - empathy, boundaries, communication, and respectful dating. No manipulation. Ever.' />
          </div>
          <Button text='Discover Courses' onClick={() => router.push('/courses')} />
        </div>
        <div className='flex-2 relative flex items-end justify-center'>
          <div className='absolute -z-20 w-[170%] md:w-[130%] h-full flex justify-center items-center -top-28 md:top-auto'>
            <Image src='/BigHeart.png' quality={100} alt='Background shape' fill className='object-contain' />
          </div>
          <Image src='/WelcomeImage.png' alt='Welcome' quality={100} width={900} height={700} className='w-full h-auto max-w-[900px]' />

          <MessageWrap messages={messages1} position='top-0 hidden md:block' />
          <MessageWrap messages={messages2} position='top-1/3 left-0 hidden md:block' />

          <MessageWrap messages={messages3} position='-top-10 right-4  md:bottom-5 md:right-0  md:top-auto -z-10 md:z-0' />
        </div>
      </section>
    </div>
  )
}

export default Welcome
