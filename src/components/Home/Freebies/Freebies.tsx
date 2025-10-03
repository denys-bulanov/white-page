'use client'
import React, { useState } from 'react'

import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Button from '@/src/shared/Button/Button'
import Title from '@/src/shared/Title/Title'

const Freebies = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <div className=' px-4 md:px-0 relative min-h-screen overflow-hidden flex flex-col items-center justify-center'>
      <section className=' max-w-full mx-auto flex flex-col gap-10 relative p-10 rounded-3xl items-center bg-g_purpleWaves'>
        <Title text='Freebies' />
        <div className='text-center gap-4'>
          <Head text='Try our freebies to see that it worth' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <div className='mb-3 text-center'>
          <Paragraph text='Get practical relationship tips by email (concise lessons and phrases you can use today).' color='text-white/60' />
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-between w-full items-center'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full flex-1 bg-white/10 backdrop-blur-2xl px-4 sm:px-7 py-4 sm:py-3 border border-white/20 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40 text-sm sm:text-base'
          />
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            className='w-full flex-1 bg-white/10 backdrop-blur-2xl px-4 sm:px-7 py-4 sm:py-3 border border-white/20 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40 text-sm sm:text-base'
          />
          <div className='w-full md:w-auto'>
            <Button text='Get my materials' />
          </div>
        </div>
        <div className='w-full flex justify-start'>
          <label className='flex items-center gap-2 cursor-pointer text-sm '>
            <input type='checkbox' checked className='w-4 h-4 accent-pink-500 rounded cursor-pointer' />I agree to the use of my personal data
          </label>
        </div>
      </section>
    </div>
  )
}

export default Freebies
