"use client";
import { useRouter } from "next/navigation";
import { BackIcon } from "@/components/icons/icons";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const EditProfile = () => {
  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
  };
  return (
    <div className="bg-slate-200 w-full min-h-screen pb-16">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-2xl font-semibold font-montserrat w-1/2">
            Edit profile
          </p>
        </div>
      </div>
      <div className="bg-white w-[98%] min-h-4 mx-auto mt-16 py-4 px-2 rounded-2xl">
        <div className="w-32 h-32 relative overflow-hidden mx-auto rounded-full border-2 border-solid border-white -mt-16">
          <Image
            src={"/user.png"}
            alt="user image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute w-full h-full inset-0 bg-black/30 z-[999] flex flex-row items-center justify-center">
            <p className="text-white font-semibold">Change</p>
          </div>
        </div>
        <form>
          <div className="mt-9 mb-3 flex flex-col">
            <label
              htmlFor="name"
              className="text-[#858585] text-lg font-semibold"
            >
              Name
            </label>
            <input type="text" className="w-full my-2 border border-solid border-[#DBE1E1] px-2 py-4 rounded-lg outline-none" placeholder="First Name" />

            <label
              htmlFor="email"
              className="text-[#858585] text-lg font-semibold"
            >
              Email
            </label>
            <input type="email" className="w-full my-2 border border-solid border-[#DBE1E1] px-2 py-4 rounded-lg outline-none" placeholder="Email" />

            <label
              htmlFor="number"
              className="text-[#858585] text-lg font-semibold"
            >
              Phone number
            </label>
            <input type="text" className="w-full my-2 border border-solid border-[#DBE1E1] px-2 py-4 rounded-lg outline-none" placeholder="Phone Number" />

            <label
              htmlFor="address"
              className="text-[#858585] text-lg font-semibold"
            >
              Address
            </label>
            <input type="text" className="w-full my-2 border border-solid border-[#DBE1E1] px-2 py-4 rounded-lg outline-none" placeholder="Address" />

            <Button className="mt-8 mb-4 bg-[#0B7E78] py-8 hover:bg-[#0B7E78] text-lg" size={"lg"}>Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
