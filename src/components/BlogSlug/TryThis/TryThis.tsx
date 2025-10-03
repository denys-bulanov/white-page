import Head from '@/src/shared/Head/Head'

const articles = [
  {
    instead: 'You are gorgeous.',
    try: 'I like how you styled your jacket with those boots. It looks very you.',
  },
  {
    instead: 'You are perfect.',
    try: 'I appreciated how you asked that clarifying question. It helped the whole group.',
  },
  {
    instead: 'You are so chill.',
    try: 'I noticed you paused before replying. It kept the conversation calm. Thank you.',
  },
  {
    instead: 'You are smarter than other women I know.',
    try: 'Your explanation was clear and kind. I learned from it.',
    note: 'avoid comparisons. They put other people down and create pressure.',
  },
  {
    instead: 'You look hot.',
    try: 'I am attracted to you, and I want to move at a pace that is comfortable for both of us.',
    note: 'want to talk about attraction. Add consent and pace.',
  },
]

const TryThis = () => {
  return (
    <div className='relative px-4 md:px-0 min-h-screen overflow-hidden flex items-center justify-center '>
      <section className='my-10 max-w-4xl mx-auto flex flex-col gap-10 relative items-center  justify-center'>
        <div className='flex items-start w-full'>
          <Head text='Try this instead of that' fontSize='text-[28px] md:text-[42px]' />
        </div>

        <ul className='flex flex-col gap-6 list-disc text-sm md:text-base items-start w-full pl-5 md:pl-0'>
          {articles.map(item => (
            <li key={item.instead} className='space-y-2 '>
              <p className='text-white/60'>
                Instead of: <span className='text-white'> “{item.instead}”</span>
              </p>
              <p className='text-white/60 ml-3'>
                Try: <span className='text-white'> “{item.try}”</span>
              </p>
              {item.note && (
                <p className='text-white/60 ml-3'>
                  Note: <span className='text-colors-purpleSoft'> {item.note}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
export default TryThis
