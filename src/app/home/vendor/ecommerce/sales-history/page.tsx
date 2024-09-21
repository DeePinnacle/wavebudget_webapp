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
const StnRequest = () => {
  // handle back navigation
  const navigation = useRouter();
  const [mode, setMode] = useState<string>("E-commerce");
  const [overlay, setOverlay] = useState(false);
  const handleBack = () => {
    navigation.back();
  };
  const handleMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { innerHTML } = e.currentTarget;
    setMode(innerHTML);
  };
  const handleOverlay = () => {
    setOverlay(true);
  };
  const handleCloseOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.classList[1] === "close") {
      setOverlay(false);
      console.log(e.currentTarget.classList[1]);
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
            Sales History
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white mt-14 rounded-tr-3xl rounded-tl-3xl px-2 py-8">
        <div className="bg-[#EDF2F2] w-full p-2 min-h-6 mx-auto rounded-full flex flex-row items-center justify-between gap-2 box-border">
          <Button
            className={`${
              mode === "E-commerce"
                ? "bg-[#0B7E78] rounded-full text-lg font-semibold py-6 hover:bg-[#0B7E78]"
                : "bg-transaperent rounded-full text-lg text-[#0B7E78] font-semibold py-6 hover:bg-transparent"
            }`}
            onClick={(e) => handleMode(e)}
          >
            E-commerce
          </Button>
          <Button
            className={`${
              mode === "Instore shopping"
                ? "bg-[#0B7E78] rounded-full text-lg font-semibold py-6 hover:bg-[#0B7E78]"
                : "bg-transaperent rounded-full text-lg text-[#0B7E78] font-semibold py-6 hover:bg-transparent"
            }`}
            size={"lg"}
            onClick={(e) => handleMode(e)}
          >
            Instore shopping
          </Button>
        </div>
        {mode === "E-commerce" ? (
          <div className="w-full min-h-[50rem] bg-white mt-3 rounded-tr-3xl rounded-tl-3xl p-4">
            <form>
              <div className="flex flex-row items-center justify-between gap-3">
                <h1 className="font-semibold text-xl">E-commerce Sales</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-2/5 text-[#858585]" variant="outline">
                      Filter <DropDownIcon className={"ml-3"} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Full payment
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Installment
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </form>
            <div
              className="flex flex-row items-center gap-8 my-3"
              onClick={handleOverlay}
            >
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
        ) : (
          <div className="w-full min-h-[50rem] bg-white mt-3 rounded-tr-3xl rounded-tl-3xl p-4">
            <form>
              <div className="flex flex-row items-center justify-between gap-3">
                <h1 className="font-semibold text-xl">Instore Sales</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-2/5 text-[#858585]" variant="outline">
                      Filter <DropDownIcon className={"ml-3"} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Full payment
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Installment
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </form>
            <div className="flex flex-row items-center gap-8 my-2" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
            <div className="flex flex-row items-center gap-4 my-3" onClick={ handleOverlay }>
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
        )}
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
        <div className="w-[99%] mx-auto min-h-10 bg-white rounded-xl px-3 pt-2 pb-10 mt-36">
          <DrawerPullIcon className={"mx-auto"} />
          <div className="relative w-16 h-16 rounded-full overflow-hidden mt-7">
            <Image
              src={"/Phone.png"}
              alt="Phone image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="font-bold text-lg gap-y-3 mt-2 mb-8">Adams Store</p>
          <div className="grid grid-cols-2">
            <span className="text-[#858585] font-semibold">
              Item cost
              <p className="text-black">500,000</p>
            </span>
            <span className="text-[#858585] font-semibold">
              Qty
              <p className="text-black">3</p>
            </span>
            <span className="mt-5 text-[#858585] font-semibold">
              Deposit amount
              <p className="text-black">150,000</p>
            </span>
            <span className="mt-5 text-[#858585] font-semibold">
              Remaining amount
              <p className="text-black">350,000</p>
            </span>
          </div>
          <div className="bg-[#F9FBFB] w-11/12 min-h-3 mx-auto my-8 rounded-lg px-2 py-6 border border-solid border-[#EDF2F2]">
            <div className="flex flex-row items-center justify-between my-2">
              <span className="text-[#858585]">
                First month payment
                <p>(24/26/24)</p>
              </span>
              <p className="flex flex-row gap-2 items-center font-semibold">
                N10,000
                <CheckedColored />
              </p>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <span className="text-[#858585]">
                Second month payment
                <p>(24/26/24)</p>
              </span>
              <p className="flex flex-row gap-2 items-center font-semibold">
                N10,000
                <CheckedColored />
              </p>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <span className="text-[#858585]">
                Third month payment
                <p>(24/26/24)</p>
              </span>
              <p className="flex flex-row gap-2 items-center font-semibold">
                N10,000
                <CheckedColored />
              </p>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <span className="text-[#858585]">
                Fourth month payment
                <p>(24/26/24)</p>
              </span>
              <p className="flex flex-row gap-2 items-center font-semibold">
                N10,000
                <CheckedColored />
              </p>
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <span className="text-[#858585]">
                Fifth month payment
                <p>(24/26/24)</p>
              </span>
              <p className="flex flex-row gap-2 items-center font-semibold">
                N10,000
                <BlurChecked />
              </p>
            </div>
            <p className="text-right font-semibold text-[#858585]">
              Unresolved debt{" "}
              <span className="font-bold text-black"> N10,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StnRequest;
