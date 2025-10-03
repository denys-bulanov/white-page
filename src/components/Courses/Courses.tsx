import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'
import CourseCard from './CourseCard/CourseCard'

export default function Courses() {
  const courses = [
    {
      title: 'Emotional Intelligence in Relationships',
      duration: '6 weeks',
      level: 'Beginner',
      description: 'Core empathy and self-regulation skills.',
      slug: 'emotional-intelligence',
      image: '/coursesFor1.png',
    },
    {
      title: 'Communication and Conflict: Without Drama',
      duration: '8 weeks',
      level: 'Advanced',
      description: 'De-escalation, repair, and durable agreements.',
      slug: 'conflict-communication',
      image: '/coursesFor2.png',
    },
    {
      title: 'Ethical Dating & First Dates',
      duration: '6 weeks',
      level: 'For singles',
      description: 'Profile, openers, consent, and safety.',
      slug: 'ethical-dating',
      image: '/coursesFor3.png',
    },
  ]

  return (
    <section className='max-w-7xl px-4 md:px-0 mx-auto flex flex-col gap-10 relative items-center '>
      <div className='text-center max-w-2xl gap-6 flex flex-col items-center mx-auto'>
        <Title text='Courses Catalogue' />
        <Head text='Courses for men about relationships' fontSize='text-[28px] md:text-[42px]' />
        <div className=' mb-10'>
          <Paragraph
            color='text-white/60'
            text='Choose the format that fits your situation - build empathy, clean up conflicts, or start dating ethically and confidently.'
          />
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        {courses.map((course, idx) => (
          <CourseCard {...course} />
        ))}
      </div>
    </section>
  )
}
