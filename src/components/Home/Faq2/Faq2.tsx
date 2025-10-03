import React from 'react'

import Head from '@/src/shared/Head/Head'

import Title from '@/src/shared/Title/Title'
import Footer from '../../../shared/Footer/Footer'

const Faq2 = () => {
  const questions = [
    {
      question: 'Is this pickup?',
      answer: 'No. We teach ethical, adult relationship skills.',
    },
    {
      question: 'Will it help if I’m already in a relationship?',
      answer: 'Yes',
    },
    {
      question: 'How much time per week?',
      answer: '2–3 hours + real‑life practice.',
    },
  ]

  return (
    <div className='relative min-h-screen flex flex-col'>
      <section className='px-4 md:px-0 flex-1 my-10 max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center'>
        <div>
          <Title text='FAQ' />
        </div>
        <Head text='We know what you want to ask' fontSize='text-[28px] md:text-[42px]' />

        <div className='flex flex-col md:flex-row gap-6'>
          {questions.map((item, i) => (
            <div key={i} className='p-5 w-full md:w-auto flex justify-between flex-col border border-white/20 rounded-xl'>
              <p>{item.question}</p>
              <p className='mt-2 text-white/60'>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Faq2
