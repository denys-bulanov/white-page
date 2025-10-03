'use client'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Xarrow from 'react-xarrows'

const HowItWorks = () => {
  const features = [
    'Pick your course.',
    'Watch short lessons and complete practical exercises.',
    'Apply tools in real life.',
    'Get support from instructors during weekly online Q&As.',
    'Lock in change with a 30-day follow-up plan.',
  ]

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'>
      <section className='text-center max-w-7xl mx-auto flex flex-col gap-10 relative items-center '>
        <div>
          <Title text='How it works' />
        </div>
        <Head text='Simple butt effective habits that  will boost your emotional Entelligence' fontSize='text-[28px] md:text-[42px]' />
        <div className='relative w-full max-w-5xl mt-5 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-[auto,auto] gap-12 items-start relative z-10'>
            {features.map((feature, i) => (
              <div
                key={i}
                id={`box${i}`}
                className={`
              rounded-full border border-purple-400/60
              bg-white/10 backdrop-blur-md px-6 py-4 text-white
              shadow-customSecondaryPurple
              ${i === features.length - 1 ? 'md:col-span-2 md:justify-self-center w-[100%] mx-auto text-left' : 'text-center'}
            `}
              >
                <p className='text-lg leading-relaxed'>{feature}</p>
              </div>
            ))}
          </div>
          <div className='absolute -top-[40px] -left-[10px] sm:top-[-41px] sm:left-0'>
            <Image src='/flag.svg' alt='flag' width={42} height={51} className='object-contain' />
          </div>
          <div className='absolute -bottom-[70px] right-[150px] sm:right-4 sm:bottom-[-30px] z-10'>
            <Image src='/heartFull.svg' quality={100} alt='heart' width={150} height={150} className='object-contain' />
          </div>

          {!isMobile && (
            <>
              <div id='anchor2to4' className='absolute right-[-65px] top-[84px] h-[1px] w-[1px] bg-[#8049f3]' />
              <div id='anchor3to4' className='absolute left-[-55px] bottom-[85px] h-[1px] w-[1px] bg-[#8049f3]' />
            </>
          )}

          {isMobile ? (
            features.map((_, i) => {
              if (i === features.length - 1) return null
              return (
                <Xarrow
                  key={i}
                  start={`box${i}`}
                  end={`box${i + 1}`}
                  color='rgba(128, 73, 243, 1)'
                  strokeWidth={2}
                  path='smooth'
                  headSize={4}
                  startAnchor='bottom'
                  endAnchor='top'
                />
              )
            })
          ) : (
            <>
              <Xarrow
                start='box0'
                end='box1'
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='left'
                endAnchor='right'
              />
              <Xarrow
                start='box1'
                end='anchor2to4'
                curveness={0.6}
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='right'
                endAnchor='bottom'
              />
              <Xarrow
                start='anchor2to4'
                end='box3'
                curveness={0.6}
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='bottom'
                endAnchor='right'
              />
              <Xarrow
                start='box2'
                end='anchor3to4'
                curveness={0.5}
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='left'
                endAnchor='top'
              />
              <Xarrow
                start='anchor3to4'
                end='box4'
                curveness={0.7}
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='bottom'
                endAnchor='left'
              />
              <Xarrow
                start='box3'
                end='box2'
                color='rgba(128, 73, 243, 1)'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='left'
                endAnchor='right'
              />
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
