import React from 'react'
import Head from '@/src/shared/Head/Head'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'
import Card from './Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useRouter } from 'next/navigation'

const Solution = () => {
  const coursesFor = [
    {
      src: '/coursesFor1.png',
      text: 'You want to date ethically and confidently - without games.',
    },
    {
      src: '/coursesFor2.png',
      text: 'You’re in a relationship with recurring arguments and silent resentment.',
    },
    {
      src: '/coursesFor3.png',
      text: 'You struggle to read a partner’s emotions or to talk about your own.',
    },
    {
      src: '/coursesFor4.png',
      text: 'You want stability, closeness, and mutual respect.',
    },
  ]
  const router = useRouter()
  return (
    <section className='pb-20 h-full max-w-7xl mx-auto flex-1 flex flex-col  gap-10 relative z-10'>
      <div className='flex flex-col items-center gap-5 text-center'>
        <Title text='Solution' />
        <Head text='Who These Courses Are For' fontSize='text-[28px] md:text-[42px]' />
      </div>
      <div className=' gap-10  hidden md:flex '>
        {coursesFor.map(item => (
          <Card src={item.src} text={item.text} />
        ))}
      </div>

      <div className='block md:hidden h-[340px] px-4'>
        <Swiper
          modules={[Pagination]}
          slidesPerView='auto'
          centeredSlides={true}
          spaceBetween={10}
          initialSlide={0}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-400',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-500', // активный цвет
          }}
          loop={true}
          className='w-full h-full'
        >
          {coursesFor.map((item, i) => (
            <SwiperSlide key={i} className='justify-center'>
              <Card src={item.src} text={item.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='w-full md:w-72 md:mx-auto px-4 md:px-0 '>
        <Button text='Discover Courses' onClick={() => router.push('/courses')} />
      </div>
    </section>
  )
}

export default Solution
