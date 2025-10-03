import Head from '@/src/shared/Head/Head'
import Title from '@/src/shared/Title/Title'

const intro = [
  {
    title: 'Introduction',
    text: 'This Privacy Policy explains what data we collect, why we collect it, and how we protect it. By using this website, you agree to this Policy.',
  },
  {
    title: 'Data Controller',
    text: 'Warm Accord, 220 King St W, Suite 200, Toronto, ON M5H 1K4, Canada. Contact: privacy@warmaccord.com',
  },
]

const contentList = [
  {
    title: 'Data We Process',
    text: [
      'Form data: name, email, phone (optional), message content.',
      'Usage data: cookies, IP address, device/browser type, referrers/UTMs, aggregated analytics.',
      'Marketing data: campaign tags, consent status.',
    ],
  },
  {
    title: 'Purposes & Legal Bases',
    text: [
      'Providing services and responding to requests (contract/legitimate interest)',
      'UEmail updates and marketing (consent, withdraw anytime).',
      'Site security, fraud prevention, and improvement (legitimate interest).',
      'Legal compliance (legal obligation).',
    ],
  },
]

const content = [
  {
    title: 'Sharing with Service Providers',
    text: 'We use hosting, analytics, and email providers that follow data‑protection standards. International transfers occur only with appropriate safeguards (e.g., SCCs).',
  },
  {
    title: 'Retention',
    text: 'We keep personal data only as long as necessary for the purposes above, then delete or anonymize it.',
  },
  {
    title: 'Your Rights',
    text: 'Access, rectification, erasure, restriction, objection, data portability, and withdrawal of consent. To exercise rights, email privacy@warmaccord.com.',
  },
  {
    title: 'Security',
    text: 'HTTPS, access controls, encryption in transit, regular updates, and limited personnel access.',
  },
  {
    title: 'Cookies & Analytics',
    text: 'See our Cookie Policy for details and preference settings. You can manage optional cookies through the banner.',
  },
  {
    title: 'Children',
    text: 'This site is for adults. We do not knowingly collect data from children.',
  },
]

const outro = [
  {
    title: 'Changes to This Policy',
    text: 'We may update this Policy; the latest version will be posted here with a revision date.',
  },
  {
    title: 'Contact',
    text: 'This site is for adults. We do not knowingly collect data from children.',
  },
]

const PrivacyPolicy = () => {
  return (
    <div className='relative min-h-screen overflow-hidden flex-col items-center justify-center mb-32'>
      <div className='flex w-full flex-col items-center mb-10 gap-6'>
        <Title text='Privacy Policy' />
        <Head text='PRIVACY POLICY Rules you need to be aware of' fontSize='text-[28px] md:text-[42px]' />
      </div>

      <div className='w-full flex flex-col gap-6 items-center'>
        <div className='flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0'>
          {intro.map(item => (
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

              <ul className='flex flex-col gap-2 items-start list-disc list-inside'>
                {item.text.map(i => (
                  <li>
                    <span className='text-white/60 text-sm md:text-base'>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full gap-6'>
          {content.map(item => (
            <div className='flex flex-col gap-2'>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <span className='text-white/60 text-sm md:text-base'>{item.text}</span>
            </div>
          ))}
        </div>
        <div className='flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0'>
          {outro.map(item => (
            <div className='flex flex-col gap-3 '>
              <Head text={item.title} fontSize='text-base md:text-[20px]' />
              <span className='text-white/60 text-sm md:text-base'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PrivacyPolicy
