'use client'

import { useState } from 'react'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import ArrowButton from '@/src/shared/ArrowButton/ArrowButton'
import { titles } from '../../Blog/mock-data'
import Footer from '@/src/shared/Footer/Footer'
import BlogCard from '../../Blog/BlogCard/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function AlsoLike() {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 3

  const totalPages = Math.ceil(titles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = titles.slice(startIndex, startIndex + itemsPerPage)
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className='  md:pt-0 h-full flex flex-col'>
      <section className='max-w-7xl pt-10 px-4 md:px-0 mx-auto flex flex-col gap-10 items-center'>
        <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
          <Title text='You may also like' />
          <Head text='Explore our other articles' fontSize='text-[28px] md:text-[42px]' />
        </div>
        <div className='hidden md:flex flex-col gap-5'>
          <div className='grid gap-6 md:grid-cols-3'>
            {currentItems.map((item, idx) => (
              <BlogCard key={idx} {...item} />
            ))}
          </div>
          <div className='flex items-end justify-end w-full gap-9'>
            <ArrowButton rotate onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
            <ArrowButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
          </div>
        </div>

        <div className='flex md:hidden h-[440px] w-full'>
          <Swiper
            modules={[Pagination]}
            slidesPerView='auto'
            centeredSlides={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-500', // активный цвет
            }}
            loop={true}
            className='w-full h-full max-w-[370px]'
          >
            {currentItems.map((item, i) => (
              <SwiperSlide key={i} className='!w-[100%] justify-center '>
                <BlogCard key={i} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </div>
  )
}
