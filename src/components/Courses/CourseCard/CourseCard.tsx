'use client'
import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import ArrowButton from '@/src/shared/ArrowButton/ArrowButton'
import { useRouter } from 'next/navigation'

import { setCourse } from '@/lib/store/slices/courseSlice'
import { useAppDispatch } from '@/lib/hooks'

type CourseCardType = {
  title: string
  duration: string
  level: string
  description: string
  image: string
  slug: string
}

const CourseCard = ({ title, duration, level, description, image, slug }: CourseCardType) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(
      setCourse({
        title,
        duration,
        level,
        description,
        slug,
      }),
    )
    router.push(`/courses/${slug}`)
  }

  return (
    <div className='p-3 pb-5 cursor-pointer flex flex-1 flex-col bg-white/10 backdrop-blur-md border border-colors-purpleSoft/70 rounded-2xl overflow-hidden  transition-transform duration-300 ease-in-out hover:scale-105 '>
      <div className='w-full relative  h-[300px] rounded-2xl'>
        <Image src={image} quality={100} alt='cart' fill className='object-cover rounded-2xl' />
      </div>
      <div className='flex-1 flex  justify-center  py-3 flex-col gap-2'>
        <div className='flex w-full justify-between items-center gap-4'>
          <Head text={title} fontSize='text-[20px] md:text-[25px]' />
          <div>
            <ArrowButton opacity onClick={handleClick} />
          </div>
        </div>
        <p className='text-sm  text-white/60'>{description}</p>
      </div>
      <div className='flex items-center gap-5'>
        <div className='px-3 py-2 gap-2 text-colors-pinkSoft flex items-center border border-colors-pinkSoft/30 bg-colors-pinkSoft/20 rounded-full font-thin'>
          <Image
            src={level === 'Beginner' ? '/user-star.svg' : level === 'Advanced' ? '/user-xmark.svg' : '/user-love.svg'}
            alt='cart'
            width={24}
            height={24}
            className='object-cover'
          />
          <span>{level}</span>
        </div>
        <div className=' px-10 py-2 gap-2 flex items-center bg-g_lightPurpleToPurple rounded-full font-thin'>
          <Image src={'/clock.svg'} quality={100} alt='cart' width={20} height={20} className='object-cover' />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
