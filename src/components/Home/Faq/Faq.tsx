import React from 'react'
import Head from '@/src/shared/Head/Head'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'
import Card from './Card/Card'
import { useRouter } from 'next/navigation'

const Faq = () => {
  const faqs = [
    {
      src: '/faq1.svg',
      title: 'Emotional Intelligence in Relationships',
      description: 'the foundation of empathy and self‑regulation.',
    },
    {
      src: '/faq2.svg',
      title: 'Communication and Conflict: Without Drama',
      description: 'de‑escalation and repair tools that actually work.',
    },
    {
      src: '/faq3.svg',
      title: 'Ethical Dating & First Dates',
      description: 'profile, conversation openers, consent, and safety.',
    },
  ]
  const router = useRouter()
  return (
    <div className=' px-4 md:px-0  pb-10 md:pb-0  relative py-10 md:py-0 min-h-screen overflow-hidden flex flex-col items-center justify-center'>
      <section className='max-w-7xl mx-auto flex flex-col gap-10 relative items-center  '>
        <div>
          <Title text='FAQ' />
        </div>
        <Head purpleFirst text='What We Offer (at a glance)' fontSize='text-[28px] md:text-[42px]' />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {faqs.map((item, i) => (
            <Card key={i} position={i} src={item.src} title={item.title} description={item.description} />
          ))}
        </div>

        <div className='w-full md:w-auto'>
          <Button text='Discover Courses' onClick={() => router.push('/courses')} />
        </div>
      </section>
    </div>
  )
}

export default Faq
