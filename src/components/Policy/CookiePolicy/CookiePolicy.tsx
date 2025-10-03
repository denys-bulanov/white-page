import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'

const content = [
  {
    title: 'What Are Cookies',
    text: 'Small files stored by your browser that help the site function and improve your experience.',
  },
]

const contentList = [
  {
    title: 'Categories We Use',
    text: [
      'Strictly Necessary: authentication, security, basic preferences.',
      'Performance: anonymous usage statistics.',
      'Functional: remember choices (language, forms).',
      'Marketing: measure ad effectiveness.',
    ],
  },
]
const content2 = [
  {
    title: 'Managing Your Preferences',
    text: 'Use the cookie banner to accept all, reject all, or customize categories. Change your choice anytime via “Cookie Settings” in the footer.',
  },
]

const outro = [
  {
    title: 'Duration',
    text: 'Session cookies (expire when you close the browser) and persistent cookies (up to 12 months).',
  },
  {
    title: 'Contact',
    text: 'Questions about cookies: privacy@warmaccord.com.',
  },
]

const CookiePolicy = () => {
  return (
    <div className='relative min-h-screen overflow-hidden flex-col items-center justify-center '>
      <div className='flex w-full flex-col items-center mb-10 gap-6'>
        <Title text='Cookie Policy' />
        <Head text='COOKIE POLICY' fontSize='text-[28px] md:text-[42px]' />
      </div>

      <div className='w-full flex flex-col gap-6 items-center'>
        <div className='flex flex-col w-full gap-6'>
          {content.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <span className='text-white/60 text-sm md:text-base'>{item.text}</span>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-6 list-disc items-start w-full'>
          {contentList.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />

              <ul className='flex text-sm md:text-base flex-col gap-2 items-start list-disc list-inside'>
                {item.text.map(i => (
                  <li>
                    <span className='text-white/60'>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full gap-6'>
          {content2.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <span className='text-white/60 text-sm md:text-base'>{item.text}</span>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between w-full'>
          {outro.map(item => (
            <div className='flex flex-col gap-3'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <span className='text-white/60 text-sm md:text-base'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CookiePolicy
