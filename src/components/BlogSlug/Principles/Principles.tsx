import Head from '@/src/shared/Head/Head'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: 'Ask yourself about consent and context',
    text: 'Is this a good moment for attention. Is the comment invited by the conversation. If not sure, keep it light or skip it.',
  },
  {
    title: 'Name something observable',
    text: 'Effort, intention, and skill are safer and more meaningful than appearance or talent.',
  },
  {
    title: 'Value effort over fixed traits',
    text: 'Is this a good moment for attention. Is the comment invited by the conversation. If not sure, keep it light or skip it.',
  },
  {
    title: 'Keep it small and specific',
    text: 'Short, concrete, and about one thing. Let it breathe.',
  },
  {
    title: 'Make it zero-strings',
    text: 'No ask attached. No expectation for a response. Appreciation is a gift, not a trade.',
  },
  {
    title: 'Use autonomy-supportive language',
    text: '“I enjoyed…” and “I appreciate…” describe your experience without telling the other person what they are or must be.',
  },
  {
    title: 'Prioritize safety',
    text: 'Prefer private over public. Avoid sexual comments unless there is clear ongoing consent for that kind of intimacy.',
  },
]

const Principles = () => {
  return (
    <div className='relative px-4 md:px-0 min-h-screen overflow-hidden flex flex-col '>
      <section className='my-10 max-w-4xl mx-auto flex flex-col gap-10 relative items-center '>
        <div className='flex items-start w-full'>
          <Head text='Principles of ethical praise' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <div className='flex flex-col gap-6'>
          {articles.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <p className='text-white/60 text-sm md:text-base'>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <p className='text-white/60 text-sm md:text-base'>
            If you want structured practice with empathy and wording, see the course
            <span className='text-colors-purpleSoft'> Emotional Intelligence in Relationships </span>
            where we drill simple formulas for appreciation and boundaries:{' '}
            <Link href={`warmaccord.com/courses/emotional-intelligence`} className='underline'>
              warmaccord.com/courses/emotional-intelligence
            </Link>
          </p>
        </div>
        <div className='relative w-full h-[300px] md:h-[500px]'>
          <Image src='/blogSlug2.png' quality={100} alt='image' fill className='object-cover rounded-2xl' />
        </div>
      </section>
    </div>
  )
}
export default Principles
