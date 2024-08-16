"use client";
import React, { useState } from "react";
import { BackIcon, DrawerPullIcon } from "../../../components/icons/icons";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
const StnRequest = () => {
  // handle back navigation
  const navigation = useRouter();
  const [mode, setMode] = useState<string>("Transaction approval");
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
  const handleCloseOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.currentTarget.classList[1] ==="close"){
      setOverlay(false)
      console.log(e.currentTarget.classList[1]);
      
    }
    
  }
  return (
    <div className="bg-[#0B7E78] w-full min-h-screen pt-3">
      <div className="w-full mt-4 px-5 flex flex-row items-center justify-between">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12">
          <p className="text-white text-center text-2xl font-semibold font-montserrat">
            Request
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white mt-14 rounded-tr-3xl rounded-tl-3xl px-2 py-8">
        <div className="bg-[#EDF2F2] w-full p-2 min-h-6 mx-auto rounded-full flex flex-row items-center justify-between gap-2 box-border">
          <Button
            className={`${
              mode === "Transaction approval"
                ? "bg-[#0B7E78] rounded-full text-lg font-semibold py-6 hover:bg-[#0B7E78]"
                : "bg-transaperent rounded-full text-lg text-[#0B7E78] font-semibold py-6 hover:bg-transparent"
            }`}
            onClick={(e) => handleMode(e)}
          >
            Transaction approval
          </Button>
          <Button
            className={`${
              mode === "STN request"
                ? "bg-[#0B7E78] rounded-full text-lg font-semibold py-6 hover:bg-[#0B7E78]"
                : "bg-transaperent rounded-full text-lg text-[#0B7E78] font-semibold py-6 hover:bg-transparent"
            }`}
            size={"lg"}
            onClick={(e) => handleMode(e)}
          >
            STN request
          </Button>
        </div>
        {mode === "Transaction approval" ? (
          <>
            <div className="my-2 flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row gap-2 items-center my-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-black mb-2">
                    Wisdom Umanah
                  </h2>
                  <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">
                      Total Item cost:{" "}
                    </span>
                    <p className="font-semibold text-black "> 543,409</p>
                  </span>
                </div>
              </div>
              <div
                className="w-34 h-10 bg-white border border-solid border-[#0B7E78] rounded-md flex flex-row items-center justify-center p-2"
                onClick={handleOverlay}
              >
                <p className="text-[#0B7E78] font-semibold">{"View details"}</p>
              </div>
            </div>
            <div className="my-2 flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row gap-2 items-center my-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-black mb-2">
                    Wisdom Umanah
                  </h2>
                  <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">
                      Total Item cost:{" "}
                    </span>
                    <p className="font-semibold text-black "> 543,409</p>
                  </span>
                </div>
              </div>
              <div className="w-34 h-10 bg-white border border-solid border-[#0B7E78] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#0B7E78] font-semibold">{"View details"}</p>
              </div>
            </div>
            <div className="my-2 flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row gap-2 items-center my-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-black mb-2">
                    Wisdom Umanah
                  </h2>
                  <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">
                      Total Item cost:{" "}
                    </span>
                    <p className="font-semibold text-black "> 543,409</p>
                  </span>
                </div>
              </div>
              <div className="w-34 h-10 bg-white border border-solid border-[#0B7E78] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#0B7E78] font-semibold">{"View details"}</p>
              </div>
            </div>
            <div className="my-2 flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row gap-2 items-center my-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-black mb-2">
                    Wisdom Umanah
                  </h2>
                  <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">
                      Total Item cost:{" "}
                    </span>
                    <p className="font-semibold text-black "> 543,409</p>
                  </span>
                </div>
              </div>
              <div className="w-34 h-10 bg-white border border-solid border-[#0B7E78] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#0B7E78] font-semibold">{"View details"}</p>
              </div>
            </div>
            <div className="my-2 flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row gap-2 items-center my-3">
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
                <div>
                  <h2 className="font-bold text-lg text-black mb-2">
                    Wisdom Umanah
                  </h2>
                  <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">
                      Total Item cost:{" "}
                    </span>
                    <p className="font-semibold text-black "> 543,409</p>
                  </span>
                </div>
              </div>
              <div className="w-34 h-10 bg-white border border-solid border-[#0B7E78] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#0B7E78] font-semibold">{"View details"}</p>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="my-2 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-2 items-center my-3">
            <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-md text-black mb-2">
                  Adams Complex
                </h2>
                <span className="flex flex-row">
                  <span className="text-[#858585] font-normal">
                    STN ID:{" "}
                  </span>
                  <p className="font-semibold text-black "> 283h37</p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Decline</Button>
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Accept</Button>
            </div>
          </div>
          <div className="my-2 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-2 items-center my-3">
            <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-md text-black mb-2">
                  Adams Complex
                </h2>
                <span className="flex flex-row">
                  <span className="text-[#858585] font-normal">
                    STN ID:{" "}
                  </span>
                  <p className="font-semibold text-black "> 283h37</p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Decline</Button>
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Accept</Button>
            </div>
          </div>
          <div className="my-2 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-2 items-center my-3">
            <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-md text-black mb-2">
                  Adams Complex
                </h2>
                <span className="flex flex-row">
                  <span className="text-[#858585] font-normal">
                    STN ID:{" "}
                  </span>
                  <p className="font-semibold text-black "> 283h37</p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Decline</Button>
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Accept</Button>
            </div>
          </div>
          <div className="my-2 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-2 items-center my-3">
            <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-md text-black mb-2">
                  Adams Complex
                </h2>
                <span className="flex flex-row">
                  <span className="text-[#858585] font-normal">
                    STN ID:{" "}
                  </span>
                  <p className="font-semibold text-black "> 283h37</p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Decline</Button>
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Accept</Button>
            </div>
          </div>
          <div className="my-2 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row gap-2 items-center my-3">
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                <div className="relative items-center w-14 h-14 rounded-full overflow-hidden border-2 border-solid border-[#0B7E78]">
                  <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                  <Image
                    src={"/user.png"}
                    alt="user image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-md text-black mb-2">
                  Adams Complex
                </h2>
                <span className="flex flex-row">
                  <span className="text-[#858585] font-normal">
                    STN ID:{" "}
                  </span>
                  <p className="font-semibold text-black "> 283h37</p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Decline</Button>
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Accept</Button>
            </div>
          </div>
        </>
        )}
      </div>
      <div
        className={`${
          overlay === true
            ? "bg-black/20 close fixed inset-0 w-full min-h-screen p-2 flex flex-row items-center justify-center"
            : "hidden"
        }  `}
        onClick={ (e) => { handleCloseOverlay(e) } }
      >
        <div className="w-[97%] mx-auto min-h-24 bg-white fixed bottom-5 rounded-lg p-2">
          <DrawerPullIcon className={"mx-auto"} />
          <div className="relative w-14 h-14 rounded-full overflow-hidden mx-auto my-5">
            <Image
              src={"/user.png"}
              alt="user image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="text-lg font-semibold text-center text-black">Wisdom Umanah</p>
          <div className="text-center text-[#858585]">
            <p className="my-2">Total Item cost: <span className="text-black text-lg font-semibold">543,409</span></p>
            <p className="my-2">Guarantors 5%: <span className="text-black text-lg font-semibold">5,000</span></p>
            <p className="my-2">Guarantors 2% reward: <span className="text-black text-lg font-semibold">2,500</span></p>
            <p className="max-w-prose my-3">
              The least down payment is 50% of your total purchased item, it can only be increase and not reduced. Drag to adjust
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5 mb-16">
            <Button
              className="text-[#0B7E78] font-bold hover:bg-transparent hover:text-[#0B7E78]"
              variant={"ghost"}
              size={"lg"}
            >
              Decline &rarr;
            </Button>
            <Button
              className="bg-[#0B7E78] hover:bg-[#0B7E78]"
              size={"lg"}
            >
              Approve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StnRequest;
