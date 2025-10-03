'use client'
import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [intelligence, setIntelligence] = useState('')
  const [date, setDate] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const router = useRouter()
  return (
    <section className='max-w-7xl px-4 md:px-0 mx-auto flex flex-col gap-10 relative items-center '>
      <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
        <Title text='Registration' />
        <Head text='We want you to join us' fontSize='text-[28px] md:text-[42px]' />
      </div>

      <div className='flex flex-col-reverse md:flex-row gap-10 w-full'>
        <div className='flex-1 rounded-3xl p-7 flex flex-col bg-[radial-gradient(52.86%_115.45%_at_52.86%_0%,rgba(50,11,84,0)_10.13%,rgba(128,73,243,0.4)_100%)]'>
          <span>Enter your information</span>
          <div className='flex flex-col gap-3 mt-4'>
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => setName(e.target.value)}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => setEmail(e.target.value)}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
            <input
              type='text'
              placeholder='Phone'
              value={phone}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => setPhone(e.target.value)}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
          </div>
          <div className='flex flex-col gap-3 mt-10'>
            <input
              type='text'
              placeholder='Emotional Intelligence in Relationships'
              value={intelligence}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => setIntelligence(e.target.value)}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
            <div className='flex justify-between gap-3'>
              <input
                type='text'
                placeholder='Cohort start date'
                value={date}
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                onChange={e => setDate(e.target.value)}
                className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
              />
              <input
                type='text'
                placeholder='Time zone'
                value={timeZone}
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                onChange={e => setTimeZone(e.target.value)}
                className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
              />
            </div>
          </div>

          <div className='flex flex-col gap-3 my-10'>
            <label className='flex items-center gap-2  cursor-pointer select-none'>
              <input type='checkbox' className='peer hidden ' />
              <span
                className='w-[20px] h-[20px] mr-3  rounded-md border border-white/40 
               peer-checked:bg-gradient-to-br peer-checked:from-pink-500 peer-checked:to-purple-600
               flex items-center justify-center transition bg-white/10'
              ></span>
              <span className='text-sm md:text-base'>"I agree to the Privacy Policy and Cookie Policy"</span>
            </label>

            <label className='flex items-center gap-2  cursor-pointer select-none'>
              <input type='checkbox' className='peer hidden ' />
              <span
                className='w-[20px] h-[20px] mr-3  rounded-md border border-white/40 
               peer-checked:bg-gradient-to-br peer-checked:from-pink-500 peer-checked:to-purple-600
               flex items-center justify-center transition bg-white/10'
              ></span>
              <span className='text-sm md:text-base'>Marketing opt-in</span>
            </label>
          </div>
          <Button text='Discover Courses' onClick={() => router.push('/courses')} />
        </div>
        <div className='relative  w-full  h-[400px] md:w-[600px] md:h-[607px] '>
          <Image src='/signUp.png' quality={100} alt='sign-up' fill />
        </div>
      </div>
      <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
        <Title text='Educational content only. Not psychotherapy.' />
      </div>
    </section>
  )
}

export default SignUp
