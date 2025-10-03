import Image from 'next/image'
import Head from '../Head/Head'
import { Dispatch, SetStateAction } from 'react'

type ChooseBlockProps = {
  text: string
  src: string
  param: string
  setParam: (val: string) => void
  isAbsolute?: boolean
  fullImage: boolean
}

const ChooseBlock = ({ text, setParam, param, src, isAbsolute = false, fullImage }: ChooseBlockProps) => {
  return (
    <div
      onClick={() => setParam(text)}
      className={`
      
        relative cursor-pointer rounded-2xl ${!fullImage && 'bg-g_girlGround'}   w-[190px] h-[160px] flex flex-col  justify-end  ${text === param && !fullImage && 'shadow-girlGroundChoose'}  ${text === param && fullImage && 'shadow-customPurple'}
        `}
    >
      <div className='relative w-full h-full'>
        <Image src={src} fill quality={100} alt='girl' className='absolute bottom-0 object-contain rounded-2xl' />
      </div>
      <div className='w-[90%]  rounded-3xl absolute bg-black/40 bottom-3 left-1/2 -translate-x-1/2 text-center p-2 z-20 backdrop-blur-sm border border-colors-purpleSoft/20'>
        <Head text={text} fontSize='text-[14px] md:text-[16px]' />
      </div>
    </div>
  )
}
export default ChooseBlock
