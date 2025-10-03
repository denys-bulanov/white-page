'use client'
import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'

const ThankYou = () => {
  const contentList = [
    {
      title: 'Conditions',
      text: [
        'If you chose a cohort date, we will email the start details and a calendar file.',
        'If payment is required, you will receive a secure payment link by email.',
        'If you do not see our email in 5 to 10 minutes, check Spam or Promotions and add hello@warmaccord.com to contacts.',
        'Questions about your registration: write to hello@warmaccord.com.',
      ],
    },
  ]

  return (
    <section className='max-w-7xl px-4 md:px-0 mx-auto flex flex-col gap-10 relative items-center '>
      <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
        <Title text='Confirmation' />
        <Head text='Thank you for registering' fontSize='text-[28px] md:text-[42px]' />
        <Paragraph text='We have received your details. A confirmation email is on the way.' />
      </div>

      <div className='gap-10 w-full flex-col md:flex-row relative rounded-3xl p-7  bg-[radial-gradient(52.86%_115.45%_at_52.86%_0%,rgba(50,11,84,0)_10.13%,rgba(128,73,243,0.4)_100%)]'>
        <div className='flex-1  mb-10 md:mb-0'>
          <div className='flex flex-col gap-3 '>
            <Head text='Course information' fontSize='text-base md:text-[20px]' />
            <div className='w-full mt-5 bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-3 rounded-2xl text-white   text-sm sm:text-base '>
              <p>
                Course:
                <span> Emotional Intelligence in Relationships</span>
              </p>
            </div>
            <div className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-3 rounded-2xl text-white   text-sm sm:text-base'>
              <p>
                Start:
                <span> March 17.2025</span>
              </p>
            </div>

            <div className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-3 rounded-2xl text-white   text-sm sm:text-base'>
              <p>
                Registration ID:<span> 3214635846841351</span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-10 flex-1'>
          {contentList.map(item => (
            <div className='flex flex-col gap-7'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />

              <ul className='flex flex-col gap-1 items-start list-disc list-inside'>
                {item.text.map(i => (
                  <li>
                    <span className='text-white/60 text-sm md:text-base'>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='w-full md:w-72'>
            <Button text='Return to courses' />
          </div>
        </div>
        <div className='absolute bottom-10 -right-8'>
          <div className='relative  w-[130px] h-[130px] md:w-[220px] md:h-[220px]'>
            <Image src='/heartFull.svg' quality={100} alt='heart' fill />
          </div>
        </div>

        <Image src='/heartFull.svg' quality={100} alt='heart' width={270} height={270} className='-z-10 absolute -top-24 -right-12 rotate-[60deg]' />
      </div>
    </section>
  )
}

export default ThankYou
