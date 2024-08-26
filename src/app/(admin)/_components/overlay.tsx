import React from 'react'
import { cn } from '@/lib/utils'
interface overlayConfig {
    children: React.ReactNode,
    className?: string
}

const Overlay = ({ children, className }:overlayConfig) => {
  return (
    <div className={cn(`fixed flex flex-col items-center justify-center w-full min-h-screen bg-black/20 inset-0 py-11`, className)}>
        {
            children
        }
    </div>
  )
}

export default Overlay