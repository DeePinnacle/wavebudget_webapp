'use client'
import React, { useEffect } from 'react'
import { 
  EnvelopeIcon, 
  EyeIcon, 
  EyeStrokeIcon, 
  GoogleIcon, 
  InvalidIcon, 
  LockIcon, 
  LogoIcon, 
  UserIcon 
} from '../icons/icons'
import Link from 'next/link'
import { useState } from 'react'
import VerificationModel from "@/components/ui/verification-model"
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const RegForm = () => {

  // redirect count down 

  // const [ countDown, setCountDown ] = useState(5)
  const navigate = useRouter()


  const demoEmail = "wavebudget@gmail.com"

  const demoKey = "12345"

  const [ otpErrState, setOTPErrState ] =  useState(false)
    
  const [ errorDiv, setErrorDiv ] = useState<boolean>(false)
  const [ firstnameErrBorder, setErrBorder ] = useState(false)
  const [ middlenameErrBorder, setMiddlenameErrBorder ] = useState(false)
  const [ lastnameErrBorder, setLastnameBorder ] = useState(false)
  const [ emailErrBorder, setEmailErrBorder ] = useState(false)
  const [ passErrBorder, setPassErrBorder ] = useState(false)
  const [ confirmPassErrBorder, setConfirmPassErrBorder ] = useState(false)
  const [verifyEmailModal, setVerifyEmailModal ] = useState(false)
  const [ logoModal, setLogoModal ] = useState(false)
  const [otpErr, setOTPErr] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [ code1, setCode1 ] = useState<string>() 
  const [ code2, setCode2 ] = useState<string>() 
  const [ code3, setCode3 ] = useState<string>() 
  const [ code4, setCode4 ] = useState<string>() 
  const [ code5, setCode5 ] = useState<string>()

  const [timeRemaining, setTimeRemaining] = useState<number>(3); // Countdown from 10 seconds
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const [ formData, setFormData ] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [ errors, setErrors ] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    password: '',
    confirmPassword: '',
    allFields: '',
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

    if(!formData.firstname){
      tempErrors.firstname = "Firstname required"
      setErrBorder(true)
    }else{
      setErrBorder(false)
    }
    if(!formData.middlename){
      tempErrors.middlename = "Middlename required"
      setMiddlenameErrBorder(true)
    }else{
      setMiddlenameErrBorder(false)
    }
    if(!formData.lastname){
      tempErrors.lastname = "Lastname required"
      setLastnameBorder(true)
    }else{
      setLastnameBorder(false)
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      setEmailErrBorder(true)
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      setEmailErrBorder(true)
    } else if(formData.email === demoEmail){
      tempErrors.email = "Email already exist"
      setEmailErrBorder(true)
    }else{
      setEmailErrBorder(false)
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
      setPassErrBorder(true)
    }else{
      setPassErrBorder(false)
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Confirm password is required';
      setConfirmPassErrBorder(true)
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords must match';
      setConfirmPassErrBorder(true)
    }else{
      setConfirmPassErrBorder(false)
    }

    const allFieldsEmpty = Object.values(formData).every(value => value === "");
    if(allFieldsEmpty){
      tempErrors.allFields = "all fields required"
    }

    setErrors(tempErrors)
    if(Object.keys(tempErrors).length > 0){
      setErrorDiv(true)
    }else{
      setErrorDiv(false)
    }

    if(!(Object.keys(tempErrors).length > 0)){
      setVerifyEmailModal(true)
      openModal()
    }   
  };
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
    <div className='box-border'>
      <div className={`${ errorDiv === true ? "block":"hidden"}`}>        
        <div className='absolute -top-28 left-16 bg-[#FFEEEE] w-2/3 px-3 py-4 rounded-xl flex flex-row items-center gap-4'>
          <InvalidIcon className="w-5 h-5" />
          <div>
            { errors.firstname && <p className='text-[#ED0F0F] font-bold'>{ errors.firstname }</p>}
            { errors.middlename && <p className='text-[#ED0F0F] font-bold'>{ errors.middlename }</p>}
            { errors.lastname && <p className='text-[#ED0F0F] font-bold'>{ errors.lastname }</p>}
            { errors.email && <p className='text-[#ED0F0F] font-bold'>{ errors.email }</p>}
            { errors.password && <p className='text-[#ED0F0F] font-bold'>{ errors.password }</p>}
            { errors.confirmPassword && <p className='text-[#ED0F0F] font-bold'>{ errors.confirmPassword }</p>}
            { otpErr && <p className='text-[#ED0F0F] font-bold'>{ otpErr }</p> }
          </div>
        </div>
      </div>
        <form method='post'>
            <label htmlFor='firstname' className='text-[#858585] text-xl font-semibold'>Firstname</label>
            <UserIcon className={`absolute top-[70px] left-6 w-7 h-7`} />
            <input type='text' value={ formData.firstname } name='firstname' className={`${firstnameErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Enter firstname' onChange={(e)=>{ handleOnChange(e)}} />

            <label htmlFor='middlename' className='text-[#858585] text-xl font-semibold'>MiddleName</label>
            <UserIcon className={`absolute top-[170px] left-6 w-7 h-7`} />
            <input type='text' value={ formData.middlename } name='middlename' className={`${middlenameErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Enter middlename' onChange={(e)=>{ handleOnChange(e)}} />
            
            <label htmlFor='lastname' className='text-[#858585] text-xl font-semibold'>Lastname</label>
            <UserIcon className={`absolute top-[266px] left-6 w-7 h-7`} />
            <input type='text' value={ formData.lastname } name='lastname' className={`${lastnameErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Enter lastname' onChange={(e)=>{ handleOnChange(e)}} />

            <label htmlFor='first-last-name' className='text-[#858585] text-xl font-semibold'>Email/Phone number</label>
            <EnvelopeIcon className={"absolute top-[367px] left-6 w-7 h-7"} />
            <input type='text' value={ formData.email } name='email' className={`${emailErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Email/phone number' onChange={(e)=>{ handleOnChange(e)}} />

            <label htmlFor='first-last-name' className='text-[#858585] text-xl font-semibold'>Password</label>
            <LockIcon className={"absolute top-[462px] left-6 w-7 h-7"} />
            <input type='text' value={ formData.password } name='password' className={`${passErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Password' onChange={(e)=>{ handleOnChange(e)}} />
            <EyeIcon className={"absolute top-[462px] right-8 w-7 h-7"} />

            <label htmlFor='first-last-name' className='text-[#858585] text-xl font-semibold'>Confirm password</label>
            <LockIcon className={"absolute top-[557px] left-6 w-7 h-7"} />
            <input type='password' value={ formData.confirmPassword } name='confirmPassword' className={`${confirmPassErrBorder === true ? "border border-solid border-[#ED0F0F]":"" } w-full text-lg my-2 py-3 px-2 rounded-md border border-solid border-[#DBE1E1] placeholder:pl-10 placeholder:text-sm outline-none`} placeholder='Confirm password' onChange={(e)=>{ handleOnChange(e)}} />
            <EyeStrokeIcon className={"absolute top-[557px] right-8 w-7 h-7"} />
            
            <label htmlFor='checkbox' className='flex flex-row gap-1'>
              <input type='checkbox' />
              <p id='checkbox' className='text-[#858585] font-bold'><span>I agree to </span><span className='text-[#0B7E78]'>terms of service</span> and <span className='text-[#0B7E78]'>privacy policy</span></p>
            </label>

            <Button type='button' onClick={ (e)=>{ handleSubmit(e) } } className='bg-[#0B7E78] text-white w-full mt-10 hover:bg-[#0B7E78]' size={"lg"}>Create account</Button>
            <p className="text-center"><span className="text-[#858585] my-2">Already have an account? </span><Link href="/login" className="text-[#0B7E78] font-bold">Log in</Link></p>

            <div className='w-full bg-slate-200 border border-solid mt-3 relative flex flex-row items-center justify-center'>
              <div className='absolute -top-3 w-6 h-6 p-2 flex flex-row items-center justify-center bg-white'>
                <p className='text-[#DBE1E1]'>Or</p>
              </div>
            </div>

            <Button className='w-full bg-transparent border border-solid border-[#0B7E78] rounded-md my-4 text-[#0B7E78] hover:bg-transparent'><span><GoogleIcon /> </span>Create account with google</Button>
        </form>
        <VerificationModel isOpen={ isModalOpen } isClose={ closeModal } verifyEmailModal={ verifyEmailModal } otpErrState = { otpErrState } handleCode1 = { handleCode1 } handleCode2 = { handleCode2 } handleCode3 = { handleCode3 } handleCode4 = { handleCode4 } handleCode5 = { handleCode5 } handleConfirmEmail = { handleConfirmEmail } />
        <div className={`${ logoModal === true ? "block" : "hidden" } absolute -top-40 left-0 right-0 bottom-0 z-20 bg-black/20 flex flex-col items-center justify-center`}>
          <div className='relative flex flex-row items-center justify-center overflow-hidden w-24 h-24 rounded-full p-2 mx-auto bg-[#0B7E78]'>
            <LogoIcon />
          </div>
        </div>
    </div>
  )
}

export default RegForm