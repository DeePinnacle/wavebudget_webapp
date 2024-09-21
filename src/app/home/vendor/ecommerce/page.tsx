"use client";
import overlay from "@/app/(admin)/_components/overlay";
import {
  DrawerPullIcon,
  HomeIcon,
  LogoIcon,
  WalletIcon,
  WhiteBackIcon,
  XIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const VendorEcommerce = () => {
  const [overlay, setOverlay] = useState(false);
  const [mode, setMode] = useState("home");
  const navigate = useRouter();
  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const handleMode = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setMode(id);
  };
  const handleBack = () => {
    navigate.back();
  };
  return (
    <>
      <div className="w-full min-h-screen bg-[#0B7E78] py-2">
        {/* back icon */}
        <div
          className="bg-transparent inline-block w-11 h-11 relative my-8 mx-4 cursor-pointer"
          onClick={handleBack}
        >
          <WhiteBackIcon className={"w-11 h-11 cursor-pointer absolute"} />
        </div>
        {/* title */}
        <p className="text-center text-white text-xl">E-commerce</p>
        {/* content */}
        <div className="w-full min-h-screen bg-white mt-12 rounded-tr-3xl rounded-tl-3xl px-4 py-6">
          <Link href={"/home/vendor/ecommerce/add-product"}>
            <div className="w-full h-[140px] relative my-3">
              <Image src={"/add-product.png"} alt="add-product" fill priority />
            </div>
          </Link>
          <Link href={"/home/vendor/ecommerce/product-list"}>
            <div className="w-full h-[140px] relative my-3">
              <Image
                src={"/product-list.png"}
                alt="product-list"
                fill
                priority
              />
            </div>
          </Link>
          <Link href={"/home/vendor/ecommerce/sales-history"}>
            <div className="w-full h-[140px] relative my-3">
              <Image
                src={"/sales-history.png"}
                alt="sales-history"
                fill
                priority
              />
            </div>
          </Link>
        </div>
      </div>
      {/* menu */}
      <div className="w-full min-h-28 bg-white px-6 py-2 fixed z-[9999] bottom-0 shadow-2xl shadow-black flex flex-row items-center justify-between">
        <Link
          href={"/home/vendor"}
          id="home"
          className="flex flex-col items-center justify-center gap-y-2 text-sm"
          onClick={(e) => {
            handleMode(e);
          }}
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
          <p className="text-center font-semibold text-lg my-2">
            Wisdom Umanah
          </p>
          <p className="text-center text-[#858585] font-[500]">
            Shop ID: <span className="font-semibold text-black">23DH98</span>
          </p>
          <Button className="mb-7 mt-11 block mx-auto h-14 bg-[#0B7E78] hover:bg-[#0B7E78]">
            Download QR code
          </Button>
        </div>
      </div>
    </>
  );
};

export default VendorEcommerce;
