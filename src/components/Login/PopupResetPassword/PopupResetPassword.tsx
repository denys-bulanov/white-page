'use client'

import React, { useEffect, useState } from 'react'
import Button from '@/src/shared/Button/Button'
import Image from '@/node_modules/next/image'
import { newPasswordApi, otpApi, resetPasswordApi } from '@/src/api/authApi'
import OtpInput from './OtpInput/OtpInput'
import Title from '@/src/shared/Title/Title'
import Head from '@/src/shared/Head/Head'
import Paragraph from '@/src/shared/Paragraph/Paragraph'

type PopupResetPasswordProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  actionText?: string
  onAction?: () => void
}

const PopupResetPassword = ({ isOpen, onClose, onAction }: PopupResetPasswordProps) => {
  if (!isOpen) return null
  const [email, setEmail] = useState('')
  const [isSuccessRequest, setIsSuccessRequest] = useState(false)
  const [isNewPassword, setIsNewPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [isPasswordTheSame, setIsPasswordTheSame] = useState(false)
  const [isAllDone, setIsAllDone] = useState(false)
  const [token, setToken] = useState('')
  const [otp, setOtp] = useState('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [isShowError, setIsShowError] = useState(false)

  function maskEmail(email: string): string {
    const [localPart, domain] = email.split('@')

    if (localPart.length <= 1) {
      return `*@${domain}`
    }

    const lastChar = localPart.slice(-1)
    return `${'*'.repeat(localPart.length - 1)}${lastChar}@${domain}`
  }
  useEffect(() => {
    setErrorMsg(null)
  }, [])

  const handleResetPassword = async () => {
    const { data, err } = await resetPasswordApi({ email })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsSuccessRequest(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsSuccessRequest(true)
      console.log('Успешный логин:', data)
      setErrorMsg(null)
    }
  }

  const handleVerifyCode = async () => {
    const { data, err } = await otpApi({ email, otp })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsNewPassword(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsNewPassword(true)
      console.log('Успешный логин:', data)
      setToken(data.token)
      setErrorMsg(null)
    }
  }

  const handleNewPassword = async () => {
    const { data, err } = await newPasswordApi({ newPassword: password, token })
    if (err || !data.success) {
      console.error('Ошибка логина:', err || data.message)
      setIsAllDone(false)
      setErrorMsg(err?.response.data?.message || data.message || 'Server error')

      return
    } else {
      setIsAllDone(true)
      console.log('Успешный логин:', data)
      setErrorMsg(null)
    }
  }
  const togglePassword = (isRepeat: boolean) => {
    isRepeat ? setShowRepeatPassword(prev => !prev) : setShowPassword(prev => !prev)
  }

  useEffect(() => {
    if (password === repeatPassword) {
      setIsPasswordTheSame(true)
    } else {
      setIsPasswordTheSame(false)
    }
  }, [password, repeatPassword])

  useEffect(() => {
    if (errorMsg) {
      setIsShowError(true)
    }
  }, [errorMsg])

  return (
    <div className='relative flex flex-col text-center gap-6  h-full p-4 sm:p-6 md:p-10 '>
      <div className='flex flex-col gap-5'>
        <div>
          <Title text={'Password Recovery'} />
        </div>
        <Head
          text={
            isAllDone && isSuccessRequest && isNewPassword
              ? 'Password Updated Successfully'
              : isSuccessRequest && isNewPassword
                ? 'Set a New Password'
                : isSuccessRequest
                  ? 'Check Your Email'
                  : 'Forgot password ?'
          }
          fontSize='text-[26px] md:text-[32px]'
        />
        <Paragraph
          text={
            isAllDone && isSuccessRequest && isNewPassword
              ? 'You can now log in with your new password.'
              : isSuccessRequest && isNewPassword
                ? 'Create a strong new password to secure your Swipey account and continue.'
                : isSuccessRequest
                  ? `A verification code has been sent to ${maskEmail(email)}`
                  : 'Enter your email and we’ll send you a code to create a new password for your Swipey account.'
          }
        />
      </div>
      <div>
        {!isAllDone ? (
          isSuccessRequest && isNewPassword ? (
            <div className='flex flex-col gap-5 text-left'>
              <div className='flex flex-col gap-2'>
                <label className='text-colors-Text_Secondary text-sm pl-1 '>New password</label>
                <div className='relative w-full'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    autoComplete='off'
                    spellCheck='false'
                    autoCorrect='off'
                    onChange={e => (setPassword(e.target.value), setIsShowError(false))}
                    className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-3 border border-white/40 rounded-xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/20 text-sm sm:text-base'
                  />
                  <button type='button' onClick={() => togglePassword(false)} className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    <Image
                      src={showPassword ? '/Eye.svg' : '/hidden.svg'}
                      alt={showPassword ? 'Hide password' : 'Show password'}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-colors-Text_Secondary text-sm pl-1'>Repeat password</label>
                <div className='relative w-full'>
                  <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    // placeholder='Repeat password'
                    value={repeatPassword}
                    autoComplete='off'
                    spellCheck='false'
                    autoCorrect='off'
                    onChange={e => (setRepeatPassword(e.target.value), setIsShowError(false))}
                    className='w-full bg-white/10  backdrop-blur-2xl px-4 sm:px-6 py-3 border border-white/40 rounded-xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/20 text-sm sm:text-base'
                  />
                  <button type='button' onClick={() => togglePassword(true)} className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    <Image
                      src={showRepeatPassword ? '/Eye.svg' : '/hidden.svg'}
                      alt={showRepeatPassword ? 'Hide password' : 'Show password'}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>

              {password && repeatPassword ? (
                <div>
                  {isPasswordTheSame ? (
                    <div className='text-colors-customGreen text-sm flex gap-2 items-start'>
                      <Image src='/pass.svg' quality={100} width={16} height={16} alt='icon' />
                      <p>Passwords Match</p>
                    </div>
                  ) : (
                    <div className='text-colors-Red text-sm flex gap-2 items-center'>
                      <Image src='/cross.svg' quality={100} width={16} height={16} alt='icon' />
                      <p>Passwords Not Match</p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ) : isSuccessRequest ? (
            <OtpInput onChange={code => setOtp(code)} setIsShowError={setIsShowError} isShowError={isShowError} />
          ) : (
            <input
              type='email'
              placeholder='Email'
              value={email}
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              onChange={e => (setEmail(e.target.value), setIsShowError(false))}
              className='w-full bg-white/10 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/40 rounded-2xl text-white placeholder-gray-300 transition transform duration-300 ease-out focus:outline-none focus:border-white/40  text-sm sm:text-base'
            />
          )
        ) : null}

        {isShowError && (
          <div>
            <span className='text-colors-Red text-sm'>{errorMsg}</span>
          </div>
        )}
      </div>
      <div className='text-center flex flex-col gap-2'>
        <Button
          text={
            isAllDone && isSuccessRequest && isNewPassword
              ? 'Go to Log In'
              : isSuccessRequest && isNewPassword
                ? 'Set New Password'
                : isSuccessRequest
                  ? 'Verify'
                  : 'Send Code'
          }
          onClick={
            isAllDone && isSuccessRequest && isNewPassword
              ? onClose
              : isSuccessRequest && isNewPassword
                ? handleNewPassword
                : isSuccessRequest
                  ? handleVerifyCode
                  : handleResetPassword
          }
          disabled={isSuccessRequest && otp.length !== 5 ? true : isNewPassword ? !isPasswordTheSame : false}
        />
        {!isNewPassword && (
          <>
            {isSuccessRequest && (
              <div className='text-xs mt-8'>
                <span>
                  Didn’t receive the email?{' '}
                  <span className='cursor-pointer text-colors-purpleSoft' onClick={handleResetPassword}>
                    Click to resend
                  </span>
                </span>
              </div>
            )}

            <div className='flex gap-2 cursor-pointer items-center w-full justify-center pt-3 text-xs' onClick={onClose}>
              <Image src='/arrowLog.svg' quality={100} alt='arrow' width={10} height={10} className='rotate-180' />
              <span>Back to Log In</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PopupResetPassword
