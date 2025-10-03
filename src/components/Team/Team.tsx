import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'
import { mockTeam } from './mock-data'
import TeamCard from './TeamCard/TeamCard'

export default function Team() {
  return (
    <section className='max-w-7xl mx-auto flex flex-col gap-10 relative items-center '>
      <Title text='Our Team' />
      <div className='text-center flex items-center justify-center'>
        <Head text='Meet Our Magicians' fontSize='text-[28px] md:text-[42px]' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 py-8'>
        {mockTeam.map((member, idx) => (
          <div
            key={member.slug}
            className={`
                ${idx === mockTeam.length - 1 ? 'md:col-span-2 flex justify-center' : ''}
              `}
          >
            <TeamCard key={member.slug} {...member} id={idx} />
          </div>
        ))}
      </div>
    </section>
  )
}
