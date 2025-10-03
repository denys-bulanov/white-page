import React from 'react'

type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className=' text-sm md:text-base text-white inline-block bg-g_purpleToPurpleOpacity border px-3 py-1 rounded-2xl  border-colors-purpleSoft '>
      {text}
    </div>
  )
}

export default Title
