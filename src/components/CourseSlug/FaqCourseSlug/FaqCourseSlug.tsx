import React from 'react'

import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer'
import Footer from '../../../shared/Footer/Footer'

const questionAnswers = [
  {
    question: 'Do I need a partner to practice?',
    answer: 'No - use everyday situations.',
  },
  {
    question: 'No time this week?',
    answer: 'Watch anytime; 6‑month access.',
  },
  {
    question: 'How much time per week?',
    answer: 'No. It’s education; see a therapist if you’re in crisis.',
  },
]

const FaqCourseSlug = () => {
  return (
    <div className='  relative min-h-screen flex flex-col'>
      <section className=' py-10 md:py-0 flex-1 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center'>
        <div className='flex-1 flex flex-col gap-5 justify-center text-center md:text-left'>
          <div>
            <Title text='FAQ' />
          </div>
          <Head text='We know what you want to ask' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <div className='relative flex-[2] grid grid-cols-[repeat(2,auto)] gap-4 justify-center items-center'>
          <Image src='/heartFull.svg' quality={100} alt='heart' width={270} height={270} className='absolute top-20 md:top-36 -left-5' />
          <Image src='/heartFull.svg' quality={100} alt='heart' width={220} height={220} className='absolute -top-12 right-4 rotate-[70deg]' />
          <div className='flex flex-col gap-4'>
            {questionAnswers.map(item => (
              <QuestionAnswer question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default FaqCourseSlug
