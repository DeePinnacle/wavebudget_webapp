'use client'
import {
  AddWalletIcon,
  ArrowDownIcon,
  DropDownIcon,
  GreenArrowIcon,
  PigWalletIcon,
  SlantArrowIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InstoreModal from "@/components/ui/instore-modal";
import MobileMenu from "@/components/ui/mobile-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Wallet = () => {
  const [overlay, setOverlay] = useState(false);
  const navigation = useRouter()
  const handleOverlay = () => {
    setOverlay(!overlay);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-[#050f0e] py-2">
        <h2 className="text-white text-center mt-14 text-xl">Wallet balance</h2>
        <p className="text-white text-center mt-6 text-5xl">
          ₦86,550.28
        </p>

        <div className="flex flex-row items-center justify-between gap-3 px-2 mt-10">
          <div className="w-20 h-20 bg-[#042C2A] p-2 rounded-full flex flex-col items-center justify-center">
            <ArrowDownIcon className={"w-7 h-7"} />
            <p className="text-white text-sm">Deposit</p>
          </div>
          <div className="w-20 h-20 bg-[#042C2A] p-2 rounded-full flex flex-col items-center justify-center">
            <SlantArrowIcon className={"w-7 h-7"} />
            <p className="text-white text-sm">Withdraw</p>
          </div>
          <div className="w-20 h-20 bg-[#042C2A] p-2 rounded-full flex flex-col items-center justify-center">
            <AddWalletIcon className={"w-7"} />
            <p className="text-white text-sm">Add card</p>
          </div>
          <div className="w-20 h-20 bg-[#042C2A] p-2 rounded-full flex flex-col items-center justify-center">
            <PigWalletIcon className={"w-7 h-7"} />
            <p className="text-white text-xs text-center">Add bank account</p>
          </div>
        </div>
        <div className="w-full min-h-20 bg-white mt-8 px-4 pt-6 pb-32 rounded-tr-3xl rounded-tl-3xl">
          <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg">Transactions</h1>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button className="w-2/5 text-[#858585]" variant="outline">Withdrawal <DropDownIcon className={"ml-3"} /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                  <DropdownMenuCheckboxItem className="text-[#858585]">All</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="text-[#858585]">Deposit</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="text-[#858585]">Withdrawal</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
              </DropdownMenu>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
          <div className="w-full min-h-3 p-2 my-2 flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 bg-[#EDF2F2] flex flex-row rounded-full items-center justify-center">
                <GreenArrowIcon className="w-7 h-7 font-bold !text-[#0B7E78]" />
              </div>
              <div>
                <p className="font-bold">Withdrawal</p>
                <span className="text-xs text-black font-semibold"><span className="text-[#858585]">Date/Time</span>: 25/07/2024|2:42am</span>
              </div>
            </div>
            <p className="font-semibold mt-6 text-sm">-N42,000</p>
          </div>
        </div>
      </div>
      <InstoreModal overlay={ overlay } />
      <MobileMenu overlay={ overlay } handleOverlay={ handleOverlay }/>
    </>
  );
};

export default Wallet;
