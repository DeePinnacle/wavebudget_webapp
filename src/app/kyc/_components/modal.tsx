import { cn } from '@/lib/utils'
import React from 'react'
type modalProps = {
    children: React.ReactNode,
    className?: string
}
const Modal = ({ children, className }:modalProps) => {
  return (
    <div className={cn('relative min-h-2 w-full bg-white rounded-tr-3xl rounded-tl-3xl', className)}>
        { children }
    </div>
  )
}

export default Modal