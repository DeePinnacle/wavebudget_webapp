import Link from "next/link";
import React from "react";
import { HomeIcon, LogoIcon, PaymentIcon, WalletIcon, XIcon } from "../icons/icons";
import Image from "next/image";

type overlayProps = {
  overlay: boolean
}

const MobileMenu = ({ overlay }:overlayProps) => {
  return (
    <div className="fixed bottom-0 w-full min-h-28 bg-red-500 shadow-2xl shadow-black grid grid-cols-2 gap-2 p-2">
      <div className="p-2 w-40 h-20 flex flex-row items-center gap-4">
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center text-sm"
        >
          <HomeIcon />
          Home
        </Link>
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center text-sm"
        >
          <PaymentIcon />
          Payment
        </Link>
      </div>
      <div className="p-2 w-40 h-20 flex flex-row items-center ml-10 gap-4">
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center text-sm"
        >
          <WalletIcon />
          Wallet
        </Link>
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center text-sm"
        >
          <div className="relative w-7 h-7 overflow-hidden rounded-full">
            <Image src={"/user.png"} alt="user-image" fill priority className="object-cover" />
          </div>
          Profile
        </Link>
      </div>
      <div className="fixed flex flex-row items-center justify-center bottom-16 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#0B7E78] shadow-2xl shadow-gray-300">
        {
          overlay === true && <XIcon className={"w-12 h-12"} />  
        }
        {
          overlay === false && <LogoIcon className={"w-12 h-12"} />
        }
      </div>
    </div>
  );
};

export default MobileMenu;
