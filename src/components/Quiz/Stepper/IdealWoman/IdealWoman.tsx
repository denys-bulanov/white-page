import 'rc-slider/assets/index.css'
import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import Sliders from './Slider/Slider'

type SliderValueMap = {
  [key: string]: number
}

type IdealWomanProps = {
  value: SliderValueMap
  onChange: (val: SliderValueMap) => void
}

export default function IdealWoman({ value, onChange }: IdealWomanProps) {
  return (
    <div className='flex flex-col mt-10 items-center'>
      <div className='flex flex-col items-center text-center gap-3'>
        <Title text='Fulfil your every wish' />
        <Head text='What character traits should your ideal woman have?' fontSize='text-[28px] md:text-[44px]' />

        <Sliders value={value} onChange={onChange} />
      </div>
    </div>
  )
}
