'use client'

import { useState, useEffect } from 'react'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import BlogCard from './BlogCard/BlogCard'
import { titles } from './mock-data'
import ArrowButton from '@/src/shared/ArrowButton/ArrowButton'

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(9)
      }
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const totalPages = Math.ceil(titles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = titles.slice(startIndex, startIndex + itemsPerPage)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <section className='max-w-7xl px-4 md:px-0 mx-auto flex flex-col gap-10 relative items-center'>
      <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
        <Title text='Blog' />
        <Head text='Useful articles for you to become' fontSize='text-[28px] md:text-[42px]' />
      </div>
      <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {currentItems.map((item, idx) => (
          <BlogCard key={idx} {...item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className='flex w-full justify-between gap-6 mt-8'>
          <ArrowButton rotate onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
          <div className='flex gap-4'>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                  currentPage === idx + 1 ? 'bg-g_purpleToPurpleOpacity text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <ArrowButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
        </div>
      )}
    </section>
  )
}
