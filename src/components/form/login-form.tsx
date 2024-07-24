"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  EnvelopeIcon,
  EyeIcon,
  LockIcon,
  GoogleIcon,
  InvalidIcon,
  LogoIcon,
} from "../icons/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const LoginForm = () => {
  const demoEmail = "wavebudget@gmail.com";
  const demoPass = "12345";

  const [emailErrBorder, setEmailErrBorder] = useState(false);
  const [passErrBorder, setPassErrBorder] = useState(false);
  const [errorDiv, setErrorDiv] = useState<boolean>(false);
  const [logoModal, setLogoModal] = useState<boolean>(false);
  const navigate = useRouter()
  const [timeRemaining, setTimeRemaining] = useState<number>(3); // Countdown from 10 seconds
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let tempErrors: any = {};

    if (!formData.email) {
      tempErrors.email = "Email is required";
      setEmailErrBorder(true);
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      setEmailErrBorder(true);
    } else if (formData.email !== demoEmail) {
      tempErrors.email = "Incorrect email address";
      setEmailErrBorder(true);
    } else {
      setEmailErrBorder(false);
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      setPassErrBorder(true);
    } else if (formData.password !== demoPass) {
      tempErrors.password = "Incorrect password";
      setPassErrBorder(true);
    } else {
      setPassErrBorder(false);
    }

    const allFieldsEmpty = Object.values(formData).every(
      (value) => value === ""
    );
    if (allFieldsEmpty) {
      tempErrors.allFields = "all fields required";
    }

    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) {
      setErrorDiv(true);
    } else {
      setErrorDiv(false);
      setLogoModal(true);
    }
  };

  useEffect(()=>{
    if(logoModal === true){

                // Reset countdown when modal opens
                setTimeRemaining(3);
          
                // Start countdown
                const id = setInterval(() => {
                    setTimeRemaining(prevTime => {
                        if (prevTime <= 1) {
                            clearInterval(id);
                            navigate.push("/home")
                            return 0;
                        }
                        return prevTime - 1;
                    });
                }, 1000);
    
                setIntervalId(id);
    
                // Cleanup interval on component unmount
                return () => {
                    if (intervalId) {
                        clearInterval(intervalId);
                    }
                };
            }
  },[logoModal])

  return (
    <div className="box-border my-4">
      <div className={`${errorDiv === true ? "block" : "hidden"}`}>
        <div className="absolute top-4 left-16 bg-[#FFEEEE] w-2/3 px-3 py-4 rounded-xl flex flex-row items-center gap-4">
          <InvalidIcon className="w-5 h-5" />
          <div>
            {errors.email && (
              <p className="text-[#ED0F0F] font-bold">{errors.email}</p>
            )}
            {errors.password && (
              <p className="text-[#ED0F0F] font-bold">{errors.password}</p>
            )}
          </div>
        </div>
      </div>
      <form>
        <label
          htmlFor="first-last-name"
          className="text-[#858585] text-xl font-semibold"
        >
          Email/Phone number
        </label>
        <EnvelopeIcon className={"absolute top-[388px] left-6 w-7 h-7"} />
        <input
          type="text"
          value={formData.email}
          name="email"
          className={`${
            emailErrBorder === true
              ? "border border-solid border-[#ED0F0F]"
              : ""
          } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 outline-none`}
          placeholder="Email/phone number"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />

        <label
          htmlFor="first-last-name"
          className="text-[#858585] text-xl font-semibold"
        >
          Password
        </label>
        <LockIcon className={"absolute top-[485px] left-6 w-7 h-7"} />
        <input
          type="text"
          value={formData.password}
          name="password"
          className={`${
            passErrBorder === true ? "border border-solid border-[#ED0F0F]" : ""
          } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 outline-none`}
          placeholder="Password"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <EyeIcon className={"absolute top-[485px] right-8 w-7 h-7"} />

        <p className="text-sm text-right">
          
      <span className="font-bold text-[#0B7E78]">
            <Link href={"/recover-password"}>Forgot password</Link>
          </span>
        </p>
        <Button
          type="button"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="bg-[#0B7E78] text-white w-full mt-10 hover:bg-[#0B7E78]"
          size={"lg"}
        >
          Log in
        </Button>
        <p className="text-center my-4">
          <span className="text-[#858585] my-2">
            Don&apos;t have an account yet?{" "}
          </span>
          <Link href="/register" className="text-[#0B7E78] font-bold">
            Create account
          </Link>
        </p>

        <div className="w-full bg-slate-200 border border-solid mt-3 relative flex flex-row items-center justify-center">
          <div className="absolute -top-3 w-6 h-6 p-2 flex flex-row items-center justify-center bg-white">
            <p className="text-[#DBE1E1]">Or</p>
          </div>
        </div>

        <Button className="w-full bg-transparent border border-solid border-[#0B7E78] rounded-md my-4 text-[#0B7E78] hover:bg-transparent">
          <span>
            <GoogleIcon />{" "}
          </span>{" "}
          Create account with google
        </Button>
      </form>
      <div
        className={`${
          logoModal === true ? "block" : "hidden"
        } absolute -top-80 left-0 right-0 bottom-0 z-20 bg-black/20 flex flex-col items-center justify-center`}
      >
        <div className="relative flex flex-row items-center justify-center overflow-hidden w-24 h-24 rounded-full p-2 mx-auto bg-[#0B7E78]">
          <LogoIcon />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
