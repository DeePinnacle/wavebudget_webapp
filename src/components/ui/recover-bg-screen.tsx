import React from 'react'
import { ReactNode } from 'react'
import Image from "next/image"
type screenProps =  {
    children?: ReactNode
}

const RecoverBackgroundScreen = ({ children }:screenProps) => {
  return (
    <div className='relative min-h-screen'>
        <Image 
            src={"/recover-bg.png"}
            alt='background-image'
            fill
            priority
            className='object-cover'
        />
        { children }
    </div>
  )
}

export default RecoverBackgroundScreen;