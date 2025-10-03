import React from 'react'
import Image from 'next/image'

type ArrowButtonType = {
  onClick?: () => void
  opacity?: boolean
  disabled?: boolean
  rotate?: boolean
}

const ArrowButton = ({ onClick, opacity = false, disabled = false, rotate = false }: ArrowButtonType) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`w-[44px] h-[44px] inline-flex items-center justify-center rounded-full
        backdrop-blur-sm shadow-md 
        ${opacity ? 'bg-colors-purpleSoft/10 border border-colors-purpleSoft/40' : 'bg-g_purpleToPurpleOpacity'} hover:bg-white/20 
         ${disabled && 'cursor-not-allowed opacity-30'} 
        
        `}
    >
      <Image width={16} height={16} src='/arrow-right.svg' alt='arrow' className={` ${rotate && 'rotate-180'}`} />
    </button>
  )
}

export default ArrowButton
