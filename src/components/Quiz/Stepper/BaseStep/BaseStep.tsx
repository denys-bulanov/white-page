'use client'

import ChooseBlock from '@/src/shared/ChooseBlock/ChooseBlock'
import ChooseOption from '@/src/shared/ChooseOption/ChooseOption'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'

type BaseStepProps = {
  options: any
  head: string
  paragraph1?: string
  paragraph2?: string
  isText?: boolean
  value: string
  onChange: (val: string) => void
  fullImage?: boolean
}

const BaseStep = ({ options, head, paragraph1, value, paragraph2, isText, onChange, fullImage = false }: BaseStepProps) => {
  console.log('options', options)

  const rows: any[][] = []
  if (isText) {
    for (let i = 0; i < options.length; i += 3) {
      rows.push(options.slice(i, i + 3))
    }
  }

  const half = Math.ceil(options.length / 2)
  const topRow = options.slice(0, half)
  const bottomRow = options.slice(half)

  console.log('topRow', topRow)

  return (
    <div className='flex flex-col mt-10 items-center gap-20'>
      <div className='flex flex-col items-center text-center max-w-5xl gap-3'>
        <Title text='Fulfil your every wish' />
        <Head text={head} fontSize='text-[28px] md:text-[44px]' />
        <div className='text-center'>
          {paragraph1 && <Paragraph text={paragraph1} />}
          {paragraph2 && <Paragraph text={paragraph2} />}
        </div>
      </div>
      {isText ? (
        <div className='w-full md:w-auto'>
          <div className='hidden md:flex flex-col gap-5'>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className={`flex gap-5 ${row.length < 3 ? 'justify-center' : ''}`}>
                {row.map(item => (
                  <ChooseOption key={item} text={item} param={value} setParam={onChange} />
                ))}
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-5 md:hidden'>
            {rows.flat().map((item, i, arr) => {
              const isLastOdd = arr.length % 2 !== 0 && i === arr.length - 1
              return (
                <div key={item} className={isLastOdd ? 'col-span-2' : ''}>
                  <ChooseOption text={item} param={value} setParam={onChange} />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-2 gap-5 w-full md:hidden'>
            {options.map((item, idx) => {
              const isLastOdd = options.length % 2 !== 0 && idx === options.length - 1
              return (
                <div key={item.text} className={isLastOdd ? 'col-span-2 flex justify-center' : ''}>
                  <ChooseBlock text={item.text} src={item.src} param={value} setParam={onChange} fullImage={fullImage} />
                </div>
              )
            })}
          </div>
          <div className='hidden md:flex flex-col items-center gap-5'>
            <div className={`grid grid-cols-${topRow.length} gap-5`}>
              {topRow.map(item => (
                <ChooseBlock key={item.text} text={item.text} src={item.src} param={value} setParam={onChange} fullImage={fullImage} />
              ))}
            </div>
            {bottomRow.length > 0 && (
              <div className='flex justify-center gap-5'>
                {bottomRow.map(item => (
                  <ChooseBlock key={item.text} text={item.text} src={item.src} param={value} setParam={onChange} fullImage={fullImage} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
export default BaseStep
