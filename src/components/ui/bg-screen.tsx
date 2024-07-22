import React from 'react'
import { ReactNode } from 'react'
import Image from "next/image"
type screenProps =  {
    children?: ReactNode
}

const BackgroundScreen = ({ children }:screenProps) => {
  return (
    <div className='w-full min-h-screen'>
        <Image 
            src={"/bg-image.png"}
            alt='background-image'
            fill
            priority
            className='object-cover'
        />
        <div className='absolute inset-0 w-full min-h-screen bg-black/20'>
          { children }
        </div>
    </div>
  )
}

export default BackgroundScreen;