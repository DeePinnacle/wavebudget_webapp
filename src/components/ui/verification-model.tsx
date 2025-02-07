'use client'
import { useEffect, useState  } from 'react'
import React from 'react'
import { 
    GreenLogoIcon, 
  } from '../icons/icons'

  import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'


  type itemProps = {
    className?: string
    verifyEmailModal: boolean,
    otpErrState: boolean,
    handleCode1: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleCode2: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleCode3: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleCode4: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleCode5: (e:React.ChangeEvent<HTMLInputElement>) => void, 
    isOpen: boolean,
    isClose: () => void,
    handleConfirmEmail: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, 
  }

const VerificationModel = ({ className, verifyEmailModal, otpErrState, handleCode1, handleCode2, handleCode3, handleCode4, handleCode5, handleConfirmEmail, isOpen, isClose }:itemProps) => {

    const [timeLeft, setTimeleft] = useState<number>(179); // 2 minutes 59 seconds
    // const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const pathname = usePathname()

    // modal state check
    useEffect(()=>{
      if(isOpen){
 
                  // Reset countdown when modal opens
                  // setSec(59);
                  // setMin(2)
            
                  // Start countdown
                  const id = setInterval(() => {
                      setTimeleft((prev)=>{
                        if( prev <= 0 ){
                          clearInterval(id)
                          return 0
                        }
                        return prev - 1
                      });
                  }, 1000);
      
                  // setIntervalId(id);
      
                  // // Cleanup interval on component unmount
                  // return () => {
                  //     if (intervalId) {
                  //         clearInterval(intervalId);
                  //     }
                  // };
              }else {
                setTimeleft(179)
              }
    },[isOpen])

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }


  return (
    <div className={`${ verifyEmailModal === true ? "block" : "hidden" } flex flex-col items-center justify-center`}>
      <div className='fixed inset-0 w-full min-h-screen bg-black/20'></div>
    <div className={`${ pathname ==='/register' ? 'mt-36' : '' } bg-white w-full min-h-2 py-10 mx-auto box-border px-2 absolute top-20 rounded-xl shadow-lg`}>
      <div className='relative overflow-hidden w-16 h-16 rounded-full p-2 mx-auto'>
        <GreenLogoIcon />
      </div>
      <h2 className='mt-5 text-black text-center text-xl font-bold'>Let&apos;s verify your email address</h2>
      <p className='my-3 text-center text-[#858585]'>
        We just sent an OTP to qubigs 101@gmail.com. Proceed to type in the OTP to confirm your account.
      </p>
      <form>
        <div className='flex flex-row justify-around items-center'>
          <input type='text' name='code-1' className={`${ otpErrState === true ? "border border-solid border-[#ED0F0F]" : ""} w-14 h-14 bg-[#E8EDE9] outline-none rounded-md text-center font-bold text-black`} maxLength={1} onChange={ (e)=>{ handleCode1(e) } } />
          <input type='text' name='code-2' className={`${ otpErrState === true ? "border border-solid border-[#ED0F0F]" : ""} w-14 h-14 bg-[#E8EDE9] outline-none rounded-md text-center font-bold text-black`} maxLength={1} onChange={(e)=>{ handleCode2(e)}} />
          <input type='text' name='code-3' className={`${ otpErrState === true ? "border border-solid border-[#ED0F0F]" : ""} w-14 h-14 bg-[#E8EDE9] outline-none rounded-md text-center font-bold text-black`} maxLength={1} onChange={(e)=>{ handleCode3(e)}} />
          <input type='text' name='code-4' className={`${ otpErrState === true ? "border border-solid border-[#ED0F0F]" : ""} w-14 h-14 bg-[#E8EDE9] outline-none rounded-md text-center font-bold text-black`} maxLength={1} onChange={(e)=>{handleCode4(e)}} />
          <input type='text' name='code-5' className={`${ otpErrState === true ? "border border-solid border-[#ED0F0F]" : ""} w-14 h-14 bg-[#E8EDE9] outline-none rounded-md text-center font-bold text-black`} maxLength={1} onChange={(e)=>{handleCode5(e)}} />
        </div>
        {
          timeLeft !== 0 ? (

            <p className='text-[#858585] my-2'>You haven&apos;t received OTP yet? <span className='text-[#0B7E78] font-bold'><span>{formatTime(timeLeft)}</span></span></p>
          ): (
            <p className='text-[#858585] my-2'>You haven&apos;t received OTP yet? <span className='text-[#0B7E78] font-bold'><span>Resend</span></span></p>
          )
        }
        <Button className='bg-[#0B7E78] w-full hover:bg-[#0B7E7*] my-5' onClick={(e)=>{handleConfirmEmail(e)}}>Confirm account</Button>
      </form>
    </div>
  </div>
  )
}

export default VerificationModel;