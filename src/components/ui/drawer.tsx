import React, { PropsWithChildren, useEffect, useRef } from "react";
import { 
    LogoIcon,
    DrawerPullIcon
 } from "../icons/icons";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/click-outside";
import LogoTitle from "./logo-title";

 type drawerProps = {
    children?: React.ReactNode,
    className?: String,
 }

const Drawer = ({ children, className }: drawerProps) => {
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
      <div className={cn(`relative w-full min-h-screen bg-black/20 flex flex-col items-center z-[9999]`, className)} >
          <LogoTitle />
        <div className="w-full min-h-[400px] bottom-0 bg-white rounded-tr-3xl rounded-tl-3xl pb-10 px-3">
          <DrawerPullIcon className={"mx-auto mb-4"} />
          {children}
        </div> 
      </div>
    </>
  );
};

export default Drawer;
