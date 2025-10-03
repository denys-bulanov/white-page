import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  console.log(pathname)
  return (
    <footer className='bg-black mt-12'>
      <div className='mx-auto px-6 py-10'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-evenly'>
          <div className='relative flex justify-center lg:justify-start cursor-pointer'>
            <Image src='/Logo.svg' quality={100} width={150} height={100} alt='logo' className='object-contain' />
          </div>
          <nav className='flex justify-center gap-6'>
            <Link href='/courses' className='hover:text-colors-purpleSoft transition'>
              Courses
            </Link>
            <Link href='/team' className='hover:text-colors-purpleSoft transition'>
              Team
            </Link>
            <Link href='/blog' className='hover:text-colors-purpleSoft transition'>
              Blog
            </Link>
            <Link href='/#' className='hover:text-colors-purpleSoft transition'>
              Contacts
            </Link>
          </nav>

          {pathname !== '/quiz' && (
            <div className='flex max-w-[550px] justify-between py-5 px-3 items-center rounded-3xl bg-g_darkPurpleWhite'>
              <div className='flex-1'>
                <Head purpleText='Ready to try a better approach to relationships?' text='' font='font-base' fontSize='text-[18px] md:text-[22px]' />
              </div>
              <div className='flex-1 w-[250px] max-w-[250px]'>
                <Button text='Discover Courses' onClick={() => router.push('/courses')} />
              </div>
            </div>
          )}
        </div>

        {pathname !== '/quiz' && (
          <p className='text-center text-xs md:text-sm mt-10 '>
            By clicking “Submit,” you agree to our{' '}
            <Link href='/policy' className='text-colors-purpleSoft hover:text-gray-300'>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href='/policy' className='text-colors-purpleSoft hover:text-gray-300'>
              Cookie Policy
            </Link>
            . All rights reserved | Warm Accords | 2025
          </p>
        )}
      </div>

      <div className='bg-colors-purpleDark'>
        <p className='text-center text-xs md:text-sm  py-1 px-4 '>
          Educational content only. Not psychotherapy. If you are in crisis, please contact a licensed professional.
        </p>
      </div>
    </footer>
  )
}
