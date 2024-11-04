"use client";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MobileMenu  from '../../components/ui/mobile-menu'
import InstoreModal  from '../../components/ui/instore-modal'
import { Button } from "@/components/ui/button";
import { AgentIcon, BackIcon, CurveRigthArrow, GreyUserIcon, KycIcon, LogOutIcon, PrivacyIcon, RightArrow, SwitchIcon, UserIcon } from "@/components/icons/icons";
import Link from "next/link";

const Profile = () => {
    const [overlay, setOverlay] = useState(false);
    const handleOverlay = () => {
      setOverlay(!overlay);
    };  
  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
  };

  const handleEditProfile = () => {
    navigation.push('/profile/edit')
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-2xl font-semibold font-montserrat w-1/2">
            Profile
          </p>
        </div>
      </div>
      <div className="px-2 mt-20">
        <div className="bg-white w-[98%] min-h-4 mx-auto my-8 py-4 px-2 rounded-tr-2xl rounded-tl-2xl">
            <div className="w-24 h-24 relative overflow-hidden mx-auto rounded-full border-2 border-solid border-white -mt-16">
                <Image src={"/user.png"} alt="user image" fill priority className="object-cover" />
            </div>
            <div className="text-center my-3 text-[#858585]">
                <h2 className="font-bold text-2xl mt-5 mb-2 text-black">Adams Wavebudget</h2>
                <p className="font-semibold text-lg mb-1">wisdomumanah@gmail.com</p>
                <p className="font-semibold">No. 24 IBB way, wuse 2, Abuja F.C.T</p>
            </div>
            <div className="flex flex-row items-center justify-center w-full">
                <Button className="mx-auto py-8 text-lg font-semibold bg-[#F6FEFE] hover:bg-[#F6FEFE] text-[#0B7E78] border border-solid border-[#EDF2F2] rounded-lg" size={"lg"} onClick={ handleEditProfile }>Edit profile</Button>
            </div>
        </div>
        <div className="w-full min-h-3 px-5 pt-4 pb-28 bg-white rounded-lg my-2">
            <p className="text-[#858585] font-semibold">SETTINGS</p>
            <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                <div className="flex flex-row items-center gap-3 text-lg">
                    <SwitchIcon className={"w-7 h-7"} />
                    <p className="font-semibold">Switch account</p>
                </div>
                <p className="flex flex-row items-center gap-2 font-semibold text-lg">Agent <CurveRigthArrow /></p>
            </div>
            <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                <div className="flex flex-row items-center gap-3 text-lg">
                    <GreyUserIcon className={"w-7 h-7 font-black"} />
                    <p className="font-semibold text-[#D1D1D1]">Account type</p>
                </div>
                <p className="flex flex-row items-center gap-2 font-semibold text-lg text-[#D1D1D1]">Buyer</p>
            </div>
            <Link href={"/profile/orders"} className="cursor-pointer">
                <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                    <div className="flex flex-row items-center gap-3 text-lg">
                        <PrivacyIcon className={"w-7 h-7"} />
                        <p className="font-semibold">My Orders</p>
                    </div>
                </div>
            </Link>
            <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                <div className="flex flex-row items-center gap-3 text-lg">
                    <KycIcon className={"w-7 h-7"} />
                    <p className="font-semibold">KYC Verification</p>
                </div>
                <div className="w-10 h-10 flex flex-row items-center justify-center rounded-full border-4 border-solid border-t-[#13DCD2] border-l-[#13DCD2] border-r-[#13DCD2] border-b-[#0FAEA5]">
                    <p className="text-sm text-[#858585]">20%</p>
                </div>
            </div>
            <Link href={"/profile/privacy"} className="cursor-pointer">
                <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                    <div className="flex flex-row items-center gap-3 text-lg">
                        <PrivacyIcon className={"w-7 h-7"} />
                        <p className="font-semibold">Privacy and security</p>
                    </div>
                </div>
            </Link>
            <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                <div className="flex flex-row items-center gap-3 text-lg">
                    <AgentIcon className={"w-7 h-7"} />
                    <p className="font-semibold text-[#858585]">Become an agent</p>
                </div>
            </div>
            <div className="w-full mt-6  bg-white mb-2 px-2 py-6 border border-solid border-[#ebecec] flex flex-row items-center justify-between gap-2 rounded-lg">
                <div className="flex flex-row items-center gap-3 text-lg">
                    <LogOutIcon className={"w-7 h-7"} />
                    <p className="font-semibold">Logout</p>
                </div>
            </div>
        </div>
      </div>
      <InstoreModal overlay={ overlay } />
      <MobileMenu overlay={ overlay } handleOverlay={ handleOverlay }/>
    </div>
  );
};

export default Profile;
