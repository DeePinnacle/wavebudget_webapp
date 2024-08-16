'use client'
import React, { PropsWithChildren, useState } from 'react'
import InstoreModal from "../../components/ui/instore-modal";
import MobileMenu from "../../components/ui/mobile-menu";
import { usePathname } from 'next/navigation';
useState

const Layout = ({ children }:PropsWithChildren) => {
    const [overlay, setOverlay] = useState(false);
    const handleOverlay = () => {
      setOverlay(!overlay);
    }
    const pathname = usePathname()
  return (
    <>
        { children }
        {/* instore overlay */}
        <div className={`${pathname === '/instore' || pathname === '/instore/scan' ? 'block' : 'hidden' }`}>
          <InstoreModal overlay={overlay} />
          <MobileMenu overlay={overlay} handleOverlay={handleOverlay} />
        </div>
    </>
  )
}

export default Layout
