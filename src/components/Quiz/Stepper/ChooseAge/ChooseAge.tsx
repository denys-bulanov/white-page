'use client'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import { useState } from 'react'

type ChooseAgeProps = {
  value: string
  onChange: (val: string) => void
}

const ChooseAge = ({ value, onChange }: ChooseAgeProps) => {
  const [age, setAge] = useState<string>('18')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleBlur = () => {
    let val = parseInt(value, 10)
    if (isNaN(val)) val = 18
    if (val < 18) val = 18
    if (val > 99) val = 99
    onChange(String(val))
  }

  const increase = () => {
    let val = parseInt(value || '18', 10)
    if (val < 99) onChange(String(val + 1))
  }

  const decrease = () => {
    let val = parseInt(value || '18', 10)
    if (val > 18) onChange(String(val - 1))
  }

  return (
    <div className='flex flex-col mt-10 items-center gap-20'>
      <div className='flex flex-col items-center gap-3 text-center'>
        <Title text='Fulfil your every wish' />
        <Head text='Choose your age' fontSize='text-[28px] md:text-[44px]' />
        <Paragraph text='This site contains adult content and is only for users 18 and older' />
      </div>
      <div className='flex flex-col items-center gap-5 w-full'>
        <div className='relative w-full md:w-72'>
          <input
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className='w-full bg-g_darkOpacity bg-transparent text-white px-4 py-3 rounded-3xl border border-colors-purpleSoft/40 outline-none pr-10
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            placeholder='Your age'
          />
          <div className='absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
            <button type='button' onClick={increase} className='p-0.5 hover:opacity-80 text-white'>
              <Image src='/quiz/arrowDown.svg' quality={100} alt='arrow' width={10} height={6} className='rotate-180' />
            </button>
            <button type='button' onClick={decrease} className='p-0.5 hover:opacity-80 text-white'>
              <Image src='/quiz/arrowDown.svg' quality={100} alt='arrow' width={10} height={6} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseAge
