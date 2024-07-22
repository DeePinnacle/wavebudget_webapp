"use client";
import Image from "next/image";
import React from "react";

import { useState } from "react";
import { LogoScreen } from "./logo-screen";
import WelcomeScreen from "./welcome-screen";
import BackgroundScreen from "../ui/bg-screen";
import { Button } from "../ui/button";
import Link from "next/link";
import Drawer from "../ui/drawer";
import LoginForm from "../form/login-form";
import RegForm from "../form/reg-form";

import { useRouter } from "next/navigation";


const SplashScreen = () => {
  const navigate = useRouter()
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const [mode, setMode] = useState<string>()

  // counter function to change screen
  const handleChangeScreen = () => {
    const id = setTimeout(() => {
      setCounter(counter + 1);
    }, 800);
    if (counter === 10) {
      clearTimeout(id);
    }
  };
  handleChangeScreen();
  

//   handle drawer pull up
  const handleDrawer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>|React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log(e.currentTarget.innerHTML);
    // if(e.currentTarget.innerHTML === "Create account" ){
    //   setMode("register")
    // }
    // if(e.currentTarget.innerHTML ==="Log in"){
    //   setMode("login")
    // }
    // setIsOpen(!isOpen)
    navigate.push('/register')
  }

  return (
    <>
      {counter <= 5 && <LogoScreen />}
      {counter > 5 && counter <= 9 && <WelcomeScreen />}
      {counter > 8 && counter == 10 && (
        <BackgroundScreen>
            <div className="relative w-full min-h-screen z-50 flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-32 h-24">
                    <Image
                    src={"/wave-logo-green.png"}
                    alt="wavebudget-logo"
                    fill
                    priority
                    className="object-contain"
                    />
                </div>
                <div className="absolute bottom-8 w-full min-h-4 p-2">
                    <div className="p-2 w-full min-h-2">
                        <h1 className="text-center font-bold text-3xl font-montserrat mt-3 mb-2">Pay for Everything Easily.</h1>
                        <p className="text-[#858585] text-center">Wavebudget-your everyday installment shopping platform. Buy items on credit and get it delivered instantly after 50% upfront payment.</p>
                        <Button className="w-full bg-[#0B7E78] hover:bg-[#0B7E78] mt-14 mb-4" size={"lg"} onClick={ (e)=>{ handleDrawer(e) } }>Create account</Button>
                        <p className="text-center"><span className="text-[#858585]">Already have an account? </span><Link href="/login" className="text-[#0B7E78] font-bold">Log in</Link></p>
                    </div>
                </div>
                {/* <Drawer className={`${isOpen ? "block" : "hidden"}`} handleDrawer={ handleDrawer } mode={ mode } >
                  {
                    mode === "register" ? (
                      <RegForm />
                    ): (
                      <LoginForm />
                    )
                  }
                </Drawer> */}
            </div>
        </BackgroundScreen>
      )}
    </>
  );
};

export default SplashScreen;
