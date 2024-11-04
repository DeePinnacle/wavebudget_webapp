'use client'
import { BackIcon, Lock2Icon, TwoFacAuthIcon } from "@/components/icons/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button"

import { useState } from "react"
import Image from "next/image"

const MyOrders = () => {
    const navigation = useRouter();
    const handleBack = () => {
      navigation.back();
    };

    const [ order, setOrder ] = useState<string>('Paid')

    // handle order section switch 
    const handleOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      setOrder(e.currentTarget.innerHTML)
    }

  return (
    <div className="bg-white">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto">
          <p className="text-black text-center text-2xl font-semibold font-montserrat -ml-6">
            My Orders
          </p>
        </div>
      </div>
      <div className="p-4 w-full">
        <div className="flex flex-row items-center justify-between">
            <Button className={` ${order ==='Paid' ? 'bg-[#0B7E78] text-white':''} hover:text-[#0B7E78] `} variant={"secondary"} onClick={(e)=>{ handleOrder(e)}}>Paid</Button>
            <Button className={` ${order ==='Shipped' ? 'bg-[#0B7E78] text-white':''} hover:text-[#0B7E78] `} variant={"secondary"} onClick={(e)=>{ handleOrder(e)}}>Shipped</Button>
            <Button className={` ${order ==='Returns/Refund' ? 'bg-[#0B7E78] text-white':''} hover:text-[#0B7E78] `} variant={"secondary"} onClick={(e)=>{ handleOrder(e)}}>Returns/Refund</Button>
            <Button className={` ${order ==='Processed' ? 'bg-[#0B7E78] text-white':''} hover:text-[#0B7E78] `} variant={"secondary"} onClick={(e)=>{ handleOrder(e)}}>Processed</Button>
        </div>
        {
          order ==="Paid" && (
            <>            
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Rice.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of payment: Nov 04, 2024</p>
              </div>              
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Rice.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of payment: Nov 04, 2024</p>
              </div>              
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Rice.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of payment: Nov 04, 2024</p>
              </div>
            </>
          )
        }
                {
          order ==="Returns/Refund" && (
            <>            
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Basit store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Laptop.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Computer...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of returned: Nov 04, 2024</p>
              </div>              
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Laptop.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of returned: Nov 04, 2024</p>
              </div>              
            </>
          )
        }

{
          order ==="Shipped" && (
            <>            
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Basit store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Shoe.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Pair of shoes...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of delivery: Nov 04, 2024</p>
              </div>              
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Shoe.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date of delivery: Nov 04, 2024</p>
              </div>              
            </>
          )
        }

{
          order ==="Processed" && (
            <>            
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Basit store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Shoe.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Pair of shoes...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date Completed: Nov 04, 2024</p>
              </div>              
              <div className='mt-4 w-full min-h-6 px-2 py-3 bg-slate-50 my-2'>
                <p className="font-semibold">Adams store</p>
                <div className="flex flex-row gap-2 my-1">
                  <div className="w-36 h-36 relative overflow-hidden">
                    <Image src={"/Shoe.png"} alt="shopping-image" fill priority className="object-contain" /> 
                  </div>
                  <div className='w-9/12 my-3'>
                    <p className='font-semibold'>Bag of Rice...</p>
                    <span className="flex flex-row items-center gap-2">
                      <p>Price:</p>
                      <p className='text-slate-500 my-2'>N10 000</p>
                    </span>                  
                    <span className="flex flex-row items-center gap-2">
                      <p>Qty:</p>
                      <p className='text-slate-500 my-2'>5</p>
                    </span>
                  </div>
                </div>
                <p className="text-slate-500">Date Completed: Nov 04, 2024</p>
              </div>              
            </>
          )
        }
      </div>
    </div>
  );
};

export default MyOrders;
