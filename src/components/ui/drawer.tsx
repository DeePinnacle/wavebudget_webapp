'use client'
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { LogoIcon, DrawerPullIcon } from "../icons/icons";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/click-outside";
import LogoTitle from "./logo-title";

import { usePathname } from 'next/navigation';

type drawerProps = {
  children?: React.ReactNode;
  className?: String;
};

const Drawer = ({ children, className }: drawerProps) => {
  const pathname = usePathname()
  // const boxRef = useRef<HTMLDivElement>(null)

  // try changing the any later

  // const handleCloseDrawer = (e: any)=>{
  //   if(e.target.classList[0] ==="absolute"){
  //     handleDrawer(e)
  //   }
  // }

  //  useClickOutside(boxRef, ()=>{
  //   // handleDrawer()
  //  })

  return (
    <>
      <div className="my-5 w-full flex items-center justify-center min-h-3">
        <LogoTitle />
      </div>
      <div className={`${ pathname === '/login' ? 'mt-36' : '' } w-full min-h-[400px] bg-white rounded-tr-3xl rounded-tl-3xl pb-10 px-4`}>
        <DrawerPullIcon className={"mx-auto mt-3"} />
        { children }
      </div>
    </>
  );
};

export default Drawer;
