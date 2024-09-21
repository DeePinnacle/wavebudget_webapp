'use client'
import React, { useState } from 'react'
import KycBG from '../../components/ui/kyc-bg';
import { userType } from "../../config/data"
import { Button } from '../../components/ui/button'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const KYC = () => {
    const [ role, setRole ] = useState<string>()

    const router = useRouter()

    const handleUserRole = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { id } = e.currentTarget
        setRole(id)
    }

    const handleProceed = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault()
        if(role ==='Buyer' ){
            router.push('/kyc/verify-kyc/buyer')
        }

        if(role ==='Merchant' ){
            router.push('/kyc/verify-kyc/vendor')
        }
    }

  return (
    <div>
        <KycBG>
            <p className='text-xl text-[#858585] mt-7 ml-3 uppercase'>one last step</p>
            <h1 className='text-3xl ml-3 mt-2 font-bold font-montserrat'>Select user type</h1>
            {/* <p>{ role }</p> */}
            <div className='my-12 p-2'>
                {
                    userType.map((type, index)=>{

                        return(
                            <div key={ index } className={`${ role === type.role ? "border border-solid border-[#0B7E78] bg-[#F6FEFE] p-2 rounded-md" : "" } relative w-full min-h-10 bg-[#F9FBFB] my-3 box-border flex flex-row items-center gap-3 cursor-pointer`}>
                                <div className='relative w-96 h-36 overflow-hidden'>
                                    <Image 
                                        src={type.image}
                                        alt='role-image'
                                        fill
                                        priority
                                        className='object-cover'
                                    />
                                </div>
                                <div className=' p-2'>
                                    <p className='text-[#858585] font-bold'>{ type.role }</p>
                                    <p className='max-w-prose text-[#858585]'>{ type.content }</p>
                                </div>
                                <div id={ type.role } className='absolute w-full inset-0 min-4 bg-black/0' onClick={ (e)=>{ handleUserRole(e) } }></div>
                            </div>
                        )
                    })
                }
                <form>
                    {
                        role ? (
                            <Button className='w-full bg-[#0B7E78] hover:bg-[#0B7E78] mt-20 mb-7' size={"lg"} onClick={ (e) => { handleProceed(e) } } >Proceed</Button>
                        ) : (
                            <Button className='w-full bg-[#D1D1D1] hover:bg-[#D1D1D1] mt-20 mb-7 cursor-not-allowed' size={"lg"} disabled >Proceed</Button>                           
                        )
                    }
                </form>
            </div>
        </KycBG>
    </div>
  )
}

export default KYC;