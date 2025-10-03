import Head from '@/src/shared/Head/Head'

import Link from 'next/link'

const articles = [
  {
    title: 'Tie it to a choice or expression',
    text: 'This color suits the mood of tonight really well.',
  },
  {
    title: 'Keep it low intensity early on',
    text: 'You look relaxed today.',
  },
  {
    title: 'Avoid body part focus and sexual detail unless there is clear, mutual green light.',
    text: '',
  },
  {
    title: 'Do not advise or prescribe',
    text: 'You should always wear your hair like that.',
  },
]

const Appearance = () => {
  return (
    <div className='relative  px-4 md:px-0 min-h-screen overflow-hidden flex items-center justify-center '>
      <section className='my-10 max-w-4xl mx-auto flex flex-col gap-10 relative items-center  justify-center'>
        <div className='flex items-start w-full'>
          <Head text='Compliments about appearance that feel safer' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <ul className='flex flex-col gap-6 list-disc text-sm md:text-base pl-5 md:pl-0 items-start w-full'>
          {articles.map(item => (
            <li key={item.title} className='space-y-2'>
              {item.text ? (
                <p className='text-white/60'>
                  {item.title}: <span className='text-white'> “{item.text}”</span>
                </p>
              ) : (
                <p className='text-white/60'>{item.title}</p>
              )}
            </li>
          ))}
        </ul>

        <div>
          <p className='text-white/60 text-sm md:text-base'>
            For early dating language that respects boundaries and consent, see
            <span className='text-colors-purpleSoft'> Ethical Dating and First Dates </span>
            <Link href={`warmaccord.com/courses/ethical-dating`} className='underline'>
              warmaccord.com/courses/ethical-dating
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
export default Appearance
