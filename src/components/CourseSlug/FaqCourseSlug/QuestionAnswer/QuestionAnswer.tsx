import React from 'react'

type QuestionAnswerProps = {
  question: string
  answer: string
}

const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
  return (
    <div
      className={`z-10 cursor-pointer rounded-2xl backdrop-blur-md bg-black/10
      border border-white/20 p-3 flex flex-row  items-center flex-1 w-full md:w-[500px]`}
    >
      <div className='flex flex-col '>
        <p className=' text-white '>{question}</p>
        <p className='text-sm text-white/60 mt-2 '>{answer}</p>
      </div>
    </div>
  )
}

export default QuestionAnswer
