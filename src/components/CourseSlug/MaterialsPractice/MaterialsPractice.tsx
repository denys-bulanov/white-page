import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const MaterialsPractice = () => {
  const practices = [
    {
      title: 'Empathy Basics',
      text: [
        'What empathy is (and isn’t): support without rescuing.',
        'The Fact → Feeling → Need frame for clear talk.',
        'Practice: 5‑minute mirroring; print‑read feelings list.',
      ],
    },
    {
      title: 'Self‑Regulation',
      text: [
        'Pause, 4‑7‑8 breathing, short walks, body check.',
        'How to take a time‑out and return to finish the talk.',
        'Practice: trigger tracker; quick phrases to stop escalation.',
      ],
    },
    {
      title: 'Boundaries & Consent',
      text: ['Why “no” is a healthy word.', 'Asking and answering: yes/no/later/different format.', 'Templates: 7 everyday boundary sentences.'],
    },
    {
      title: 'Boundaries & Consent',
      text: ['Why “no” is a healthy word.', 'Asking and answering: yes/no/later/different format.', 'Templates: 7 everyday boundary sentences.'],
    },
    {
      title: 'I‑Statements',
      text: ['Formula: “When [fact], I feel [emotion], because [need]. Could we [request]?”', 'Examples for chores, money, time, intimacy.'],
    },
    {
      title: 'Support During Stress',
      text: ['Avoiding invalidation: from “it’s nothing” to “I hear you.”', 'Care gestures map (15 ideas).', 'Your 30‑day plan after the course.'],
    },
  ]

  const materials = [
    {
      text: 'Downloadable resources:',
      description: 'feelings vocabulary, boundary phrases, I‑statement cheatsheet.',
      icon: '/materials1.svg',
    },
    {
      text: 'Exercises',
      description: 'daily emotion journal; three I‑statement conversations.',
      icon: '/materials2.svg',
    },
    {
      text: 'Feedback & support',
      description: 'Weekly online Q&A and peer chat.',
      icon: '/materials3.svg',
    },
  ]

  return (
    <div className='mt-10 px-4 md:px-0  relative min-h-screen overflow-hidden flex flex-col items-center justify-center'>
      <section className='max-w-7xl mx-auto flex flex-col gap-10 relative items-center '>
        <Title text='Materials & Practice' />
        <div className='text-center'>
          <Head text='Access to best practises and materials' fontSize='text-[28px] md:text-[42px]' />
        </div>
        <div className='gap-2 grid grid-cols-1 md:grid-cols-3 items-stretch '>
          {practices.map((item, idx) => (
            <div className='bg-black/40 border h-[210px] flex flex-col justify-between border-colors-purpleSoft/30 p-4 rounded-3xl'>
              <div>
                <span className='uppercase text-[20px] font-anton  md:text-2xl'>
                  <span className=' text-colors-purpleSoft'>Module {idx + 1} </span>- {item.title}
                </span>
              </div>
              <ul className='text-white/30 list-disc list-inside text-sm flex flex-col gap-3'>
                {item.text.map(i => (
                  <li className=''>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className='h-[550px] flex rounded-3xl flex-col items-center w-full py-16 mb-20
          bg-g_materialPractice'
        >
          <Head text='Materials & Practice' fontSize='text-[28px]' />

          <div className='hidden md:grid grid-cols-3 items-center  justify-center gap-5 px-28 pt-10'>
            {materials.map(item => (
              <div className='h-[335px] flex flex-col border gap-5 border-colors-pinkSoft/30  bg-white/10 p-5 items-center rounded-3xl'>
                <div>
                  <Image src={item.icon} quality={100} alt='icon' width={251} height={157} />
                </div>
                <div className=' flex flex-col gap-5'>
                  <Head text={item.text} fontSize='text-[24px]' />
                  <span className='text-white/40'>{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='flex md:hidden h-[380px] w-[100%] px-4 mt-5'>
            <Swiper
              modules={[Pagination]}
              slidesPerView='auto'
              centeredSlides={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-gray-400',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-500',
              }}
              loop={true}
              className='w-full h-full'
            >
              {materials.map((item, i) => (
                <SwiperSlide key={i} className='!w-[100%] flex justify-center'>
                  <div className='h-[300px] w-[100%] flex flex-col border gap-5 border-colors-pinkSoft/30  bg-white/10 p-2 items-center rounded-3xl'>
                    <div>
                      <Image src={item.icon} quality={100} alt='icon' width={251} height={157} />
                    </div>

                    <div className='flex flex-col gap-5 items-center text-center'>
                      <Head text={item.text} fontSize='text-base md:text-[24px]' />
                      <span className='text-white/40 text-sm md:text-base'>{item.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MaterialsPractice
