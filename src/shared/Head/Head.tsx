import React from 'react'

type HeadProps = {
  text: string
  purpleText?: string
  purpleFirst?: boolean
  fontSize?: string
  text2?: string
  font?: string
}

const Head = ({ text, purpleText = '', purpleFirst = false, fontSize, font, text2 }: HeadProps) => {
  const purpleContent = <span className='text-colors-lightPurple'>{purpleText}</span>

  return (
    <>
      <p
        className={`uppercase ${font ?? 'font-base'} font-anton tracking-wide leading-tight  text-white ${fontSize ?? 'text-[56px] sm:text-[56px]'}`}
      >
        {purpleFirst ? (
          <>
            {purpleContent} {text}
          </>
        ) : (
          <>
            {text} {purpleContent} {text2}
          </>
        )}
      </p>
    </>
  )
}

export default Head
