'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import Xarrow from 'react-xarrows'

const list = [
  'Is this private and low pressure.',
  'Is it about a choice, action, or effect.',
  'Is it short and specific.',
  'Is it free of comparison and hidden requests.',
  'Does it leave room for a neutral response.',
]

const QuickChecklist = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='relative px-4 md:px-0 min-h-screen overflow-hidden flex justify-center'>
      <section className='w-full max-w-4xl my-10 flex flex-col gap-10 relative items-center'>
        <Head text='Quick checklist before you compliment' fontSize='text-[28px] md:text-[42px]' />

        <div className='flex flex-col gap-7 md:gap-3 w-full relative'>
          {list.map((item, i) => (
            <div
              key={i}
              id={`box${i + 1}`}
              className='flex w-full gap-3 p-4 bg-g_darkPurpleToDarkPurple border border-colors-pinkSoft/80 rounded-2xl'
            >
              <div>
                <Image src='/checkSquare.svg' quality={100} alt='icon' width={24} height={24} />
              </div>
              <div>
                <span>{item}</span>
              </div>
            </div>
          ))}

          {!isMobile ? (
            <>
              <div id='anchor1to2' className='absolute right-[-40px] top-[62px] h-[1px] w-[1px] bg-colors-pinkSoft' />
              <div id='anchor2to3' className='absolute left-[-40px] top-[132px] h-[1px] w-[1px] bg-colors-pinkSoft' />
              <div id='anchor3to4' className='absolute right-[-40px] top-[202px] h-[1px] w-[1px] bg-colors-pinkSoft' />
              <div id='anchor4to5' className='absolute left-[-40px] top-[272px] h-[1px] w-[1px] bg-colors-pinkSoft' />

              <Xarrow
                start='box1'
                end='anchor1to2'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='right'
                endAnchor='top'
              />
              <Xarrow
                start='anchor1to2'
                end='box2'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='bottom'
                endAnchor='right'
              />

              <Xarrow
                start='box2'
                end='anchor2to3'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='left'
                endAnchor='top'
              />
              <Xarrow
                start='anchor2to3'
                end='box3'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='top'
                endAnchor='left'
              />

              <Xarrow
                start='box3'
                end='anchor3to4'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='right'
                endAnchor='top'
              />
              <Xarrow
                start='anchor3to4'
                end='box4'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='bottom'
                endAnchor='right'
              />

              <Xarrow
                start='box4'
                end='anchor4to5'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={0}
                startAnchor='left'
                endAnchor='top'
              />
              <Xarrow
                start='anchor4to5'
                end='box5'
                curveness={0.6}
                color='#B168FF'
                strokeWidth={2}
                path='smooth'
                headSize={4}
                startAnchor='bottom'
                endAnchor='left'
              />
            </>
          ) : (
            <>
              {list.map((_, i) =>
                i < list.length - 1 ? (
                  <Xarrow
                    key={i}
                    start={`box${i + 1}`}
                    end={`box${i + 2}`}
                    color='#B168FF'
                    strokeWidth={2}
                    path='straight'
                    headSize={4}
                    startAnchor='bottom'
                    endAnchor='top'
                  />
                ) : null,
              )}
            </>
          )}
        </div>

        <div className='flex items-start w-full mb-5'>
          <p className=' text-white/60 text-sm md:text-base'>If you can tick those boxes, your words will likely land as care instead of demand.</p>
        </div>
        <div className='relative w-full h-[300px] md:h-[500px] '>
          <Image src='/blogSlug3.png' quality={100} alt='image' fill className='object-cover rounded-2xl' />
          <div className='absolute bottom-0 left-0 right-0 flex  p-6 '>
            <div className='bg-colors-pinkSoft/40 rounded-2xl'>
              <p className='text-white  p-5 text-center text-sm md:text-base'>
                Ethical praise is not a trick. It is attention, consent, and honesty in a single sentence. When people feel seen without pressure,
                they relax. Trust grows. And relationships get easier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuickChecklist
