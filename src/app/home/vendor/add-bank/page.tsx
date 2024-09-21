"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  DrawerPullIcon,
  HomeIcon,
  LogoIcon,
  NotificationIcon,
  SlantArrowIcon,
  WalletIcon,
  WhiteNotificationIcon,
  XIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const AddBank = () => {
  const [overlay, setOverlay] = useState(false);
  const handleOverlay = () => {
    setOverlay(!overlay);
  };
  return (
    <div className="bg-[#050f0e] w-full min-h-screen pb-16">
      {/* notication header */}
      <div className="flex flex-row items-center justify-between py-7 px-3">
        <div className="flex flex-row gap-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-solid border-white">
            <Image
              src={"/user.png"}
              alt="user-image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#858585]">Good afternoon</p>
            <p className="text-white font-bold">Wisdom Umanah</p>
          </div>
        </div>
        <div className="bg-[#042C2A] w-12 h-12 rounded-full flex flex-row items-center justify-center">
          <WhiteNotificationIcon />
        </div>
      </div>
      <h2 className="text-white text-center mt-14 text-xl">Wallet balance</h2>
      <p className="text-white text-center mt-6 text-5xl">₦86,550.28</p>
      <div className="flex flex-row items-center gap-4 mt-14 px-3">
        <Button className="bg-[#042C2A] w-full py-7 text-lg hover:bg-[#042C2A]">+ Add bank</Button>
        <Button className="bg-[#042C2A] w-full py-7 text-lg hover:bg-[#042C2A]">
          <SlantArrowIcon className={"mr-2"} /> Withdraw
        </Button>
      </div>
      <div className="w-full bg-white h-[37.5rem] mt-8 rounded-tr-3xl rounded-tl-3xl py-4 px-2">
        <div className="grid grid-cols-2 gap-3 items-center my-3">
          <Link href={""}>
            <div className="relative h-[150px] overflow-hidden">
              <Image src={"/instore.png"} alt="instore" fill priority />
            </div>
          </Link>
          <Link href={""}>
            <div className="relative h-[150px] overflow-hidden">
              <Image src={"/ecommerce.png"} alt="instore" fill priority />
            </div>
          </Link>
        </div>
        <Link href={""}>
          <div className="w-full h-[150px] relative">
            <Image src={"/sales.png"} alt="sales" fill priority />
          </div>
        </Link>
      </div>
      {/* menu */}
      <div className="w-full min-h-28 bg-white px-6 py-2 fixed z-[9999] bottom-0 shadow-2xl shadow-black flex flex-row items-center justify-between">
        <Link
          href={"/home"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <HomeIcon />
          Home
        </Link>
        <div
          className="fixed flex flex-row items-center justify-center bottom-16 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#0B7E78] shadow-2xl shadow-gray-300"
          onClick={handleOverlay}
        >
          {overlay === true && <XIcon className={"w-12 h-12"} />}
          {overlay === false && <LogoIcon className={"w-12 h-12"} />}
        </div>
        <Link
          href={"/wallet"}
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
        >
          <WalletIcon />
          Wallet
        </Link>
      </div>
      {/* overlay */}
      <div
        className={` ${
          overlay !== false ? "block" : "hidden"
        } absolute top-0 bottom-0 right-0 left-0 h-[1000px] bg-black/20 flex flex-col justify-center p-2`}
      >
        <div className="w-[95%] min-h-6 bg-white absolute bottom-14 mx-auto px-6 py-2 rounded-2xl">
          <DrawerPullIcon className={"mx-auto"} />
          <div className="w-4/5 h-80 relative overflow-hidden mx-auto my-5">
            <Image
              src={"/scan.png"}
              alt="scan-icon"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute w-16 h-16 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-1 bg-white rounded-full">
              <Image
                src={"/user.png"}
                alt="user"
                priority
                fill
                className="z-50"
              />
            </div>
          </div>
          <p className="text-center font-semibold text-lg my-2">Wisdom Umanah</p>
          <p className="text-center text-[#858585] font-[500]">Shop ID: <span className="font-semibold text-black">23DH98</span></p>
          <Button className="mb-7 mt-11 block mx-auto h-14 bg-[#0B7E78] hover:bg-[#0B7E78]">Download QR code</Button>
        </div>
      </div>
    </div>
  );
};

export default AddBank;
