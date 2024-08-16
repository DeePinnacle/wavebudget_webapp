"use client";
import React, { useState } from "react";
import { BackIcon, DrawerPullIcon, UserColoredGroup, UserGroupIcon, UserIconRounded } from "../../../components/icons/icons";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

const Members = () => {
  // handle back navigation
  const navigation = useRouter();
  const [mode, setMode] = useState<string>("Transaction approval");
  const [overlay, setOverlay] = useState(false);
  const handleBack = () => {
    navigation.back();
  };
  const handleOverlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
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
            Members
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white mt-14 rounded-tr-3xl rounded-tl-3xl px-2 py-8">
        <div className="bg-white w-full p-2 min-h-6 mx-auto rounded-full flex flex-row items-center justify-between gap-2 box-border">
          <input
            type="search"
            className="w-full border border-solid border-[#DBE1E1] outline-none p-2 rounded-full"
            placeholder="Search"
          />
          <Button
            className={`${"bg-[#0B7E78] hover:bg-[#0B7E78] w-2/5 rounded-full text-lg text-white font-semibold py-6"}`}
            onClick={ (e) => { handleOverlay(e) } }
          >
            Add member
          </Button>
        </div>
        <p className="text-[#858585] text-xl font-semibold my-4">Total members: <span className="text-black">8</span></p>
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
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Remove</Button>
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
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Remove</Button>
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
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Remove</Button>
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
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Remove</Button>
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
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-bold hover:bg-white">Remove</Button>
          </div>
        </>
      </div>
      <div
        className={`${
          overlay === true
            ? "bg-black/20 close fixed inset-0 w-full min-h-screen p-2 flex flex-row items-center justify-center"
            : "hidden"
        }  `}
        onClick={(e) => {
          handleCloseOverlay(e);
        }}
      >
        <div className="w-[97%] mx-auto min-h-24 bg-white fixed bottom-5 rounded-lg p-2 py-4">
          <DrawerPullIcon className={"mx-auto"} />
          <UserColoredGroup className={"mx-auto my-3"} />
          <p className="text-center font-bold text-lg">Add members to your STN</p>
          <p className="text-center my-1 text-[#858585]">Input users STN ID</p>
          <form>
            <input type="text" className="w-full border border-solid border-[#DBE1E1] p-3 rounded-md mt-5" placeholder="STN ID" />
          </form>
            <Button className="bg-[#0B7E78] hover:bg-[#0B7E78] w-full my-3" size={"lg"}>
              Approve
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Members;
