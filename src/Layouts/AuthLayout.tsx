'use client'

import React, { ReactNode } from 'react'
import BackgroundFirst from '../shared/BackgroundFirst/BackgroundFIrst'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className='min-h-screen flex flex-col relative font-poppins'>
        <BackgroundFirst />
        <div className='flex-grow mb-40 mt-20'>{children}</div>
      </main>
    </>
  )
}

export default AuthLayout
