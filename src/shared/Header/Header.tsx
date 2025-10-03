import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button/Button'
import { useRouter } from 'next/navigation'

type HeaderType = {
  opacity?: boolean
}

const Header = ({ opacity = false }: HeaderType) => {
  const router = useRouter()
  return (
    <header className='py-4'>
      <div
        className={`max-w-7xl mx-4 md:mx-auto flex items-center justify-between ${opacity ? 'bg-g_BlueToPurpleOpacity' : 'bg-g_BlueToPurple'}  shadow-lg rounded-2xl px-6 py-3`}
      >
        <div className='md:hidden block relative w-[24px] h-[24px] cursor-pointer'>
          <Image src='/headerIcon.svg' quality={100} alt='burger' fill />
        </div>
        <div className='w-[160px]  h-[40px]  md:w-[200px] md:h-[50px] relative cursor-pointer' onClick={() => router.push('/')}>
          <Image src='/Logo.svg' quality={100} fill alt='logo' className=' object-contain' />
        </div>
        <nav className='hidden md:flex space-x-8 text-sm font-medium text-white/80'>
          <Link href='/team' className='hover:text-white transition'>
            Team
          </Link>
          <Link href='/courses' className='hover:text-white transition'>
            Courses
          </Link>
          <Link href='/blog' className='hover:text-white transition'>
            Blog
          </Link>
        </nav>
        <div>
          <Button text='Discover Courses' onClick={() => router.push('/courses')} />
        </div>
      </div>
    </header>
  )
}

export default Header
