import React from 'react'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'
import Member from './Member/Member'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const team = [
  {
    name: 'Andrii Romaniuk',
    position: 'Gestalt, Contact & Emotions',
    src: '/team1.png',
  },
  {
    name: 'Dr. Olena Kravchenko',
    position: 'CBT, Emotional Regulation',
    src: '/team2.png',
  },
  {
    name: 'Dr. Nataliia Sych',
    position: 'Sex Education, Consent & Safety',
    src: '/team3.png',
  },
  {
    name: 'Maryna Dorosh',
    position: 'Schema Therapy, Boundaries',
    src: '/team4.png',
  },
  {
    name: 'Petro Danyliuk',
    position: 'Family Consultant, Agreements',
    src: '/team5.png',
  },
]

const Team = () => {
  return (
    <section className='h-full max-w-7xl mx-auto flex-1 flex flex-col md:flex-row gap-10 relative z-10'>
      <div className='px-4 md:px-0  flex-1 flex flex-col gap-5 justify-center text-center md:text-left'>
        <div>
          <Title text='Team' />
        </div>
        <Head purpleFirst text='Our Psychologists' fontSize='text-[28px] md:text-[42px]' />
        <div className='mt-12 mb-3'>
          <Paragraph
            text='You’ll learn from practicing psychologists and relationship educators (CBT, Schema Therapy, Gestalt, Sex‑Ed). Ethics and consent are our baseline rules.'
            color='text-white/60'
          />
        </div>
        <Button text='Explore our team' />
      </div>

      <div className='flex-[2]'>
        <div className='hidden md:grid grid-cols-[repeat(2,auto)] gap-4 justify-center items-center'>
          <div className='flex flex-col gap-4'>
            {team.slice(0, 2).map((item, i) => (
              <Member key={i} src={item.src} text={item.name} position={item.position} />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            {team.slice(2).map((item, i) => (
              <Member key={i} src={item.src} text={item.name} position={item.position} />
            ))}
          </div>
        </div>

        <div className='block md:hidden h-[320px]'>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.3}
            centeredSlides={true}
            spaceBetween={5}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-500',
            }}
            loop={true}
            className='w-full h-full'
          >
            {team.map((item, i) => (
              <SwiperSlide key={i} className='justify-center'>
                <Member src={item.src} text={item.name} position={item.position} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Team
