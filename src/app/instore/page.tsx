import { CartIcon, PlusIcon, QrIcon, ToggleEyeIcon } from "@/components/icons/icons";
import { QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Instore = () => {
  return (
    <>
      <div className="bg-slate-100 w-full min-h-screen pb-14">
        <div className="w-full min-h-10 px-2 py-3">
          <div className="bg-[#0B7E78] w-full h-40 rounded-md">
            <h1 className="text-white text-center text-lg pt-8 pb-3 font-semibold">Account Balance</h1>
            <div className="flex flex-row items-center gap-7 p-2 w-[90%] mx-auto">
              <p className="text-4xl text-white text-center ml-16"><span className="text-4xl">₦</span>50,000<span className="text-4xl">.00</span></p>
              <ToggleEyeIcon className={'w-8 h-8'} />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 items-center justify-around gap-3 px-5">
          <Link href="/instore/vendors-id" className="cursor-pointer">
            <div className="bg-white flex flex-col items-center justify-center rounded-md min-h-16">
              <PlusIcon className={"text-[#0B7E78]"} />
            </div>
            <p className="text-center text-xs font-bold my-3">
              Input vendors ID
            </p>
          </Link>
          <Link href="/instore/scan" className="cursor-pointer mt-4">
            <div className="bg-white flex flex-col items-center justify-center rounded-md min-h-16">
              <QrIcon className={"text-[#0B7E78]"} />
            </div>
            <p className="text-center text-xs font-bold my-3">
              Scan vendor’s QR code
            </p>
          </Link>
          <Link href="/instore/cart" className="cursor-pointer">
            <div className="bg-white flex flex-col items-center justify-center rounded-md min-h-16">
              <CartIcon className={"text-[#0B7E78]"} />
            </div>
            <p className="text-center text-xs font-bold my-3">Cart</p>
          </Link>
        </div>
        {/* transaction history */}
        <div className="py-2">
          <div className="bg-white w-full min-h-80 rounded-tl-3xl rounded-tr-3xl pt-3 pb-28 px-4 mt-16">
            <h2 className="font-bold text-xl">Instore transaction</h2>
            <div className="w-56 h-44 mx-auto my-5">
              <div className="relative w-36 h-36 overflow-hidden mx-auto">
                <Image
                  src={"/resting-man.png"}
                  alt="empty-transaction"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="text-[#858585] text-center">
                No recent transaction. start{" "}
                <span className="text-[#0B7E78] font-bold">shopping now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instore
