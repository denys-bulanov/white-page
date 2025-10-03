import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Image from 'next/image'

type IntroProps = {
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Intro({ setIsCreate }: IntroProps) {
  return (
    <div className='w-full h-[700px] md:w-[450px] md:h-[770px] relative overflow-hidden md:overflow-visible'>
      <Image src='/quiz/bigPicture.png' fill alt='image' className='rounded-3xl' />
      <div className='absolute top-0 left-1/2 -translate-x-1/2'>
        <Image src='/Logo.svg' quality={100} width={150} height={100} alt='logo' className='object-contain' />
      </div>
      <div className='absolute gap-5 bottom-5 left-1/2 -translate-x-1/2 items-center flex flex-col'>
        <div className='min-w-[500px] text-center'>
          <Head text='Explore AI Girlfriends' fontSize='text-[28px] md:text-[44px]' />
        </div>

        <Paragraph text='Create your own ✨AI Girlfriend✨' />
        <div className='w-52'>
          <Button text='Create' onClick={() => setIsCreate(true)} />
        </div>
      </div>
      <Image src='/heartFull.svg' quality={100} alt='heart' width={333} height={333} className='absolute top-36 -left-40 -z-10 hidden sm:block' />
      <Image
        src='/heartFull.svg'
        quality={100}
        alt='heart'
        width={260}
        height={260}
        className='absolute top-96 -right-32 -z-10 rotate-[50deg] hidden sm:block'
      />
    </div>
  )
}
