import React from 'react'

type ParagraphProps = {
  text: string
  color?: string
}

const Paragraph = ({ text, color }: ParagraphProps) => {
  return <p className={`text-sm md:text-base ${color ?? 'text-white'}`}>{text}</p>
}

export default Paragraph
