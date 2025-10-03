import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { cloneElement, useEffect, useState } from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'

type SliderValueMap = {
  [key: string]: number
}

type SlidersProps = {
  value: SliderValueMap
  onChange: (val: SliderValueMap) => void
}

export default function Sliders({ value, onChange }: SlidersProps) {
  const ideal = [
    {
      key: 'temperature',
      icon1: '/quiz/Snowflake.svg',
      text1: 'Cold',
      icon2: '/quiz/Fire.svg',
      text2: 'Passionate',
    },
    {
      key: 'role',
      icon1: '/quiz/HighHeeledShoe.svg',
      text1: 'Dominant',
      icon2: '/quiz/Hand.svg',
      text2: 'Submissive',
    },
    {
      key: 'flirt',
      icon1: '/quiz/RevolvingHearts.svg',
      text1: 'Flirtatious',
      icon2: '/quiz/PensiveFace.svg',
      text2: 'Reserved',
    },
    {
      key: 'danger',
      icon1: '/quiz/SmilingFaceWithHorns.svg',
      text1: 'Dangerous',
      icon2: '/quiz/SmilingFaceWithHalo.svg',
      text2: 'Safe',
    },
    {
      key: 'freedom',
      icon1: '/quiz/Turtle.svg',
      text1: 'Restrained',
      icon2: '/quiz/Horse.svg',
      text2: 'Wild',
    },
    {
      key: 'mood',
      icon1: '/quiz/Technologist.svg',
      text1: 'Serious',
      icon2: '/quiz/WomanDancing.svg',
      text2: 'Playful',
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleChange = (key: string, val: number | number[]) => {
    const numericVal = Array.isArray(val) ? val[0] : val
    onChange({
      ...value,
      [key]: numericVal,
    })
  }

  return (
    <div className='grid md:grid-cols-2 grid-cols-none gap-10 md:gap-16 w-full max-w-7xl mx-auto mt-20'>
      {ideal.map(item => (
        <div key={item.key} className='flex  items-center justify-between gap-0 md:gap-4 w-full'>
          <div className='flex flex-col md:flex-row items-center gap-2 min-w-[120px] mt-2'>
            <div className='relative w-[24px] h-[24px] md:w-[44px] md:h-[44px]'>
              <Image src={item.icon1} quality={100} alt={item.text1} fill />
            </div>
            <Head text={item.text1} fontSize='md:text-[16px] text-[14px]' />
          </div>

          <div className='flex-1'>
            <Slider
              min={0}
              max={10}
              value={value[item.key] ?? 5}
              onChange={val => handleChange(item.key, val)}
              trackStyle={{
                backgroundColor: '#B168FF',
                height: isMobile ? 5 : 12,
              }}
              railStyle={{
                backgroundColor: '#3b0764',
                height: isMobile ? 5 : 12,
              }}
              handleStyle={{
                borderColor: '#fff',
                height: isMobile ? 15 : 26,
                width: isMobile ? 15 : 26,
                marginTop: isMobile ? -6 : -7,
                backgroundColor: '#fff',
                zIndex: 10,
                opacity: 1,
              }}
              handleRender={(node, props) =>
                cloneElement(node, {
                  ...node.props,
                  children: (
                    <div className='relative flex flex-col items-center'>
                      {/* Tooltip */}
                      <div className='absolute -top-10 flex flex-col items-center'>
                        <div className='bg-purple-600 text-white text-sm w-7 h-6 px-1 rounded-md relative text-center flex items-center justify-center'>
                          {props.value}
                          <div
                            className='absolute left-1/2 -bottom-[5px] -translate-x-1/2 w-0 h-0 
                              border-l-[4px] border-r-[4px] border-t-[6px] 
                              border-l-transparent border-r-transparent border-t-purple-600'
                          />
                        </div>
                      </div>
                      {node.props.children}
                    </div>
                  ),
                })
              }
            />
          </div>

          <div className='flex flex-col-reverse md:flex-row items-center gap-2 min-w-[120px] justify-end mt-2'>
            <Head text={item.text2} fontSize='md:text-[16px] text-[14px]' />
            <div className='relative w-[24px] h-[24px] md:w-[44px] md:h-[44px]'>
              <Image src={item.icon2} quality={100} alt={item.text2} fill />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
