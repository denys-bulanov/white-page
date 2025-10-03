import Button from '../Button/Button'
import Head from '../Head/Head'
import Title from '../Title/Title'

type PopupProps = {
  title: string
  text: string
  isQuestion?: boolean
  handleClick: () => void
}

const Popup = ({ title, text, isQuestion = false, handleClick }: PopupProps) => {
  return (
    <div className='fixed inset-0 w-screen h-screen flex items-center justify-center backdrop-blur-sm bg-black/30 z-50'>
      <div className='bg-black/70 p-5 md:p-14 rounded-xl shadow-xl max-w-2xl md:w-full w-[90%]  text-center border border-colors-purpleSoft/40'>
        <div className='flex flex-col gap-5'>
          <div>
            <Title text={title} />
          </div>
          <Head text={text} fontSize='text-[26px] md:text-[32px]' />
        </div>

        <div className='flex justify-center gap-4 mt-10'>
          <Button text='Yes' onClick={handleClick} />
          <Button text='No' onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
export default Popup
