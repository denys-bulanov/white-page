import { useAppSelector } from '@/lib/hooks'
import Head from '@/src/shared/Head/Head'
import HeaderWithBackground from '@/src/shared/HeaderWithBackground/HeaderWithBackground'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'

const WhoItFor = () => {
  const { duration, title, description, level, slug } = useAppSelector(state => state.course)

  const tabs = [
    {
      icon: '/tab1.svg',
      text: duration,
    },
    {
      icon: '/tab2.svg',
      text: '10–15 min video lessons',
    },
    {
      icon: '/tab3.svg',
      text: 'Exercises',
    },
    {
      icon: '/tab4.svg',
      text: 'Weekly online Q&A',
    },
  ]

  const forWho = [
    {
      title: 'FOR:',
      text: 'beginners in relationship skills; partnered men and singles who struggle with emotions.',
      icon: '/forYes.svg',
    },
    {
      title: 'NOT FOR:',
      text: 'anyone seeking persuasion “tricks” or unwilling to practice between lessons.',
      icon: '/forNo.svg',
    },
  ]

  const bgClasses = [`bg-g_for`, `bg-g_notFor`]
  return (
    <div className='relative min-h-screen overflow-hidden flex flex-col  '>
      <HeaderWithBackground title={title} description={description} level={level} slug={slug} titleName='Courses Catalogue' />
      <div className='bg-g_bg3'>
        <section className='px-4 md:px-0 mt-10 max-w-7xl mx-auto flex flex-col gap-10 relative items-center '>
          <div className='grid grid-cols-2 md:grid-cols-4  gap-2 w-full '>
            {tabs.map(item => (
              <div className='pb-5 pl-5 w-full md:w-[300px]  rounded-3xl flex-1 flex flex-col border border-colors-pinkSoft/30 bg-colors-purpleDark'>
                <div className='flex w-full justify-end'>
                  <Image src={item.icon} quality={100} alt='icon' width={80} height={80} />
                </div>
                <Head text={item.text} fontSize='font-[20px]' />
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row my-20'>
            <div className='flex-1 text-center md:text-start mb-10 md:mb-0'>
              <div className='mb-7 md:mb-16 '>
                <Title text='Who It’s For' />
              </div>
              <Head text='You have to make sure that you really need this course' fontSize='text-[28px] md:text-[42px]' />
            </div>
            <div className='flex flex-col gap-6 flex-1'>
              {forWho.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative  flex items-center justify-between border border-colors-pinkSoft/40 ${bgClasses[idx]} rounded-2xl p-2 ${
                    idx % 2 === 0 ? 'flex-row pl-5' : 'flex-row-reverse  pr-5'
                  }`}
                >
                  <div className='flex flex-col max-w-md'>
                    <Head text={item.title} fontSize='text-[22px] md:text-[32px]' />
                    <span className='text-white/60 text-sm mt-10 md:mt-0'>{item.text}</span>
                  </div>
                  <div
                    className={`absolute right-0  md:relative flex-shrink-0 ${idx % 2 === 0 ? 'md:-mt-16 md:ml-16 -top-16 md:top-auto' : 'md:mr-16 md:-mt-10 -top-14 md:top-auto'}`}
                  >
                    <Image src={item.icon} quality={100} alt='icon' width={130} height={140} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default WhoItFor
