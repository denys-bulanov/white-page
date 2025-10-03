'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Title from '@/src/shared/Title/Title'
import Head from '@/src/shared/Head/Head'
import Popup from '@/src/shared/Popup/Popup'

const percents = [
  { title: 'Understanding your preferences' },
  { title: 'Creating AI Companion to your preferences' },
  { title: 'Putting the finishing touches' },
]

const questions = [
  'Are you into degradation or humiliation play?',
  'Would you try dominance and submission in the bedroom?',
  'Do you enjoy incorporating restraints (handcuffs, ropes, blindfolds, etc.)?',
]

export default function Analyzing() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState([0, 0, 0])
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (currentStep < 3) {
      setShowPopup(false)
      let start: number | null = null

      const animate = (timestamp: number) => {
        if (!start) start = timestamp
        const elapsed = timestamp - start
        const percent = Math.min(100, (elapsed / 2000) * 100) // 2 секунды до 100%

        setProgress(prev => {
          const copy = [...prev]
          copy[currentStep] = percent
          return copy
        })

        if (percent < 100) {
          requestAnimationFrame(animate)
        } else {
          setTimeout(() => setShowPopup(true), 300)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [currentStep])

  const handleAnswer = () => {
    if (currentStep < questions.length - 1) {
      setShowPopup(false)
      setCurrentStep(s => s + 1)
    } else {
      router.push('/register')
    }
  }

  return (
    <div className='mt-10 flex flex-col items-center'>
      <div className='relative flex flex-col gap-4 items-center'>
        <Title text='Almost done' />
        <Head text='Analysing your desires' fontSize='text-[28px] md:text-[44px]' />
      </div>

      <div className=' w-full h-[350px] md:w-[500px] md:h-[450px] relative rounded-3px mt-10'>
        <Image src='/quiz/analyzing.png' quality={100} fill alt='image' className='rounded-3px' />
      </div>

      <div className='flex flex-col gap-5 w-full mt-10'>
        {percents.map((item, idx) => (
          <div key={idx} className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between gap-5'>
              <Head text={item.title} fontSize='text-[16px] ' />
              <span className='font-anton text-colors-purpleSoft w-[40px] text-end'>{Math.round(progress[idx])}%</span>
            </div>
            <div className='h-2 relative w-full bg-purple-900 rounded-full overflow-hidden'>
              <div className='absolute top-0 left-0 h-full bg-purple-500 rounded-full' style={{ width: `${progress[idx]}%` }} />
            </div>
          </div>
        ))}
      </div>

      {showPopup && <Popup text={questions[currentStep]} handleClick={handleAnswer} title='To move forward, specify' isQuestion />}
    </div>
  )
}
