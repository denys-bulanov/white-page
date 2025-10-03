import { useAppSelector } from '@/lib/hooks'
import Head from '@/src/shared/Head/Head'
import HeaderWithBackground from '@/src/shared/HeaderWithBackground/HeaderWithBackground'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import Link from 'next/link'

const InRelationship = () => {
  return (
    <div className='relative px-4 md:px-0 min-h-screen overflow-hidden flex  items-center'>
      <section className='my-10 max-w-4xl mx-auto flex flex-col gap-10 relative items-center '>
        <div className='flex items-start w-full gap-4 flex-col'>
          <Head text='When you are in a relationship' fontSize='text-[28px] md:text-[42px]' />
          <Title text='Positive attention is a powerful repair tool when it is steady and sincere.' />
        </div>

        <div className='bg-g_notFor border  text-sm md:text-base border-colors-purpleSoft/30 w-full p-6 flex rounded-3xl flex-col gap-4'>
          <Head text='One minute practice for couples' fontSize='text-base md:text-[20px]' />
          <ul className='list-disc ml-5 space-y-2 '>
            <li>Once a day, name one concrete thing your partner did.</li>
            <li>Add the impact on you.</li>
            <li>Add a small thank you.</li>
          </ul>

          <div className='bg-g_darkPurpleToDarkPurple border-colors-pinkSoft p-5 rounded-2xl'>
            <p>
              <span className='text-white/60'>Example:</span> “When you sent that text about being late, I felt calmer because I did not have to
              guess. Thank you.”
            </p>
          </div>
        </div>

        <div>
          <p className='text-white/60  text-sm md:text-base'>
            If conflict is frequent, appreciation works best alongside a clear repair process. The course
            <span className='text-colors-purpleSoft'> Communication </span> and
            <span className='text-colors-purpleSoft'> Conflict: Without Drama </span>
            teaches a simple return-to-talk protocol and how to pair gratitude with real agreements:{' '}
            <Link href={`warmaccord.com/courses/conflict-communication`} className='underline'>
              warmaccord.com/courses/conflict-communication
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
export default InRelationship
