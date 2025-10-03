import React from 'react'
import Image from 'next/image'
import Head from '@/src/shared/Head/Head'
import ArrowButton from '@/src/shared/ArrowButton/ArrowButton'
import { useRouter } from 'next/navigation'

type MemberType = {
  src: string
  text: string
  position: string
}

const Member = ({ text, src, position }: MemberType) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/team')
  }

  return (
    <div className='cursor-pointer h-[270px] w-72 flex flex-col bg-white/10 backdrop-blur-md border border-colors-purpleSoft/70 rounded-2xl overflow-hidden '>
      <div className='relative w-full h-[200px]'>
        <Image src={src} quality={100} alt='teamMember' fill className='object-cover' />
      </div>
      <div className='flex items-center justify-between  px-2 py-3 '>
        <div className='flex flex-col  justify-center '>
          <Head text={text} fontSize='text-[20px]' font='font-normal' />
          <p className='text-sm text-white/60 mt-3'>{position}</p>
        </div>
        <div>
          <ArrowButton onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Member
