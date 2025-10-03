'use client'

import React, { ReactNode } from 'react'
import Footer from '../shared/Footer/Footer'
import BackgroundFirst from '../shared/BackgroundFirst/BackgroundFIrst'

type QuizLayoutProps = {
  children: ReactNode
}

const QuizLayout = ({ children }: QuizLayoutProps) => {
  return (
    <>
      <main className='min-h-screen flex flex-col relative font-poppins'>
        <BackgroundFirst />

        <div className='flex-grow mb-40 mt-20'>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default QuizLayout
