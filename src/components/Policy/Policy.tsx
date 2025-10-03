import { useAppSelector } from '@/lib/hooks'
import Head from '@/src/shared/Head/Head'
import HeaderWithBackground from '@/src/shared/HeaderWithBackground/HeaderWithBackground'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import Link from 'next/link'
import CookiePolicy from './CookiePolicy/CookiePolicy'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'

const Policy = () => {
  return (
    <div className='relative min-h-screen overflow-hidden flex items-center justify-center '>
      <section className='my-10 px-4 md:px-0 max-w-4xl mx-auto flex flex-col gap-10 relative items-center  justify-center'>
        <PrivacyPolicy />
        <CookiePolicy />
      </section>
    </div>
  )
}
export default Policy
