'use client'
import { BackIcon, Lock2Icon, TwoFacAuthIcon } from "@/components/icons/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Privacy = () => {
    const navigation = useRouter();
    const handleBack = () => {
      navigation.back();
    };
  return (
    <div className="bg-white">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-2xl font-semibold font-montserrat -ml-20">
            Privacy and security
          </p>
        </div>
      </div>
      <div className="p-4 w-full min-h-6">
        <Link href={"#"}>
            <div className="w-full flex flex-row items-center gap-3 mt-3 mb-4 border border-solid border-[#DBE1E1] px-2 py-5 rounded-lg">
                <TwoFacAuthIcon className={"w-5 h-5"} />
                <p className="font-semibold">Two factor authentication</p>
            </div>
        </Link>
        <Link href={"#"}>
            <div className="w-full flex flex-row items-center gap-3 my-2 border border-solid border-[#DBE1E1] px-2 py-5 rounded-lg">
                <Lock2Icon className={"w-5 h-5"} />
                <p className="font-semibold">Change password</p>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
