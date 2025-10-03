import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'
import { useRouter } from 'next/navigation'

const OurMission = () => {
  const router = useRouter()

  return (
    <section className=' px-4 md:px-0  pb-10 md:pb-0  h-full max-w-7xl mx-auto flex-1 flex flex-col md:flex-row gap-10 relative z-10 '>
      <div className=' flex-2 relative flex items-end justify-center'>
        <Image src='/Couple.png' quality={100} alt='Couple' width={900} height={700} className='w-full h-auto max-w-[900px]' />
      </div>

      <div className='flex-1 flex flex-col gap-5 justify-center text-center md:text-left'>
        <div>
          <Title text='Our Mission' />
        </div>
        <div className=''>
          <Head purpleFirst text='We help Men to communicate properly' fontSize='text-[28px] md:text-[42px]' />
        </div>
        <div className='mt-1 md:mt-12 mb-3 '>
          <Paragraph
            text='We teach adult men simple, effective skills to create healthy relationships: listening to emotions, speaking needs clearly, respecting boundaries, and negotiating agreements. No tricks, no pickup tactics. Just respect, consent, and responsibility. We believe mature relationships are learnable skills.'
            color='text-white/60'
          />
        </div>
        <Button text='Discover Courses' onClick={() => router.push('/courses')} />
      </div>
    </section>
  )
}

export default OurMission
