import Link from "next/link";
import React from "react";
import { HomeBlurIcon, HomeIcon, LogoIcon, PaymentColoredIcon, PaymentIcon, WalletColoredIcon, WalletIcon, XIcon } from "../icons/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

type overlayProps = {
  overlay: boolean,
  handleOverlay: () => void
}

const MobileMenu = ({ overlay, handleOverlay }:overlayProps) => {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-0 w-full min-h-28 bg-white shadow-2xl shadow-black flex flex-row items-center justify-between p-2">
        <Link
          href={"/home"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          {
            pathname === '/home' ? (<HomeIcon />) : (<HomeBlurIcon />)
          }
          Home
        </Link>
        <Link
          href={"/payment"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          {
            pathname === '/payment' ? (<PaymentColoredIcon />) : <PaymentIcon /> 
          }
          Payment
        </Link>
        <div className="fixed flex flex-row items-center justify-center bottom-16 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#0B7E78] shadow-2xl shadow-gray-300" onClick={handleOverlay}>
        {
          overlay === true && <XIcon className={"w-12 h-12"} />  
        }
        {
          overlay === false && <LogoIcon className={"w-12 h-12"} />
        }
      </div>
        <Link
          href={"/wallet"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          {
            pathname ==='/wallet' ? (<WalletColoredIcon />) : (<WalletIcon />)
          }
          Wallet
        </Link>
        <Link
          href={"/profile"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <div className="relative w-7 h-7 overflow-hidden rounded-full">
            <Image src={"/user.png"} alt="user-image" fill priority className="object-cover" />
          </div>
          Profile
        </Link>
      {/* <div className="p-2 w-40 h-20 flex flex-row items-center gap-4">
      </div> */}
      {/* <div className="p-2 w-40 h-20 flex flex-row items-center ml-10 gap-4">
      </div> */}
    </div>
  );
};

export default MobileMenu;
