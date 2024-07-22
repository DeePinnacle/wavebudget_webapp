'use client'
import React from 'react'
import { LogoIcon } from '../icons/icons'
import { usePathname } from 'next/navigation'

const LogoTitle = () => {
  const URLpathname = usePathname()
  return (
    <div className='absolute top-3 w-full flex flex-col items-center justify-center gap-y-5 py-7'>
        <LogoIcon />
        {
          URLpathname === "/login" ? (<h2 className='text-center font-bold text-xl text-white'>Log in my account</h2>) : URLpathname === "/register" ? (<h2 className='text-center font-bold text-xl text-white mb-3'>Create your account</h2>) : (null)
        }
    </div>
  )
}

export default LogoTitle