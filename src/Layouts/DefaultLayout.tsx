'use client'

import React, { ReactNode } from 'react'
import Footer from '../shared/Footer/Footer'
import BackgroundFirst from '../shared/BackgroundFirst/BackgroundFIrst'
import Header from '../shared/Header/Header'

type DefaultLayoutProps = {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <main className='min-h-screen flex flex-col relative font-poppins'>
        <BackgroundFirst />
        <Header />
        <div className='flex-grow mb-40 mt-20'>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default DefaultLayout
