import Head from '@/src/shared/Head/Head'
import Image from 'next/image'

const SpecialStep = () => {
  return (
    <div className='flex flex-col mt-10 items-center '>
      <div className='w-full h-[400px] md:w-[600px] md:h-[550px] relative rounded-3px mt-10'>
        <Image src='/quiz/analyzing.png' quality={100} fill alt='image' className='rounded-3px' />

        <div className='absolute top-10 left-10 flex flex-col gap-7'>
          <Head text='Hey handsome,' fontSize=' text-[32px] md:text-[50px]' />
          <Head text='now let me match your freak' fontSize='text-[20px]  md:text-[30px] ' />
        </div>
      </div>
    </div>
  )
}
export default SpecialStep
