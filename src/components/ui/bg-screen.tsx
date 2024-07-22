import React from 'react'
import { ReactNode } from 'react'
import Image from "next/image"
type screenProps =  {
    children?: ReactNode
}

const BackgroundScreen = ({ children }:screenProps) => {
  return (
    <div>
        <Image 
            src={"/bg-image.png"}
            alt='background-image'
            fill
            priority
            className='object-cover'
        />
        { children }
    </div>
  )
}

export default BackgroundScreen;