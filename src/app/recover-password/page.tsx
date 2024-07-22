'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RecoverBackgroundScreen from '../../components/ui/recover-bg-screen';

import {
  EnvelopeIcon,
  InvalidIcon,
  LockElement,
  LogoIcon
} from "../../components/icons/icons"

import { useState } from 'react';
import { Button } from '../../components/ui/button'
import VerificationModel from "../../components/ui/verification-model"


const RecoverPassword = () => {

  const demoEmail = "wavebudget@gmail.com"

  const navigate = useRouter()

  const [ emailErrBorder, setEmailErrBorder ] = useState(false)
  const [ errorDiv, setErrorDiv ] = useState<boolean>(false)
  const [verifyEmailModal, setVerifyEmailModal ] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<number>(3); // Countdown from 10 seconds
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const [ code1, setCode1 ] = useState<string>() 
  const [ code2, setCode2 ] = useState<string>() 
  const [ code3, setCode3 ] = useState<string>() 
  const [ code4, setCode4 ] = useState<string>() 
  const [ code5, setCode5 ] = useState<string>()
  const [otpErr, setOTPErr] = useState()
  const [ otpErrState, setOTPErrState ] =  useState(false)
  const [mode, setMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [ logoModal, setLogoModal ] = useState(false)

  
  const demoKey = "12345"



  const handleCode1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCode1(value)
  }
  const handleCode2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCode2(value)
  }
  const handleCode3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCode3(value)
  }
  const handleCode4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCode4(value)
  }
  const handleCode5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCode5(value)
  }


  const [ formData, setFormData ] = useState({
      email: '',
      password: '',
    })
  
    const [ errors, setErrors ] = useState({
      email: '',
      password: '',
    })

    const openModal = () => {
      setIsModalOpen(true)
    }
  
    const closeModal = () => {
      setIsModalOpen(false)
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = e.target
      setFormData((prev)=>({...prev, [name]: value}));
    }

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      let tempErrors:any = {};
  
      if (!formData.email) {
        tempErrors.email = 'Email is required';
        setEmailErrBorder(true)
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Email is invalid';
        setEmailErrBorder(true)
      } else if(formData.email !== demoEmail){
        tempErrors.email = "Incorrect email address"
        setEmailErrBorder(true)
      }else{
        setEmailErrBorder(false)
      }
  
      setErrors(tempErrors)
      if(Object.keys(tempErrors).length > 0){
        setErrorDiv(true)
      }else{
        setErrorDiv(false)
      }  

      if(!(Object.keys(tempErrors).length > 0)){
        setVerifyEmailModal(true)
        setMode(true)
      }
    };

    const handleConfirmEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      const entryCode = `${code1}${code2}${code3}${code4}${code5}`
  
      const err:any = []
      
      if(demoKey !== entryCode){
        err.push("Incorrect OTP")
        setErrorDiv(true)
        setOTPErrState(true)
      }else{
        setErrorDiv(false)
        setOTPErrState(false)
        setVerifyEmailModal(false)
        setLogoModal(true)
      }
      if(err.length > 0){
        setOTPErr(err)
      }
    }

    useEffect(()=>{
      if(logoModal === true){
  
                  // Reset countdown when modal opens
                  setTimeRemaining(3);
            
                  // Start countdown
                  const id = setInterval(() => {
                      setTimeRemaining(prevTime => {
                          if (prevTime <= 1) {
                              clearInterval(id);
                              navigate.push("/login")
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
    <RecoverBackgroundScreen>
      <div className='absolute inset-0 w-full min-h-screen bg-black/0 box-border'>
        <div className={`${ errorDiv === true ? "block":"hidden"}`}>        
          <div className='relative top-16 left-16 bg-[#FFEEEE] w-2/3 px-3 py-4 rounded-xl flex flex-row items-center gap-4'>
            <InvalidIcon className="w-5 h-5" />
            <div>
              { errors.email && <p className='text-[#ED0F0F] font-bold'>{ errors.email }</p>}
              { otpErr && <p className='text-[#ED0F0F] font-bold'>{ otpErr }</p> }
            </div>
          </div>
        </div>
        <LogoIcon className={"mx-auto mt-10"} />
        <h1 className='text-white text-center text-2xl font-bold my-4'>Recover Password</h1>
        <p className='text-white text-center'>Enter  your email, or phone number and we will send you a link/OTP to recover your password.</p>
        {/* <div className='absolute w-44 h-48 top-64 left-60 box-border'>
          <Image
            src={"/elements.png"}
            alt='elements-lock'
            fill
            priority
            className='object-contain z-50'
          />
        </div> */}
        <LockElement className={"relative top-20 left-72"} />
        <div className='bg-white w-full min-h-[28.125rem] box-border relative top-0 px-4 py-20 rounded-3xl'>
          <form>
          <label
          htmlFor="first-last-name"
          className="text-[#858585] text-xl font-semibold"
        >
          Email/Phone number
        </label>
        <EnvelopeIcon className={"absolute top-[129px] left-6 w-7 h-7"} />
        <input
          type="text"
          value={formData.email}
          name="email"
          className={`${
            emailErrBorder === true
              ? "border border-solid border-[#ED0F0F]"
              : ""
          } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`}
          placeholder="Email/phone number"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <Button type='button' onClick={ (e)=>{ handleSubmit(e) } } className='bg-[#0B7E78] text-white w-full mt-10 hover:bg-[#0B7E78]' size={"lg"}>Send OTP</Button>
          </form>
        </div>
      </div>
      <div className='relative top-44'>
        <VerificationModel isOpen ={ isModalOpen } isClose={ closeModal } verifyEmailModal={ verifyEmailModal } otpErrState = { otpErrState } handleCode1 = { handleCode1 } handleCode2 = { handleCode2 } handleCode3 = { handleCode3 } handleCode4 = { handleCode4 } handleCode5 = { handleCode5 } handleConfirmEmail = { handleConfirmEmail } />
      </div>
      <div className={`${ logoModal === true ? "block" : "hidden" } absolute -top-40 left-0 right-0 bottom-0 z-20 bg-black/20 flex flex-col items-center justify-center`}>
          <div className='relative flex flex-row items-center justify-center overflow-hidden w-24 h-24 rounded-full p-2 mx-auto bg-[#0B7E78]'>
            <LogoIcon />
          </div>
        </div>
    </RecoverBackgroundScreen>
  )
}

export default RecoverPassword;