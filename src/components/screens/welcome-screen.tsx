import React from "react";
import Image from "next/image"
import { 
    LogoIcon,
    SplashIcon,
    LeftArrow,
    RightArrow
} from "@/components/icons/icons"
const WelcomeScreen = () => {
  return (
    // image screen
    <div className="relative overflow-hidden w-full min-h-screen">
      <Image
        src={"/splash-1.png"}
        alt="wavebudget-splash-image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute bottom-8 w-full p-2 flex flex-col gap-y-2 justify-center">
        <div className="w-full min-h-6 p-2">
          <LogoIcon />
          <h1 className="font-bold text-4xl text-white my-2 font-montserrat">
            Wavebudget
          </h1>
          <p className="text-white">
            Budgeting made easy to meet your needs. Buy items on credit, manage and support your budget in 4 easy steps.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between p-2 w-full">
          <SplashIcon />
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center justify-center w-[3rem] h-[3rem] border border-solid border-white rounded-full">
              <LeftArrow />
            </div>
            <div className="flex flex-row items-center justify-center w-[3rem] h-[3rem] border border-solid border-white rounded-full">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
