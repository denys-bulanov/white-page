import React from 'react'

type MessageProps = {
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  text: string
}

const Message = ({ corner = 'bottom-left', text }: MessageProps) => {
  const borderRadiusClass = {
    'top-left': 'rounded-tl-xs rounded-tr-3xl rounded-bl-3xl rounded-br-3xl',
    'top-right': 'rounded-tr-xs rounded-tl-3xl rounded-bl-3xl rounded-br-3xl',
    'bottom-left': 'rounded-bl-xs rounded-br-3xl rounded-tl-xl rounded-tr-3xl',
    'bottom-right': 'rounded-br-xs rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl',
  }[corner]

  return (
    <div
      className={`border font-medium backdrop-blur-md bg-colors-purpleDark/20 border-colors-purpleSoft/50 flex-row max-w-[300px] sm:max-w-[400px] inline-flex items-start gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 z-10
    ${borderRadiusClass} transition-all duration-500 ease-in-out `}
    >
      <p className='text-white/60 tracking-tight text-xs  leading-snug break-words text-left'>{text}</p>
    </div>
  )
}

export default Message
