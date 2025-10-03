'use client'
import { useAppDispatch } from '@/lib/hooks'
import { setQuiz } from '@/lib/store/slices/quizSlice'
import Button from '@/src/shared/Button/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import BaseStep from './BaseStep/BaseStep'
import ChooseAge from './ChooseAge/ChooseAge'
import IdealWoman from './IdealWoman/IdealWoman'
import SpecialStep from './SpecialStep/SpecialStep'
import womanData from './womanData'

export default function StepperWrap({ setIsQuiz }: { setIsQuiz: React.Dispatch<React.SetStateAction<boolean>> }) {
  const totalSteps = 12
  const checkpoints = 4
  const [activeStep, setActiveStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [sliderAnswers, setSliderAnswers] = useState<{ [key: string]: any }>({})
  const [showSpecial, setShowSpecial] = useState(false)

  const progress = (activeStep / (totalSteps - 1)) * 100
  const dispatch = useAppDispatch()

  const isStepValid = () => {
    const keyMap: { [key: number]: string } = {
      0: 'yourAge',
      1: 'womanDream',
      2: 'figure',
      3: 'ethnic',
      4: 'hair',
      5: 'eye',
      6: 'specific',
      8: 'mostTurns',
      9: 'likeToTry',
      10: 'scenarios',
      11: 'scenarios2',
    }
    const key = keyMap[activeStep]
    return key ? !!answers[key] : true
  }

  return (
    <div className='w-full'>
      {!showSpecial && (
        <div className='w-full flex justify-center mb-10'>
          <div className='flex items-center justify-between w-full max-w-5xl'>
            {Array.from({ length: checkpoints }).map((_, index) => {
              const checkpointPercent = (index / (checkpoints - 1)) * 100
              const isCompleted = progress >= checkpointPercent

              return (
                <React.Fragment key={index}>
                  <div className='relative z-10 flex flex-col items-center w-[24px] h-[24px] md:w-[48px] md:h-[48px]'>
                    <Image quality={100} src={isCompleted ? '/quiz/check.svg' : '/quiz/emptyCheck.svg'} alt={`Step ${index + 1}`} fill />
                  </div>
                  {index < checkpoints - 1 && (
                    <div className='flex-1 h-1.5 md:h-2 mx-4 relative'>
                      <div className='w-full h-full bg-purple-900 rounded-full' />
                      <div
                        className='absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all duration-500'
                        style={{
                          width: `${Math.min(100, ((progress - checkpointPercent) / (100 / (checkpoints - 1))) * 100)}%`,
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      )}

      <div>
        {activeStep === 0 && <ChooseAge value={answers['yourAge'] || ''} onChange={val => setAnswers(prev => ({ ...prev, yourAge: val }))} />}
        {activeStep === 1 && (
          <BaseStep
            options={womanData['womanDream']}
            head="Let's create a woman of your dreams."
            paragraph1="What's your preferred type of woman?"
            paragraph2='You can choose all that excite you'
            onChange={val => setAnswers(prev => ({ ...prev, womanDream: val }))}
            value={answers['womanDream'] || ''}
            fullImage
          />
        )}
        {activeStep === 2 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, figure: val }))}
            value={answers['figure'] || ''}
            options={womanData['figure']}
            head='What kind of figure do you prefer in women?'
          />
        )}
        {activeStep === 3 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, ethnic: val }))}
            value={answers['ethnic'] || ''}
            options={womanData['ethnic']}
            head='Do you have any ethnic preferences?'
            fullImage
          />
        )}
        {activeStep === 4 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, hair: val }))}
            value={answers['hair'] || ''}
            options={womanData['hair']}
            head="What's your favorite hair color?"
          />
        )}
        {activeStep === 5 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, eye: val }))}
            value={answers['eye'] || ''}
            options={womanData['eye']}
            head="What's your favorite eye color?"
            fullImage
          />
        )}
        {activeStep === 6 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, specific: val }))}
            value={answers['specific'] || ''}
            options={womanData['specific']}
            head='Any specific preferences?'
            fullImage
          />
        )}
        {!showSpecial && activeStep === 7 && (
          <IdealWoman onChange={val => setSliderAnswers(prev => ({ ...prev, idealWoman: val }))} value={sliderAnswers['idealWoman'] || ''} />
        )}
        {showSpecial && <SpecialStep />}

        {!showSpecial && activeStep === 8 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, mostTurns: val }))}
            value={answers['mostTurns'] || ''}
            options={womanData['mostTurns']}
            head='What turns you on most in women?'
            paragraph1='You can choose all that excite you'
            fullImage
          />
        )}

        {activeStep === 9 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, likeToTry: val }))}
            value={answers['likeToTry'] || ''}
            options={womanData['likeToTry']}
            head='What would you like to try?'
            paragraph1='You can choose all that excite you'
            isText
          />
        )}
        {activeStep === 10 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, scenarios: val }))}
            value={answers['scenarios'] || ''}
            options={womanData['scenarios']}
            head='When watching adult content, which scenarios do you find most appealing?'
            paragraph1='You can choose all that excite you'
            isText
          />
        )}
        {activeStep === 11 && (
          <BaseStep
            onChange={val => setAnswers(prev => ({ ...prev, scenarios2: val }))}
            value={answers['scenarios2'] || ''}
            options={womanData['scenarios2']}
            head='When watching adult content, which scenarios do you find most appealing?'
            paragraph1='You can choose all that excite you'
            fullImage
          />
        )}
      </div>
      <div className='mt-20 max-w-md flex justify-between gap-10 items-center mx-auto'>
        <div className='flex-1'>
          <Button
            text='Back'
            background='dark'
            onClick={() => {
              if (showSpecial) {
                setShowSpecial(false)
                return
              }
              setActiveStep(s => Math.max(0, s - 1))
            }}
            disabled={activeStep === 0}
          />
        </div>
        <div className='flex-[2]'>
          <Button
            text={totalSteps - 1 === activeStep ? 'Finish' : 'Continue'}
            onClick={() => {
              if (activeStep === 7 && !showSpecial) {
                setShowSpecial(true)
                return
              }

              if (showSpecial) {
                setShowSpecial(false)
                setActiveStep(8)
                return
              }

              dispatch(setQuiz({ ...answers, ...sliderAnswers }))
              setActiveStep(s => Math.min(totalSteps - 1, s + 1))
              totalSteps - 1 === activeStep && setIsQuiz(true)
            }}
            disabled={!isStepValid() && !showSpecial}
          />
        </div>
      </div>
    </div>
  )
}
