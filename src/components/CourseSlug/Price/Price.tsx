import React from 'react'
import Head from '@/src/shared/Head/Head'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'
import { useRouter } from 'next/navigation'

const Price = () => {
  const router = useRouter()
  return (
    <div className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center'>
      <section className='max-w-7xl  flex gap-10 relative items-center justify-center'>
        <div
          className='flex text-center md:text-left  rounded-3xl w-[100%] h-[350px] md:w-[100%] relative md:pl-40 md:items-center justify-center md:justify-normal
         bg-g_purpleWaves
        '
        >
          <div className='md:pr-[700px] pt-14 px-5 md:pt-0 md:px-0'>
            <Title text='Price' />
            <div className='mt-3'>
              <Head text='get full access to course' fontSize='text-[28px] md:text-[42px]' />
            </div>
          </div>

          <div className='bg-[#1a003c] mt-40 md:mt-0 justify-between p-5 rounded-3xl border border-colors-pinkSoft/20 absolute w-[120%] h-[430px] md:h-[430px] md:w-[530px]  md:-top-9 md:right-16 flex flex-col'>
            <div
              className=' p-3 flex items-center justify-center border border-colors-purpleDark rounded-3xl shadow-violentPremium
                 bg-g_notFor
            '
            >
              <span className='font-anton '>
                Price <span className='text-[32px]'>10$</span>
              </span>
            </div>
            <div className='flex flex-col gap-6 text-white/60'>
              <div>
                <span className='font-bold text-white'>Includes:</span> 6-week access window, downloadable resources, weekly online Q&A, peer chat,
                and updates if lessons are revised within 6 months
              </div>
              <div>
                <span className='font-bold text-white'>Taxes:</span> added at checkout where applicable
              </div>
              <div>
                <span className='font-bold text-white'>Payment methods:</span> major cards and Apple Pay if enabled
              </div>
            </div>
            <Button text='Discover Courses' onClick={() => router.push('/courses')} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Price
