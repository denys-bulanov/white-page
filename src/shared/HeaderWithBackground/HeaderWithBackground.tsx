import React from 'react'
import Image from 'next/image'
import Header from '../Header/Header'
import Title from '../Title/Title'
import Head from '../Head/Head'
import Paragraph from '../Paragraph/Paragraph'
import { usePathname, useRouter } from 'next/navigation'

type HeaderWithBackground = {
  title?: string
  description?: string
  level?: string
  slug?: string
  author?: string
  date?: string
  titleName: string
}

const HeaderWithBackground = ({ title = '', description = '', titleName, level, slug, author, date }: HeaderWithBackground) => {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const router = useRouter()

  return (
    <header className='relative w-full md:h-[500px] h-[600px]'>
      <Image
        quality={100}
        src={segments[0] === 'blog' ? '/headerBg2.png' : '/headerBg.png'}
        alt='Header background'
        fill
        className='object-cover -z-10'
        priority
      />
      <div className='relative z-10'>
        <Header opacity />
      </div>
      <div className='max-w-7xl h-[300px] justify-between mx-auto  mt-32 md:mt-10 flex flex-col items-center text-center gap-5'>
        <Title text={titleName} />

        <Head text={title} fontSize='text-[28px] md:text-[42px]' />

        {description && (
          <div className=' mb-10'>
            <Paragraph text={description} />
          </div>
        )}

        {level && (
          <div className='px-3 py-2 gap-2 text-colors-pinkSoft flex items-center border border-colors-pinkSoft/30 bg-colors-pinkSoft/20 rounded-full font-thin'>
            <Image
              src={level === 'Beginner' ? '/user-star.svg' : level === 'Advanced' ? '/user-xmark.svg' : '/user-love.svg'}
              alt='cart'
              width={24}
              height={24}
              className='object-cover'
            />
            <span>{level}</span>
          </div>
        )}

        {author && date && (
          <div className='grid grid-cols-3 gap-2 md:gap-3 px-3 md:px-0 text-sm md:text-[18px]'>
            <div className=' flex flex-col items-center justify-center'>
              <p className='text-colors-purpleSoft'>Date</p>
              <p>{date}</p>
            </div>

            <div className=' flex flex-col items-center px-10 justify-center border-l border-r border-white/40'>
              <p className='text-colors-purpleSoft '>Author</p>
              <p>{author}</p>
            </div>
            <div className=' flex flex-col items-center justify-center'>
              <p className='text-colors-purpleSoft'>Read</p>
              <p>10 minutes</p>
            </div>
          </div>
        )}

        <div className='absolute  left-0 top-24 md:bottom-5 md:top-auto max-w-7xl mx-auto px-6 mt-6 text-sm text-white/70'>
          <nav aria-label='Breadcrumb'>
            <ol className='flex items-center space-x-2'>
              <li>
                <span className='hover:text-white transition cursor-pointer capitalize' onClick={() => router.push(`/${segments[0]}`)}>
                  {segments[0]}
                </span>
              </li>

              {segments[1] && (
                <>
                  <span className='mx-2 text-colors-purpleSoft'>→</span>
                  <li className='text-colors-purpleSoft cursor-pointer'>
                    {segments[1] === slug ? <span>{title}</span> : <span className='capitalize'>{segments[1]}</span>}
                  </li>
                </>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeaderWithBackground
