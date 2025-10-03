import React from 'react'
import Image from 'next/image'

type CommentProps = {
  src: string
  text: string
  stars: number
}

const Comment = ({ src, text, stars }: CommentProps) => {
  return (
    <div
      className={` z-10 cursor-pointer rounded-2xl backdrop-blur-md
      border border-white/20 p-3 flex flex-row  items-center flex-1 w-full md:w-[500px]`}
    >
      <div className='flex justify-end'>
        <Image src={src} alt='icon' quality={100} width={70} height={70} className='shrink-0' />
      </div>

      <div className='flex flex-col ml-5'>
        <div className=' flex flex-row'>
          {Array.from({ length: stars }).map((_, index) => (
            <Image src='/star.svg' quality={100} alt='star' width={16} height={16} className='shrink-0 mr-[1px]' />
          ))}
        </div>
        <p className='text-sm text-white mt-2'>{text}</p>
      </div>
    </div>
  )
}

export default Comment
