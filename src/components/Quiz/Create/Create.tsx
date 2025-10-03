import { useAppDispatch } from '@/lib/hooks'
import { setQuiz } from '@/lib/store/slices/quizSlice'
import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import { useState } from 'react'

type CreateProps = {
  setIsAge: React.Dispatch<React.SetStateAction<boolean>>
}

const girls = [
  {
    src: '/quiz/girl-start1.png',
    age: '18-21',
  },
  {
    src: '/quiz/girl-start2.png',
    age: '21-29',
  },
  {
    src: '/quiz/girl-start4.png',
    age: '30-40',
  },
  {
    src: '/quiz/girl-start3.png',
    age: '40+',
  },
]

export default function Create({ setIsAge }: CreateProps) {
  const [age, setAge] = useState('')
  const dispatch = useAppDispatch()
  const handleCreate = () => {
    setIsAge(true)
    dispatch(setQuiz({ girlAge: age }))
  }

  const chooseType = (idx: number) => {
    const currentGirl = girls.find((_, i) => i === idx)
    console.log('currentGirlAge', currentGirl)
    setAge(currentGirl?.age)
  }

  return (
    <div className='mt-10'>
      <div className='relative flex flex-col gap-2 items-center text-center'>
        <div>
          <Title text='Fulfil your every wish' />
        </div>
        <Head text='Create Your Dream AI Girl' fontSize='text-[28px] md:text-[44px]' />
        <Paragraph text='Select the age that feels right for your AI match' />
        <Image src='/heartFull.svg' quality={100} alt='heart' width={333} height={333} className='absolute -top-40 left-1/2 -translate-x-1/2 -z-10' />
      </div>

      <div className='grid grid-cols-2  lg:grid-cols-4 gap-5 w-full mt-20 '>
        {girls.map((item, idx) => (
          <div
            onClick={() => chooseType(idx)}
            className={`
            mb-5 relative cursor-pointer rounded-3xl p-5 bg-g_girlGround w-[200px] h-[150px] md:w-[250px] md:h-[200px] lg:w-[280px] lg:h-[230px] flex flex-col  justify-end  ${age === item.age && 'shadow-girlGroundChoose'}
            `}
          >
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
              <div className='relative md:w-[220px] md:h-[240px]  w-[170px] h-[190px] lg:w-[250px] lg:h-[270px] '>
                <Image src={item.src} quality={100} fill alt='girl' className='' />
              </div>
            </div>

            <div className='w-full rounded-3xl relative bg-black/40 text-center p-3 z-20 backdrop-blur-sm'>
              <Head text={item.age} fontSize='text-[24px]' />
            </div>
          </div>
        ))}
      </div>

      <div className='mt-20 flex  justify-center'>
        <div className='md:w-72 w-full'>
          <Button text='Continue' onClick={handleCreate} disabled={!!!age} />
        </div>
      </div>
    </div>
  )
}
