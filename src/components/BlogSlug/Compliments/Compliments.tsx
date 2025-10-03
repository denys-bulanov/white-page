import { useAppSelector } from '@/lib/hooks'
import Head from '@/src/shared/Head/Head'
import HeaderWithBackground from '@/src/shared/HeaderWithBackground/HeaderWithBackground'
import Image from 'next/image'

const articles = [
  {
    title: 'It sounds like a hidden demand',
    text: 'A line like “You are so beautiful” can carry an unspoken “so spend more time with me.” If a compliment feels like a setup for a favor, a number, or intimacy, the nervous system hears pressure, not care.',
  },
  {
    title: 'Spotlight effect',
    text: 'Public or big comments can make someone feel watched. If a person worries about being judged, the extra attention raises stress.',
  },
  {
    title: 'Object instead of person',
    text: 'Compliments on body parts or sexualized details turn a person into a surface. Many women have a lifetime of unwanted attention. Another remark about looks can feel like the same old script.',
  },
  {
    title: 'Mismatch with identity',
    text: '“You are so chill” when she is anxious, or “you are a natural” after she worked hard, can feel invalidating. Praise that erases effort or complexity does not land as care.',
  },
  {
    title: 'Timing and context',
    text: 'Dropping praise in the middle of a tense moment can feel manipulative. So can praising right before asking for something.',
  },
  {
    title: 'Suspicion from past patterns',
    text: 'Negging, pickup lines, and bait-and-switch tactics taught many people to distrust flattery. If a compliment sounds generic or rehearsed, the receiver protects themselves.',
  },
  {
    title: 'Too big for the relationship stage',
    text: 'Early dating needs small, low-pressure signals. “You are perfect” on date one is not intimacy. It is intensity, and intensity often reads as risk.',
  },
  {
    title: 'No room for autonomy',
    text: 'Some praise boxes a person in: “You always look better with your hair long.” It tells them what to be. Autonomy matters. Praise that limits choice creates pushback.',
  },
]

const Compliments = () => {
  const { author, title, date, slug } = useAppSelector(state => state.blog)

  return (
    <div className='relative min-h-screen overflow-hidden flex flex-col '>
      <HeaderWithBackground author={author} title={title} date={date} slug={slug} titleName='Article' />
      <section className='my-10 px-4 md:px-0 max-w-4xl mx-auto flex flex-col gap-10 relative items-center '>
        <div className='bg-g_darkPurpleToDarkPurple border-colors-pinkSoft p-5 rounded-2xl'>
          <p className='text-sm md:text-base'>
            Compliments are supposed to feel good. Yet many women say praise can land wrong, feel awkward, or even trigger irritation. This article
            explains why that happens and how to offer appreciation that feels safe, respectful, and real.
          </p>
        </div>
        <div className='flex items-start w-full'>
          <Head text='Why compliments backfire' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <div className='flex flex-col gap-6'>
          {articles.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <p className='text-white/60 text-sm md:text-base'>{item.text}</p>
            </div>
          ))}
        </div>
        <div className='relative w-full h-[500px]'>
          <Image src='/blogSlug1.png' quality={100} alt='image' fill className='object-cover rounded-2xl' />
        </div>
      </section>
    </div>
  )
}
export default Compliments
