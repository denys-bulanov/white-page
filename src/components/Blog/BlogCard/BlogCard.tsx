'use client'
import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import ArrowButton from '@/src/shared/ArrowButton/ArrowButton'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/hooks'
import { setBlog } from '@/lib/store/slices/blogSlice'

type BlogCardType = {
  title: string
  level: string
  image: string
  slug: string
  author: string
  date: string
}

const BlogCard = ({ title, level, image, slug, author, date }: BlogCardType) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(
      setBlog({
        title,
        author,
        date,
        slug,
      }),
    )
    router.push(`/blog/${slug}`)
  }

  return (
    <div className='p-3 pb-5 cursor-pointer flex w-[100%]  md:max-w-none h-[350px] md:h-auto md:flex-1  flex-col bg-white/10 backdrop-blur-md border border-colors-purpleSoft/70 rounded-2xl overflow-hidden  transition-transform duration-300 ease-in-out md:hover:scale-105 '>
      <div className='relative h-[200px] w-[full] md:h-[250px]'>
        <Image src={image} quality={100} alt='cart' fill className='object-cover' />
      </div>
      <div className='md:flex-1 flex  w-full justify-center  py-3 flex-col gap-2'>
        <div className='flex w-full  items-center '>
          <Head text={title} fontSize='text-base md:text-[25px]' />
        </div>
      </div>
      <div className='flex items-center gap-5 w-full'>
        <div className='px-3 py-2 gap-2 text-colors-pinkSoft flex items-center border border-colors-pinkSoft  rounded-full font-thin'>
          <Image
            src={level === 'Beginner' ? '/user-star.svg' : level === 'Advanced' ? '/user-xmark.svg' : '/user-love.svg'}
            alt='cart'
            width={24}
            height={24}
            className='object-cover'
          />
          <span className='text-sm md:text-base'>{level}</span>
        </div>
        <div>
          <ArrowButton onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
