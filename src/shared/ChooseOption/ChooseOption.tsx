import Head from '@/src/shared/Head/Head'

type ChooseOption = {
  text: string
  param: string
  setParam: (val: string) => void
}

const ChooseOption = ({ text, setParam, param }: ChooseOption) => {
  return (
    <div
      onClick={() => setParam(text)}
      className={`flex items-center min-w-[150px] max-w-[500px]  flex-1 justify-center w-auto md:w-[240px] border border-colors-purpleSoft/40 bg-g_darkOpacity rounded-3xl p-3 cursor-pointer ${param === text && 'shadow-customSecondaryPurple'}`}
    >
      <Head text={text} fontSize='text-[16px] md:text-[24px]' />
    </div>
  )
}
export default ChooseOption
