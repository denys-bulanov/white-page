'use client'
import { signInApi } from '@/src/api/authApi'
import Button from '@/src/shared/Button/Button'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'
import Title from '@/src/shared/Title/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PopupResetPassword from './PopupResetPassword/PopupResetPassword'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const handleSignIn = () => {
    router.push(`/register`)
  }
  const handleForgotPassword = () => {
    setIsOpen(true)
  }

  const signInHandler = async () => {
    const { data, err } = await signInApi({ email, password })

    setLoading(false)

    if (err || !data.success) {
      console.error('Ошибка регистрации:', err || data.message)

      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      console.log('Успешная регистрация:', data)

      const raw = localStorage.getItem('utm_params')
      let queryString = ''
      if (raw) {
        const url = `https://${process.env.NEXT_PUBLIC_URL}/${queryString}auth_token=${data.authToken}&auth_type=login`
        router.push(url)
      }
    }
  }

  return (
    <div className='fixed inset-0 w-screen h-screen flex items-center justify-center backdrop-blur-sm bg-black/30 z-50'>
      <div className='bg-black/70 p-5  md:p-14 md:px-16 rounded-xl shadow-xl max-w-lg md:w-full w-[90%]  text-center border border-colors-purpleSoft/40'>
        {isOpen ? (
          <PopupResetPassword onClose={() => setIsOpen(false)} isOpen={isOpen} />
        ) : (
          <>
            <div className='flex flex-col gap-5'>
              <div>
                <Title text={'Log In'} />
              </div>
              <Head text={'Welcome Back'} fontSize='text-[26px] md:text-[32px]' />
              <Paragraph text='She is Waiting For You Inside...' />
            </div>
            <div className='flex w-full items-center justify-center  mt-5'>
              <button className='bg-[#131314] flex items-center gap-5 justify-center w-full border border-colors-purpleSoft/40 rounded-xl p-4'>
                <Image src='/google.svg' quality={100} width={18} height={18} alt='google' />
                <span>Log in with Google</span>
              </button>
            </div>
            <div className='flex items-center justify-center w-full gap-2 mt-2'>
              <div className='bg-g_divideOr w-[22px] h-[1px]'></div>
              <p>or</p>
              <div className='bg-g_divideOr w-[22px] h-[1px] rotate-180'></div>
            </div>
            <div className='flex flex-col gap-5 mt-2'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                onChange={e => setEmail(e.target.value)}
                className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-3  border border-white/40 rounded-xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                onChange={e => setPassword(e.target.value)}
                className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-3 border border-white/40 rounded-xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
              />
            </div>

            <div onClick={handleForgotPassword} className='flex mt-2 justify-end w-full text-colors-purpleSoft text-sm cursor-pointer'>
              <p>Forgot Password?</p>
            </div>
            {errorMsg && (
              <div className='bg-red-500 rounded-2xl px-5 py-1  mt-4'>
                <p>{errorMsg}</p>
              </div>
            )}

            <div className='flex justify-center gap-4 mt-10'>
              <Button text='Log In' onClick={signInHandler} />
            </div>
            <div className='text-xs mt-8'>
              <span>
                By continuing, you agree to <span className='cursor-pointer text-colors-purpleSoft'>Term of Service & Privacy Policy</span>
              </span>
            </div>

            <div className='flex gap-5 mt-5 items-center text-xs justify-center'>
              <span className='text-white/40'>You don’t have an account?</span>
              <div className='flex gap-2 cursor-pointer items-center' onClick={handleSignIn}>
                <span>Sign in</span>
                <Image src='/arrowLog.svg' quality={100} alt='arrow' width={13} height={13} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
