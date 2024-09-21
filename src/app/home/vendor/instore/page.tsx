"use client";
import React, { useState } from "react";
import {
  BackIcon,
  BlurChecked,
  CheckedColored,
  DrawerPullIcon,
  DropDownIcon,
} from "@/components/icons/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const InstoreApproval = () => {
  // handle back navigation
  const navigation = useRouter();
  const [mode, setMode] = useState<string>("E-commerce");
  const [overlay, setOverlay] = useState(false);
  const handleBack = () => {
    navigation.back();
  };
  //   const handleMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     const { innerHTML } = e.currentTarget;
  //     setMode(innerHTML);
  //   };
  const handleOverlay = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = e.currentTarget;
    setMode(id);
    setOverlay(true);
  };
  const handleCloseOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    if (e.currentTarget.classList[1] === "close") {
      setOverlay(false);
      console.log(e.currentTarget.classList[1], true);
    }
  };
  return (
    <div className="bg-[#0B7E78] w-full min-h-screen pt-3 relative">
      <div className="w-full mt-4 px-5 flex flex-row items-center justify-between">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12">
          <p className="text-white text-center text-2xl font-semibold font-montserrat">
            Instore approval request
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white mt-14 rounded-tr-3xl rounded-tl-3xl px-2 py-8">
        <div className="w-full bg-white mt-3 rounded-tr-3xl rounded-tl-3xl p-4">
          <div className="flex flex-row items-center gap-8 my-3">
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image src={"/phone.png"} alt="phone image" fill priority />
              </div>
              <span>
                <h1 className="font-semibold font-sans text-lg">
                  White solar power micro wave
                </h1>
                <span className="flex flex-row items-center gap-7">
                  <p className="text-[#858585]">
                    Price:{" "}
                    <span className="font-semibold text-balance text-black">
                      20,000
                    </span>
                  </p>
                  <p className="text-[#858585]">
                    Qty:{" "}
                    <span className="font-semibold text-balance text-black">
                      2
                    </span>
                  </p>
                </span>
              </span>
            </div>
            <span>
              <p className="text-[#858585]">Total</p>
              <p className="font-semibold">N850,000</p>
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 my-3">
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image src={"/phone.png"} alt="phone image" fill priority />
              </div>
              <span>
                <h1 className="font-semibold font-sans text-lg">
                  White solar power micro wave
                </h1>
                <span className="flex flex-row items-center gap-7">
                  <p className="text-[#858585]">
                    Price:{" "}
                    <span className="font-semibold text-balance text-black">
                      20,000
                    </span>
                  </p>
                  <p className="text-[#858585]">
                    Qty:{" "}
                    <span className="font-semibold text-balance text-black">
                      2
                    </span>
                  </p>
                </span>
              </span>
            </div>
            <span>
              <p className="text-[#858585]">Total</p>
              <p className="font-semibold">N850,000</p>
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 my-3">
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image src={"/phone.png"} alt="phone image" fill priority />
              </div>
              <span>
                <h1 className="font-semibold font-sans text-lg">
                  White solar power micro wave
                </h1>
                <span className="flex flex-row items-center gap-7">
                  <p className="text-[#858585]">
                    Price:{" "}
                    <span className="font-semibold text-balance text-black">
                      20,000
                    </span>
                  </p>
                  <p className="text-[#858585]">
                    Qty:{" "}
                    <span className="font-semibold text-balance text-black">
                      2
                    </span>
                  </p>
                </span>
              </span>
            </div>
            <span>
              <p className="text-[#858585]">Total</p>
              <p className="font-semibold">N850,000</p>
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 my-3">
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image src={"/phone.png"} alt="phone image" fill priority />
              </div>
              <span>
                <h1 className="font-semibold font-sans text-lg">
                  White solar power micro wave
                </h1>
                <span className="flex flex-row items-center gap-7">
                  <p className="text-[#858585]">
                    Price:{" "}
                    <span className="font-semibold text-balance text-black">
                      20,000
                    </span>
                  </p>
                  <p className="text-[#858585]">
                    Qty:{" "}
                    <span className="font-semibold text-balance text-black">
                      2
                    </span>
                  </p>
                </span>
              </span>
            </div>
            <span>
              <p className="text-[#858585]">Total</p>
              <p className="font-semibold">N850,000</p>
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 my-3">
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image src={"/phone.png"} alt="phone image" fill priority />
              </div>
              <span>
                <h1 className="font-semibold font-sans text-lg">
                  White solar power micro wave
                </h1>
                <span className="flex flex-row items-center gap-7">
                  <p className="text-[#858585]">
                    Price:{" "}
                    <span className="font-semibold text-balance text-black">
                      20,000
                    </span>
                  </p>
                  <p className="text-[#858585]">
                    Qty:{" "}
                    <span className="font-semibold text-balance text-black">
                      2
                    </span>
                  </p>
                </span>
              </span>
            </div>
            <span>
              <p className="text-[#858585]">Total</p>
              <p className="font-semibold">N850,000</p>
            </span>
          </div>
        </div>
        <div className="w-full bg-[#F9FBFB] py-4 px-2 my-4 rounded-md">
          <span className="flex flex-row items-center justify-between gap-4">
            <p className="my-2 text-[#858585]">Total numbers of items</p>
            <p className="font-semibold">8</p>
          </span>
          <span className="flex flex-row items-center justify-between gap-4">
            <p className="my-2 text-[#858585]">Vendor(s) name</p>
            <p className="font-semibold">Adams complex</p>
          </span>
          <span className="flex flex-row items-center justify-between gap-4">
            <p className="mt-5 text-[#858585]">Total amount:</p>
            <p className="font-semibold text-lg mt-5">20,000</p>
          </span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            type="button"
            className="w-full text-[#0B7E78] h-14 text-lg font-semibold hover:bg-transparent hover:text-[#0B7E78]"
            variant={"ghost"}
            id="decline"
            onClick={(e) => {
              handleOverlay(e);
            }}
          >
            Decline item
          </Button>
          <Button
            type="button"
            className="w-full bg-[#0B7E78] h-14 hover:bg-[#0B7E78]"
            id="approve"
            onClick={(e) => {
              handleOverlay(e);
            }}
          >
            Approve item
          </Button>
        </div>
      </div>
      <div
        className={`${
          overlay === true
            ? "bg-black/20 close absolute inset-0 w-full min-h-screen p-2 flex flex-row items-center justify-center"
            : "hidden"
        }  `}
        onClick={(e) => {
          handleCloseOverlay(e);
        }}
      >
        {mode === "approve" && (
          <div className="w-[99%] mx-auto min-h-10 bg-white rounded-xl px-3 py-7 mt-36">
            <h1 className="text-center text-xl font-semibold my-3">
              Are you sure you want to approve this item
            </h1>
            <p className="text-center text-balance max-w-prose text-[#858585] my-2">
              Approving this item mean you agree the amount and quantity are
              accurate
            </p>
            <div className="flex flex-col items-center justify-center mt-9">
              <Button className="w-[90%] my-2 bg-[#0B7E78] h-16 hover:bg-[#0B7E78]">
                Recheck
              </Button>
              <Button className="w-[90%] h-16 bg-[#F6FEFE] text-[#0B7E78] hover:bg-[#F6FEFE]">
                Yes approve
              </Button>
            </div>
          </div>
        )}
        {mode === "decline" && (
          <div className="w-[99%] mx-auto min-h-10 bg-white rounded-xl px-3 pt-2 pb-10 mt-36">
            <DrawerPullIcon className={"mx-auto"} />
            <h1 className="mt-5 mb-9 text-center text-xl font-semibold">
              Give reason why you decline
            </h1>
            <div className="w-full px-3 py-5 flex flex-row items-center gap-5 border border-solid border-[#EDF2F2] my-3 rounded-lg">
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-black h-5 w-5"
                  name="bank"
                  onClick={ (e)=> { e.stopPropagation() } }
                />
              </span>
              <span>
                <p className="font-semibold text-xl mb-2">Incorrect amount</p>
                <p className="text-[#858585] font-semibold text-base mb-2">
                Approving this item mean you agree the amount and quantity are accurate
                </p>
              </span>
            </div>
            <div className="w-full px-3 py-5 flex flex-row items-center gap-5 border border-solid border-[#EDF2F2] my-3 rounded-lg">
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-black h-5 w-5"
                  name="bank"
                  onClick={ (e)=> { e.stopPropagation() } }
                />
              </span>
              <span>
                <p className="font-semibold text-xl mb-2">Incorrect amount</p>
                <p className="text-[#858585] font-semibold text-base mb-2">
                Approving this item mean you agree the amount and quantity are accurate
                </p>
              </span>
            </div>
            <div className="w-full px-3 py-5 flex flex-row items-center gap-5 border border-solid border-[#EDF2F2] my-3 rounded-lg">
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-black h-5 w-5"
                  name="bank"
                  onClick={ (e)=> { e.stopPropagation() } }
                />
              </span>
              <span>
                <p className="font-semibold text-xl mb-2">Incorrect amount</p>
                <p className="text-[#858585] font-semibold text-base mb-2">
                Approving this item mean you agree the amount and quantity are accurate
                </p>
              </span>
            </div>
            <div className="w-full px-3 py-5 flex flex-row items-center gap-5 border border-solid border-[#EDF2F2] my-3 rounded-lg">
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-black h-5 w-5"
                  name="bank"
                  onClick={ (e)=> { e.stopPropagation() } }
                />
              </span>
              <span>
                <p className="font-semibold text-xl mb-2">Incorrect amount</p>
                <p className="text-[#858585] font-semibold text-base mb-2">
                Approving this item mean you agree the amount and quantity are accurate
                </p>
              </span>
            </div>
            <Button className="bg-[#0B7E78] w-full h-16 hover:bg-[#0B7E78]">Send decline feedback</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstoreApproval;
