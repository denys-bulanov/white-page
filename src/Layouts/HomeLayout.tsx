'use client'

import React, { ReactNode } from 'react'
import BackgroundFirst from '../shared/BackgroundFirst/BackgroundFIrst'

type DefaultLayoutProps = {
  children: ReactNode
}

const HomeLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <main className='min-h-screen flex flex-col relative font-poppins'>
        <BackgroundFirst />

        <div className='flex-grow'>{children}</div>
      </main>
    </>
  )
}

export default HomeLayout
