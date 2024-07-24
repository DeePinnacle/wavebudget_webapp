import Link from "next/link";
import React from "react";
import { HomeIcon, LogoIcon, PaymentIcon, WalletIcon, XIcon } from "../icons/icons";
import Image from "next/image";

type overlayProps = {
  overlay: boolean,
  handleOverlay: () => void
}

const MobileMenu = ({ overlay, handleOverlay }:overlayProps) => {
  return (
    <div className="fixed bottom-0 w-full min-h-28 bg-white shadow-2xl shadow-black flex flex-row items-center justify-between p-2">
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <HomeIcon />
          Home
        </Link>
        <Link
          href={"#"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <PaymentIcon />
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
          href={"#"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <WalletIcon />
          Wallet
        </Link>
        <Link
          href={"#"}
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
