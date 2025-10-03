import React from 'react'
import Image from 'next/image'

type TeamCardProps = {
  name: string
  position: string
  biography: string
  tagline: string
  approaches: string
  topics: string
  education: string
  quote: string
  image: string
  id: number
}

const TeamCard = ({ id, name, position, biography, tagline, approaches, topics, education, quote, image }: TeamCardProps) => {
  const bgClasses = [
    `bg-[radial-gradient(circle_at_20%_30%,rgba(90,0,150,0.5),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(40,0,100,0.9),transparent_70%),linear-gradient(135deg,#0d001a,#1a0026,#0a0011)]`,
    `bg-[radial-gradient(circle_at_20%_30%,rgba(90,0,150,0.5),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(40,0,100,0.95),transparent_70%),linear-gradient(70deg,#0d001a,#1a0026,#0a0011)]`,
    `bg-[radial-gradient(circle_at_20%_50%,rgba(90,0,150,0.5),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(40,0,100,0.85),transparent_70%),linear-gradient(20deg,#0d001a,#1a0026,#0a0011)]`,
    `bg-[radial-gradient(circle_at_20%_30%,rgba(90,0,150,0.5),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(40,0,100,0.9),transparent_50%),linear-gradient(135deg,#0d001a,#1a0026,#0a0011)]`,
    `bg-[radial-gradient(circle_at_60%_10%,rgba(90,0,150,0.5),transparent_60%),radial-gradient(circle_at_40%_80%,rgba(40,0,100,0.9),transparent_70%),linear-gradient(135deg,#0d001a,#1a0026,#0a0011)]`,
  ]

  const bgClass = bgClasses[id] || bgClasses[0]

  return (
    <div
      className={`
    flex flex-col justify-between gap-6 p-6 rounded-2xl border border-colors-purpleDark  text-white shadow-2xl max-w-3xl mx-auto
    ${bgClass} 
    `}
    >
      <div className='flex flex-col md:flex-row gap-3'>
        <div className='relative w-full md:w-[200px] h-[300px] md:h-[200px] flex-shrink-0'>
          <Image src={image} quality={100} alt={name} fill className='rounded-2xl object-cover' />
        </div>
        <div className='flex flex-col '>
          <div>
            <p className='text-[22px] md:text-[32px] font-anton '>{name}</p>
            <p className='text-white/60 mb-5 md:mb-10 '>{position}</p>
          </div>

          <div className='bg-g_darkPurpleBlack rounded-full px-4 py-2 text-sm  text-white/80'>“{quote}”</div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-sm leading-relaxed text-white/60'>
          <span className='font-semibold text-white'>Biography: </span> {biography}
        </p>
        <p className='text-sm text-white/60'>
          <span className='font-semibold text-white'>Tagline: </span> {tagline}
        </p>
        <p className='text-sm text-white/60'>
          <span className='font-semibold text-white'>Approaches: </span> {approaches}
        </p>
        <p className='text-sm text-white/60'>
          <span className='font-semibold text-white'>Education: </span> {education}
        </p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {topics.split(',').map((topic, idx) => (
            <span key={idx} className='px-3 py-1 text-xs rounded-full  border border-colors-purpleDark text-purple-200'>
              {topic.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamCard
