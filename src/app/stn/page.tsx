"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  InfoIcon,
  NotificationIcon,
  UserGroupIcon,
  UserQuestionMarkIcon,
} from "../../components/icons/icons";
import MobileMenu  from '../../components/ui/mobile-menu'
import InstoreModal  from '../../components/ui/instore-modal'
import { useRouter } from "next/navigation";
const STN = () => {
    const [overlay, setOverlay] = useState(false);
    const navigation = useRouter()
    const handleOverlay = () => {
      setOverlay(!overlay);
    };
    const handleRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        navigation.push('/stn/request')
    }
    const handleMembers = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        navigation.push('/stn/members')
    }
  return (
    <div className="bg-[#0B7E78] w-full min-h-screen pt-2">
      <div className="flex flex-row items-center justify-between w-11/12 min-h-3 mx-auto mt-9 p-2">
        <div className="flex flex-row gap-2 items-center">
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
            <h2 className="font-bold text-lg text-white mb-2">Adams Complex</h2>
            <p className="font-semibold text-white">STN ID: 283h37</p>
          </div>
        </div>
        {/* notification */}
        <div className="w-16 h-16 rounded-full bg-white flex flex-row items-center justify-center">
          <NotificationIcon className="w-10 h-10 text-[#0B7E78]" />
        </div>
      </div>
      {/* stn section */}
      <div className="w-full min-h-screen bg-white mt-28 rounded-tr-3xl rounded-tl-3xl">
        <div className=" w-11/12 min-h-3 mx-auto grid grid-cols-2 gap-2 items-center justify-around relative -top-[5.375rem]">
          <div className="bg-[#F1FBFA] min-h-44 rounded-md px-4 py-5">
            <span className="flex flex-row items-center justify-between">
              <p className="text-lg text-[#858585] font-semibold">
                Trust Point
              </p>
              <InfoIcon className="w-6 h-6" />
            </span>
            <p className="text-3xl font-bold my-4">20%</p>
            <p className="text-lg font-bold text-[#FF2222]">-2%</p>
          </div>
          <div className="bg-[#F1FBFA] min-h-44 rounded-md px-4 py-5">
            <span className="flex flex-row items-center justify-between">
              <p className="text-lg text-[#858585] font-semibold">
                Credit Limit
              </p>
              <InfoIcon className="w-6 h-6" />
            </span>
            <p className="text-3xl font-bold my-4">#50,000</p>
            <p className="text-lg font-bold text-[#008000]">+10%</p>
          </div>
        </div>
        {/* request n member section */}
        <div className="min-h-5 w-11/12 mx-auto grid grid-cols-2 items-center justify-around gap-2 -mt-14">
          <Button className="bg-[#FCF2D9] py-8 rounded-2xl hover:bg-[#FCF2D9] text-[#F8C97A] font-semibold text-lg" onClick={ (e) => { handleRequest(e) } }>
            <UserQuestionMarkIcon className={"w-6 h-6 mr-2"} /> Request
          </Button>
          <Button className="bg-[#DBFBDE] py-8 rounded-2xl hover:bg-[#DBFBDE] text-[#008000] font-semibold text-lg" onClick={ (e) => { handleMembers(e) } }>
            <UserGroupIcon className={"w-6 h-6 mr-2"} /> Members
          </Button>
        </div>
        {/* transactions history */}
        <div className="my-3 p-4">
          <span className="flex flex-row items-center justify-between">
            <h2 className="font-bold text-xl">Transactions</h2>
            <h2 className="font-bold text-lg text-[#0B7E78]">see all</h2>
          </span>
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
                  Rice, cake...
                </h2>
                <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">Vendor: </span>
                    <p className="font-semibold text-black "> Adams slot</p>
                </span>
              </div>
            </div>
            <div className="w-34 h-10 bg-[#FBF196] border border-solid border-[#E4CF11] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#96890E] font-semibold">{ "Pending" }</p>
            </div>
            <p className="font-semibold text-base w-24 text-right">N20, 000</p>
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
                  Rice, cake...
                </h2>
                <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">Vendor: </span>
                    <p className="font-semibold text-black "> Adams slot</p>
                </span>
              </div>
            </div>
            <div className="w-34 h-10 bg-[#FBF196] border border-solid border-[#E4CF11] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#96890E] font-semibold">{ "Pending" }</p>
            </div>
            <p className="font-semibold text-base w-24 text-right">N20, 000</p>
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
                  Rice, cake...
                </h2>
                <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">Vendor: </span>
                    <p className="font-semibold text-black "> Adams slot</p>
                </span>
              </div>
            </div>
            <div className="w-34 h-10 bg-[#FBF196] border border-solid border-[#E4CF11] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#96890E] font-semibold">{ "Pending" }</p>
            </div>
            <p className="font-semibold text-base w-24 text-right">N20, 000</p>
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
                  Rice, cake...
                </h2>
                <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">Vendor: </span>
                    <p className="font-semibold text-black "> Adams slot</p>
                </span>
              </div>
            </div>
            <div className="w-34 h-10 bg-[#FBF196] border border-solid border-[#E4CF11] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#96890E] font-semibold">{ "Pending" }</p>
            </div>
            <p className="font-semibold text-base w-24 text-right">N20, 000</p>
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
                  Rice, cake...
                </h2>
                <span className="flex flex-row">
                    <span className="text-[#858585] font-normal">Vendor: </span>
                    <p className="font-semibold text-black "> Adams slot</p>
                </span>
              </div>
            </div>
            <div className="w-34 h-10 bg-[#FBF196] border border-solid border-[#E4CF11] rounded-md flex flex-row items-center justify-center p-2">
                <p className="text-[#96890E] font-semibold">{ "Pending" }</p>
            </div>
            <p className="font-semibold text-base w-24 text-right">N20, 000</p>
          </div>
        </div>
      </div>
      <InstoreModal overlay={ overlay } />
      <MobileMenu overlay={ overlay } handleOverlay={ handleOverlay }/>
    </div>
  );
};

export default STN;
