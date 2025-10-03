'use client'

import { useState } from 'react'
import Analyzing from './Analyzing/Analyzing'
import Create from './Create/Create'
import Intro from './Intro/Intro'
import StepperWrap from './Stepper/Stepper'

export default function Quiz() {
  const [isCreate, setIsCreate] = useState(false)
  const [isAge, setIsAge] = useState(false)
  const [isQuiz, setIsQuiz] = useState(false)

  return (
    <section
      className='
        w-full
        max-w-7xl
        mx-auto
        flex flex-col
        gap-10
        relative
        items-center
        px-4
        sm:px-6
        md:px-8
      '
    >
      {isAge && isCreate && isQuiz ? (
        <Analyzing />
      ) : isAge && isCreate ? (
        <StepperWrap setIsQuiz={setIsQuiz} />
      ) : isCreate ? (
        <Create setIsAge={setIsAge} />
      ) : (
        <Intro setIsCreate={setIsCreate} />
      )}
    </section>
  )
}
