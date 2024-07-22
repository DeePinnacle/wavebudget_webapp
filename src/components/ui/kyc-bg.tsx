import Image from 'next/image'
import React from 'react'


type pageProps = {
    className?: string,
    children: React.ReactNode
}

const KycBG = ({ className, children }:pageProps) => {
  return (
    <div className='relative w-full inset-0 min-h-screen bg-white'>
        <div className='relative bg-white w-full min-h-32'>
            <Image 
                src={"/kyc-image.png"}
                alt='Kyc image'
                fill
                priority
                className='object-cover'
            />
        </div>
        { children }
    </div>
  )
}

export default KycBG